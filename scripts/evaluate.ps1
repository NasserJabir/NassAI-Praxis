param(
    [Parameter(Mandatory=$true)]
    [string]$TaskName,
    
    [Parameter(Mandatory=$true)]
    [int]$TotalScore,
    
    [string]$CodeQuality = "0/6",
    [string]$Testing = "0/6",
    [string]$Security = "0/6",
    [string]$Documentation = "0/5",
    [string]$MemoryLearning = "0/5",
    [string]$ProcessAdherence = "0/5",
    
    [string]$Notes = "",
    [string]$Lessons = "",
    [string]$AgentName = "main",
    [string]$MemoryRoot = ""
)

if (-not $MemoryRoot) {
    $MemoryRoot = Join-Path $PSScriptRoot "..\memory"
}

$Today = Get-Date -Format "yyyy-MM-dd"
$Now = Get-Date -Format "HH:mm"
$EpisodeFile = Join-Path $MemoryRoot "episodic\$Today.md"
$WorkingFile = Join-Path $MemoryRoot "working\context.md"
$PatternsFile = Join-Path $PSScriptRoot "..\evolve\refine\patterns.md"

# --- 1. Record in episodic memory ---
$Rating = if ($TotalScore -ge 30) { "Excellent" }
           elseif ($TotalScore -ge 25) { "Good" }
           elseif ($TotalScore -ge 20) { "Acceptable" }
           else { "Needs Work" }

$Entry = @"

## $Now - $TaskName
- **Agent:** $AgentName
- **Score:** $TotalScore/33 - $Rating
- **Breakdown:** Q:$CodeQuality T:$Testing S:$Security D:$Documentation M:$MemoryLearning P:$ProcessAdherence
- **Notes:** $Notes
"@

if ($Lessons) {
    $Entry += "`n- **Lessons:** $Lessons"
}

if (-not (Test-Path $EpisodeFile)) {
    $Header = "# Episode: $Today`n`n## Tasks`n"
    Set-Content -Path $EpisodeFile -Value $Header -Encoding UTF8
}
Add-Content -Path $EpisodeFile -Value $Entry -Encoding UTF8
Write-Host "[memory] Recorded in $EpisodeFile"

# --- 2. Update working memory ---
$WorkingEntry = @"
## Last Task
- Name: $TaskName
- Score: $TotalScore/33 ($Rating)
- Agent: $AgentName
- Date: $Today $Now
"@
Set-Content -Path $WorkingFile -Value $WorkingEntry -Encoding UTF8
Write-Host "[memory] Updated working context"

# --- 3. Record patterns ---
if ($TotalScore -ge 30 -and $Lessons) {
    $PatternEntry = @"

### Pattern: $Today $Now - $TaskName
- **Score:** $TotalScore/33
- **Agent:** $AgentName
- **Lesson:** $Lessons
- **Status:** confirmed
"@
    Add-Content -Path $PatternsFile -Value $PatternEntry -Encoding UTF8
    Write-Host "[evolve] Success pattern recorded in refine/patterns.md"
}
elseif ($TotalScore -lt 25) {
    $AntiPattern = @"

### Anti-Pattern: $Today $Now - $TaskName
- **Score:** $TotalScore/33
- **Issue:** $Notes
- **Status:** to-fix
"@
    Add-Content -Path $PatternsFile -Value $AntiPattern -Encoding UTF8
    Write-Host "[evolve] Weak pattern recorded in refine/patterns.md"
}

# --- 4. Check for repeated procedure ---
$PendingSkillsFile = Join-Path $PSScriptRoot "..\evolve\skills-gen\auto-skills.md"
$RepeatCount = 0
if (Test-Path $EpisodeFile) {
    $EpisodeContent = Get-Content $EpisodeFile -Raw
    $Matches = [regex]::Matches($EpisodeContent, [regex]::Escape($TaskName))
    $RepeatCount = $Matches.Count
}

if ($RepeatCount -ge 3 -and $TotalScore -ge 30) {
    Write-Host ""
    Write-Host "[auto-skill] Procedure repeated $RepeatCount times successfully!"
    Write-Host "[auto-skill] Review evolve/skills-gen/auto-skills.md to create new skill"
}

Write-Host ""
Write-Host "=== Evaluation Complete ==="
Write-Host "Score: $TotalScore/33 ($Rating)"
