param(
    [string]$MemoryRoot = "",
    [string]$SkillsRoot = "",
    [int]$MinRepeats = 3,
    [int]$MinScore = 30
)

if (-not $MemoryRoot) { $MemoryRoot = Join-Path $PSScriptRoot "..\memory" }
if (-not $SkillsRoot) { $SkillsRoot = Join-Path $PSScriptRoot "..\skills" }

$EvolveDir = Join-Path $PSScriptRoot "..\evolve\skills-gen"
$PendingFile = Join-Path $EvolveDir "auto-skills.md"
$EpisodicDir = Join-Path $MemoryRoot "episodic"

Write-Host "=== Auto Skill Generation Check ==="
Write-Host ""

# --- 1. Collect all tasks from episodic memory ---
$Tasks = @{}
$Episodes = Get-ChildItem $EpisodicDir -Filter "*.md" -ErrorAction SilentlyContinue

foreach ($ep in $Episodes) {
    if ($ep.Name -eq "template.md") { continue }
    
    $lines = Get-Content $ep.FullName
    $currentTask = $null
    $currentScore = $null
    
    foreach ($line in $lines) {
        # Check for task header: ## HH:MM - TaskName
        if ($line -match "^## (\d{2}:\d{2}) - (.+)$") {
            $currentTask = $Matches[2].Trim()
        }
        # Check for score line: - **Score:** XX/33
        elseif ($line -match "Score:\*\* (\d+)/33" -and $currentTask) {
            $currentScore = [int]$Matches[1]
            
            if (-not $Tasks.ContainsKey($currentTask)) {
                $Tasks[$currentTask] = @{ Count = 0; TotalScore = 0 }
            }
            $Tasks[$currentTask].Count++
            $Tasks[$currentTask].TotalScore += $currentScore
            
            $currentTask = $null
            $currentScore = $null
        }
    }
}

Write-Host "Found $($Tasks.Count) unique tasks in memory"
Write-Host ""

# --- 2. Check for repeated tasks ---
$Candidates = @()
foreach ($task in $Tasks.GetEnumerator()) {
    $name = $task.Key
    $count = $task.Value.Count
    $avgScore = $task.Value.TotalScore / $count
    
    if ($count -ge $MinRepeats -and $avgScore -ge $MinScore) {
        $Candidates += @{
            Name = $name
            Count = $count
            AvgScore = [math]::Round($avgScore, 1)
        }
        Write-Host "[candidate] $name - repeated $count times, avg $avgScore"
    }
}

if ($Candidates.Count -eq 0) {
    Write-Host ""
    Write-Host "No tasks meet generation criteria yet"
    Write-Host "Required: repeats >= $MinRepeats + avg score >= $MinScore"
    exit 0
}

# --- 3. Create new skills ---
$SkillsDir = Join-Path $SkillsRoot "auto-generated"
if (-not (Test-Path $SkillsDir)) {
    New-Item -ItemType Directory -Path $SkillsDir -Force | Out-Null
}

foreach ($candidate in $Candidates) {
    $skillName = $candidate.Name -replace '[^a-zA-Z0-9]', '-' | ForEach-Object { $_.ToLower() }
    $skillDir = Join-Path $SkillsDir $skillName
    $skillFile = Join-Path $skillDir "SKILL.md"
    
    if (Test-Path $skillFile) {
        Write-Host "[skip] Skill '$skillName' already exists"
        continue
    }
    
    New-Item -ItemType Directory -Path $skillDir -Force | Out-Null
    
    $skillContent = @"
# $($candidate.Name)

## Description
Auto-generated skill from repeating procedure "$($candidate.Name)" ($($candidate.Count) times).

## When to Activate
- When executing: $($candidate.Name)
- When context is similar to previous tasks

## Process
1. Check episodic memory for previous tasks with same name
2. Extract success patterns from refine/patterns.md
3. Execute procedure avoiding weak patterns
4. Evaluate result and record in memory

## Quality Criteria
- [ ] Procedure executed successfully (score >= 25/33)
- [ ] No repeated weak patterns
- [ ] Result is reproducible

## Stats
- **Generated:** $(Get-Date -Format "yyyy-MM-dd")
- **Repeats:** $($candidate.Count)
- **Avg Score:** $($candidate.AvgScore)/33
- **Status:** auto-generated (draft)

## References
- Review patterns in: evolve/refine/patterns.md
- Review past tasks in: memory/episodic/
"@
    
    Set-Content -Path $skillFile -Value $skillContent -Encoding UTF8
    Write-Host "[created] New skill: $skillName"
}

Write-Host ""
Write-Host "=== Skill Generation Complete ==="
