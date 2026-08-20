param(
    [Parameter(Mandatory=$true)]
    [string]$PersonaName,
    
    [Parameter(Mandatory=$true)]
    [string]$TaskName,
    
    [string]$Outcome = "success",
    [string]$NewSkill = "",
    [string]$NewExperience = "",
    [string]$LessonsLearned = "",
    [string]$PersonasRoot = ""
)

if (-not $PersonasRoot) { $PersonasRoot = Join-Path $PSScriptRoot "..\personas" }

$PersonaDir = Join-Path $PersonasRoot $PersonaName
$ExperienceFile = Join-Path $PersonaDir "experience.md"
$SkillsFile = Join-Path $PersonaDir "skills.md"
$PreferencesFile = Join-Path $PersonaDir "preferences.md"

Write-Host "=== Updating Persona: $PersonaName ==="
Write-Host ""

# --- Check if persona exists ---
if (-not (Test-Path $PersonaDir)) {
    Write-Host "[error] Persona '$PersonaName' not found"
    Write-Host "Available personas:"
    Get-ChildItem $PersonasRoot -Directory | ForEach-Object { Write-Host "  - $($_.Name)" }
    exit 1
}

# --- 1. Add new experience ---
$Today = Get-Date -Format "yyyy-MM-dd"
$Now = Get-Date -Format "HH:mm"

$ExperienceEntry = @"

### $Today $Now - $TaskName
- **Outcome:** $Outcome
- **Agent:** $PersonaName
"@

if ($NewExperience) {
    $ExperienceEntry += "`n- **Experience:** $NewExperience"
}
if ($LessonsLearned) {
    $ExperienceEntry += "`n- **Lessons:** $LessonsLearned"
}

Add-Content -Path $ExperienceFile -Value $ExperienceEntry -Encoding UTF8
Write-Host "[experience] Added new experience: $TaskName"

# --- 2. Add new skill ---
if ($NewSkill) {
    $SkillsContent = Get-Content $SkillsFile -Raw
    
    if ($SkillsContent -notmatch [regex]::Escape($NewSkill)) {
        $SkillEntry = "`n- $NewSkill (learned on $Today)"
        Add-Content -Path $SkillsFile -Value $SkillEntry -Encoding UTF8
        Write-Host "[skills] New skill: $NewSkill"
    } else {
        Write-Host "[skills] Skill '$NewSkill' already exists"
    }
}

# --- 3. Update preferences based on outcome ---
if (Test-Path $PreferencesFile) {
    $PrefsContent = Get-Content $PreferencesFile -Raw
    
    if ($Outcome -eq "success") {
        $PrefEntry = "`n- likes: $TaskName (succeeded on $Today)"
        Add-Content -Path $PreferencesFile -Value $PrefEntry -Encoding UTF8
        Write-Host "[preferences] Recorded preference: $TaskName"
    }
    elseif ($Outcome -eq "failure") {
        $PrefEntry = "`n- avoids: $TaskName (failed on $Today)"
        Add-Content -Path $PreferencesFile -Value $PrefEntry -Encoding UTF8
        Write-Host "[preferences] Recorded avoidance: $TaskName"
    }
}

# --- 4. Update linked agent file ---
$AgentsDir = Join-Path $PSScriptRoot "..\agents"
$AgentFile = Join-Path $AgentsDir "$PersonaName.md"

if (Test-Path $AgentFile) {
    $AgentUpdate = @"

---

## Recent Activity ($Today)
- Task: $TaskName
- Outcome: $Outcome
- Persona: $PersonaName
- Updated: $Today $Now
"@
    
    if ($NewSkill) {
        $AgentUpdate += "`n- New Skill: $NewSkill"
    }
    if ($LessonsLearned) {
        $AgentUpdate += "`n- Lessons: $LessonsLearned"
    }
    
    Add-Content -Path $AgentFile -Value $AgentUpdate -Encoding UTF8
    Write-Host "[agent] Updated agent file: $PersonaName.md"
}

Write-Host ""
Write-Host "=== Persona Update Complete ==="
