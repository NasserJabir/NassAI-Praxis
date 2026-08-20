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

Write-Host "=== فحص توليد المهارات التلقائي ==="
Write-Host ""

# --- 1. اجمع كل المهام من الذاكرة العرضية ---
$Tasks = @{}
$ Episodes = Get-ChildItem $EpisodicDir -Filter "*.md" -ErrorAction SilentlyContinue

foreach ($ep in $Episodes) {
    $content = Get-Content $ep.FullName -Raw
    $matches = [regex]::Matches($content, "## (\d{2}:\d{2}) — (.+?)\r?\n.*Score: (\d+)/33")
    foreach ($m in $matches) {
        $name = $m.Groups[2].Value.Trim()
        $score = [int]$m.Groups[3].Value
        if (-not $Tasks.ContainsKey($name)) {
            $Tasks[$name] = @{ Count = 0; TotalScore = 0; Scores = @() }
        }
        $Tasks[$name].Count++
        $Tasks[$name].TotalScore += $score
        $Tasks[$name].Scores += $score
    }
}

Write-Host "تم العثور على $($Tasks.Count) مهام فريدة في الذاكرة"
Write-Host ""

# --- 2. تحقق من المهام المتكررة ---
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
        Write-Host "[candidate] $name — تكرر $count مرات، متوسط $avgScore"
    }
}

if ($Candidates.Count -eq 0) {
    Write-Host ""
    Write-Host "لا توجد مهام تحقق شروط التوليد بعد"
    Write-Host "المطلوب: تكرار >= $MinRepeats + متوسط 점수 >= $MinScore"
    exit 0
}

# --- 3. أنشئ مهارات جديدة ---
$SkillsDir = Join-Path $SkillsRoot "auto-generated"
if (-not (Test-Path $SkillsDir)) {
    New-Item -ItemType Directory -Path $SkillsDir -Force | Out-Null
}

foreach ($candidate in $Candidates) {
    $skillName = $candidate.Name -replace '[^a-zA-Z0-9]', '-' | ForEach-Object { $_.ToLower() }
    $skillDir = Join-Path $SkillsDir $skillName
    $skillFile = Join-Path $skillDir "SKILL.md"
    
    if (Test-Path $skillFile) {
        Write-Host "[skip] المهارة '$skillName' موجودة مسبقاً"
        continue
    }
    
    New-Item -ItemType Directory -Path $skillDir -Force | Out-Null
    
    $skillContent = @"
# $($candidate.Name)

## Description
مهارة مولّدة تلقائياً من تكرار الإجراء "$($candidate.Name)" ($($candidate.Count) مرات).

## When to Activate
- عند تنفيذ: $($candidate.Name)
- عندما يكون السياق مماثلاً للمهام السابقة

## Process
1. ارجع للذاكرة العرضية واطلع على المهام السابقة بنفس الاسم
2. استخرج الأنماط الناجحة من refine/patterns.md
3. نفّذ الإجراء مع تجنب الأنماط الضعيفة
4. قيّم النتيجة وسجّل في الذاكرة

## Quality Criteria
- [ ] الإجراء نُفّذ بنجاح (점수 >= 25/33)
- [ ] لا توجد أنماط ضعيفة متكررة
- [ ] النتيجة قابلة للتكرار

## Stats
- **Generated:** $(Get-Date -Format "yyyy-MM-dd")
- **Repeats:** $($candidate.Count)
- **Avg Score:** $($candidate.AvgScore)/33
- **Status:** auto-generated (draft)

## References
- راجع أنماط في: evolve/refine/patterns.md
- راجع المهام السابقة في: memory/episodic/
"@
    
    Set-Content -Path $skillFile -Value $skillContent -Encoding UTF8
    Write-Host "[created] مهارة جديدة: $skillName"
}

Write-Host ""
Write-Host "=== اكتمل توليد المهارات ==="
