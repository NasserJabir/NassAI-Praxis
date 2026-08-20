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

Write-Host "=== تحديث شخصية $PersonaName ==="
Write-Host ""

# --- تحقق من وجود الشخصية ---
if (-not (Test-Path $PersonaDir)) {
    Write-Host "[error] الشخصية '$PersonaName' غير موجودة"
    Write-Host "الشخصيات المتاحة:"
    Get-ChildItem $PersonasRoot -Directory | ForEach-Object { Write-Host "  - $($_.Name)" }
    exit 1
}

# --- 1. أضف خبرة جديدة ---
$تاريخ = Get-Date -Format "yyyy-MM-dd"
$وقت = Get-Date -Format "HH:mm"

$ExperienceEntry = @"

### $تاريخ $وقت — $TaskName
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
Write-Host "[experience] أُضيف خبرة جديدة: $TaskName"

# --- 2. أضف مهارة جديدة ---
if ($NewSkill) {
    $SkillsContent = Get-Content $SkillsFile -Raw
    
    if ($SkillsContent -notmatch [regex]::Escape($NewSkill)) {
        # المهارة غير موجودة — أضفها
        $SkillEntry = "`n- $NewSkill (اكتُسبت في $تاريخ)"
        Add-Content -Path $SkillsFile -Value $SkillEntry -Encoding UTF8
        Write-Host "[skills] مهارة جديدة: $NewSkill"
    } else {
        Write-Host "[skills] المهارة '$NewSkill' موجودة مسبقاً"
    }
}

# --- 3. حدّث التفضيلات بناءً على النتيجة ---
if (Test-Path $PreferencesFile) {
    $PrefsContent = Get-Content $PreferencesFile -Raw
    
    if ($Outcome -eq "success") {
        $PrefEntry = "`n-喜欢: $TaskName (نجحت في $تاريخ)"
        Add-Content -Path $PreferencesFile -Value $PrefEntry -Encoding UTF8
        Write-Host "[preferences] سُجّل تفضيل: $TaskName"
    }
    elseif ($Outcome -eq "failure") {
        $PrefEntry = "`n- avoids: $TaskName (فشلت في $تاريخ)"
        Add-Content -Path $PreferencesFile -Value $PrefEntry -Encoding UTF8
        Write-Host "[preferences] سُجّل تجنب: $TaskName"
    }
}

# --- 4. حقن الملفات المدمجة في الوكيل ---
# تحديث ملف الوكيل المرتبط بهذه الشخصية
$AgentsDir = Join-Path $PSScriptRoot "..\agents"
$AgentFile = Join-Path $AgentsDir "$PersonaName.md"

if (Test-Path $AgentFile) {
    $AgentContent = Get-Content $AgentFile -Raw
    
    # أضف الخبرة في نهاية ملف الوكيل
    $AgentUpdate = @"

---

## Recent Activity ($تاريخ)
- Task: $TaskName
- Outcome: $Outcome
- Persona: $PersonaName
- Updated: $تاريخ $وقت
"@
    
    if ($NewSkill) {
        $AgentUpdate += "`n- New Skill: $NewSkill"
    }
    if ($LessonsLearned) {
        $AgentUpdate += "`n- Lessons: $LessonsLearned"
    }
    
    Add-Content -Path $AgentFile -Value $AgentUpdate -Encoding UTF8
    Write-Host "[agent] حدّث ملف الوكيل: $PersonaName.md"
}

Write-Host ""
Write-Host "=== اكتمل تحديث الشخصية ==="
