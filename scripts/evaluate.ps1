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

$日期 = Get-Date -Format "yyyy-MM-dd"
$وقت = Get-Date -Format "HH:mm"
$EpisodeFile = Join-Path $MemoryRoot "episodic\$日期.md"
$WorkingFile = Join-Path $MemoryRoot "working\context.md"
$PatternsFile = Join-Path $PSScriptRoot "..\evolve\refine\patterns.md"

# --- 1. سجل في الذاكرة العرضية ---
$Rating = if ($TotalScore -ge 30) { "Excellent" }
           elseif ($TotalScore -ge 25) { "Good" }
           elseif ($TotalScore -ge 20) { "Acceptable" }
           else { "Needs Work" }

$Entry = @"

## $وقت — $TaskName
- **Agent:** $AgentName
- **Score:** $TotalScore/33 — $Rating
- **Breakdown:** Q:$CodeQuality T:$Testing S:$Security D:$Documentation M:$MemoryLearning P:$ProcessAdherence
- **Notes:** $Notes
"@

if ($Lessons) {
    $Entry += "`n- **Lessons:** $Lessons"
}

if (-not (Test-Path $EpisodeFile)) {
    $Header = "# Episode: $日期`n`n## Tasks`n"
    Set-Content -Path $EpisodeFile -Value $Header -Encoding UTF8
}
Add-Content -Path $EpisodeFile -Value $Entry -Encoding UTF8
Write-Host "[memory] سُجّل في $EpisodeFile"

# --- 2. حدّث الذاكرة العرضية ---
$WorkingEntry = @"
## Last Task
- Name: $TaskName
- Score: $TotalScore/33 ($Rating)
- Agent: $AgentName
- Date: $日期 $وقت
"@
Set-Content -Path $WorkingFile -Value $WorkingEntry -Encoding UTF8
Write-Host "[memory] حدّث working context"

# --- 3. سجّل الأنماط ---
if ($TotalScore -ge 30 -and $Lessons) {
    $PatternEntry = @"

### Pattern: $日期 $وقت — $TaskName
- **Score:** $TotalScore/33
- **Agent:** $AgentName
- **Lesson:** $Lessons
- **Status:** confirmed
"@
    Add-Content -Path $PatternsFile -Value $PatternEntry -Encoding UTF8
    Write-Host "[evolve] نمط ناجح سُجّل في refine/patterns.md"
}
elseif ($TotalScore -lt 25) {
    $AntiPattern = @"

### Anti-Pattern: $日期 $وقت — $TaskName
- **Score:** $TotalScore/33
- **Issue:** $Notes
- **Status:** to-fix
"@
    Add-Content -Path $PatternsFile -Value $AntiPattern -Encoding UTF8
    Write-Host "[evolve] نمط ضعيف سُجّل في refine/patterns.md"
}

# --- 4. تحقق من تكرار الإجراء ---
$PendingSkillsFile = Join-Path $PSScriptRoot "..\evolve\skills-gen\auto-skills.md"
$RepeatCount = 0
if (Test-Path $EpisodeFile) {
    $EpisodeContent = Get-Content $EpisodeFile -Raw
    $Matches = [regex]::Matches($EpisodeContent, [regex]::Escape($TaskName))
    $RepeatCount = $Matches.Count
}

if ($RepeatCount -ge 3 -and $TotalScore -ge 30) {
    Write-Host ""
    Write-Host "[auto-skill] الإجراء تكرر $RepeatCount مرات بنجاح!"
    Write-Host "[auto-skill] راجع evolve/skills-gen/auto-skills.md لإنشاء مهارة جديدة"
}

Write-Host ""
Write-Host "=== التقييم مكتمل ==="
Write-Host "النتيجة: $TotalScore/33 ($Rating)"
