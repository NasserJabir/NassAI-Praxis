param(
    [string]$MemoryRoot = "",
    [string]$AgentsRoot = "",
    [int]$MinRepeats = 3
)

if (-not $MemoryRoot) { $MemoryRoot = Join-Path $PSScriptRoot "..\memory" }
if (-not $AgentsRoot) { $AgentsRoot = Join-Path $PSScriptRoot "..\agents" }

$EvolveDir = Join-Path $PSScriptRoot "..\evolve\agents-gen"
$PendingFile = Join-Path $EvolveDir "auto-agents.md"
$EpisodicDir = Join-Path $MemoryRoot "episodic"

Write-Host "=== Auto Agent Generation Check ==="
Write-Host ""

# --- 1. Collect existing agents ---
$ExistingAgents = @()
Get-ChildItem $AgentsRoot -Directory -ErrorAction SilentlyContinue | ForEach-Object {
    $agentFile = Join-Path $_.FullName "AGENT.md"
    if (Test-Path $agentFile) {
        $content = Get-Content $agentFile -Head 10
        $role = ($content | Where-Object { $_ -match "Role:" }) -replace ".*Role:\s*", ""
        $ExistingAgents += @{
            Name = $_.Name
            Role = $role
            Dir = $_.FullName
        }
        Write-Host "[existing] $($_.Name) - $role"
    }
}

Write-Host ""
Write-Host "Existing agents: $($ExistingAgents.Count)"

# --- 2. Collect tasks from memory ---
$TaskAgents = @{}
$Episodes = Get-ChildItem $EpisodicDir -Filter "*.md" -ErrorAction SilentlyContinue

foreach ($ep in $Episodes) {
    $content = Get-Content $ep.FullName -Raw
    $matches = [regex]::Matches($content, "## (\d{2}:\d{2}) - (.+?)\r?\n.*Agent: (\w+)")
    foreach ($m in $matches) {
        $taskName = $m.Groups[2].Value.Trim()
        $agent = $m.Groups[3].Value.Trim()
        if (-not $TaskAgents.ContainsKey($taskName)) {
            $TaskAgents[$taskName] = @{ Agent = $agent; Count = 0 }
        }
        $TaskAgents[$taskName].Count++
    }
}

# --- 3. Check for tasks without suitable agent ---
Write-Host ""
Write-Host "=== Checking tasks without suitable agent ==="

$NeedNewAgent = @()
foreach ($task in $TaskAgents.GetEnumerator()) {
    $taskName = $task.Key
    $agent = $task.Value.Agent
    $count = $task.Value.Count
    
    if ($agent -eq "main" -and $count -ge $MinRepeats) {
        $NeedNewAgent += @{
            TaskName = $taskName
            Count = $count
        }
        Write-Host "[need-agent] $taskName - executed $count times by main"
    }
}

if ($NeedNewAgent.Count -eq 0) {
    Write-Host ""
    Write-Host "No tasks need a new agent"
    exit 0
}

# --- 4. Create new agents ---
$AgentNames = @("reza", "mariam", "ali", "zahra", "mahdi", "sara", "hamed", "mona")
$UsedNames = $ExistingAgents | ForEach-Object { $_.Name }
$AvailableNames = $AgentNames | Where-Object { $UsedNames -notcontains $_ }

if ($AvailableNames.Count -eq 0) {
    $AvailableNames = @("agent-$(Get-Date -Format 'yyyyMMdd-HHmmss')")
}

Write-Host ""
Write-Host "=== Creating new agents ==="

foreach ($need in $NeedNewAgent) {
    if ($AvailableNames.Count -eq 0) { break }
    
    $agentName = $AvailableNames[0]
    $AvailableNames = $AvailableNames[1..($AvailableNames.Count-1)]
    
    $agentDir = Join-Path $AgentsRoot "auto-generated\$agentName"
    New-Item -ItemType Directory -Path $agentDir -Force | Out-Null
    
    $agentFile = Join-Path $agentDir "AGENT.md"
    $agentContent = @"
# $agentName

## Identity
- **Name:** $agentName (auto-generated)
- **Role:** Specialized in: $($need.TaskName)
- **Level:** mid
- **Generated:** $(Get-Date -Format "yyyy-MM-dd")

## Capabilities
- [x] $($need.TaskName)
- [ ] Other tasks pending evaluation

## Interactions
- Receives from: main agent
- Sends to: main agent

## Constraints
- Must evaluate performance after each task
- Must not exceed defined specialization scope
- Must record every experience in memory

## Memory
- Working: current task
- Episodic: past tasks
- Semantic: domain patterns
- Procedural: domain workflows
"@
    
    Set-Content -Path $agentFile -Value $agentContent -Encoding UTF8
    
    # Create memory directories
    New-Item -ItemType Directory -Path "$agentDir\memory" -Force | Out-Null
    New-Item -ItemType Directory -Path "$agentDir\skills" -Force | Out-Null
    New-Item -ItemType Directory -Path "$agentDir\experiences" -Force | Out-Null
    
    Write-Host "[created] New agent: $agentName - $($need.TaskName)"
}

Write-Host ""
Write-Host "=== Agent Generation Complete ==="
