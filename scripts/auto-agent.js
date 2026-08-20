#!/usr/bin/env node
/**
 * auto-agent.js — Auto-generate new agents when needed
 * Works on: Windows, Linux, macOS (requires Node.js)
 * 
 * Usage: node auto-agent.js [--min-repeats 3]
 */

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
function getArg(name, def = '') {
  const idx = args.indexOf(`--${name}`);
  return idx >= 0 && args[idx + 1] ? args[idx + 1] : def;
}

const minRepeats = parseInt(getArg('min-repeats', '3'), 10);

const scriptsDir = __dirname;
const rootDir = path.resolve(scriptsDir, '..');
const memoryRoot = path.join(rootDir, 'memory');
const agentsRoot = path.join(rootDir, 'agents');
const episodicDir = path.join(memoryRoot, 'episodic');

console.log('=== Auto Agent Generation Check ===');
console.log('');

// 1. Collect existing agents
const existingAgents = [];

if (fs.existsSync(agentsRoot)) {
  const dirs = fs.readdirSync(agentsRoot, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name);
  
  for (const dir of dirs) {
    const agentFile = path.join(agentsRoot, dir, 'AGENT.md');
    if (fs.existsSync(agentFile)) {
      const content = fs.readFileSync(agentFile, 'utf8').slice(0, 500);
      const roleMatch = content.match(/Role:\s*(.+)/);
      existingAgents.push({
        name: dir,
        role: roleMatch ? roleMatch[1].trim() : 'unknown'
      });
      console.log(`[existing] ${dir} — ${roleMatch ? roleMatch[1].trim() : 'unknown'}`);
    }
  }
}

console.log('');
console.log(`Existing agents: ${existingAgents.length}`);

// 2. Collect tasks from memory
const taskAgents = {};

if (fs.existsSync(episodicDir)) {
  const episodes = fs.readdirSync(episodicDir).filter(f => f.endsWith('.md') && f !== 'template.md');
  
  for (const ep of episodes) {
    const content = fs.readFileSync(path.join(episodicDir, ep), 'utf8');
    const lines = content.split('\n');
    
    let currentTask = null;
    
    for (const line of lines) {
      const taskMatch = line.match(/^## (\d{2}:\d{2}) [—-] (.+)$/);
      if (taskMatch) {
        currentTask = taskMatch[2].trim();
      }
      else if (currentTask) {
        const agentMatch = line.match(/Agent:\*\*\s*(\w+)/);
        if (agentMatch) {
          const agent = agentMatch[1];
          if (!taskAgents[currentTask]) {
            taskAgents[currentTask] = { agent, count: 0 };
          }
          taskAgents[currentTask].count++;
          currentTask = null;
        }
      }
    }
  }
}

// 3. Check for tasks without suitable agent
console.log('');
console.log('=== Checking tasks without suitable agent ===');

const needNewAgent = [];

for (const [taskName, data] of Object.entries(taskAgents)) {
  if (data.agent === 'main' && data.count >= minRepeats) {
    needNewAgent.push({ taskName, count: data.count });
    console.log(`[need-agent] ${taskName} — executed ${data.count} times by main`);
  }
}

if (needNewAgent.length === 0) {
  console.log('');
  console.log('No tasks need a new agent');
  process.exit(0);
}

// 4. Create new agents
const agentNames = ['reza', 'mariam', 'ali', 'zahra', 'mahdi', 'sara', 'hamed', 'mona'];
const usedNames = existingAgents.map(a => a.name);
const availableNames = agentNames.filter(n => !usedNames.includes(n));

if (availableNames.length === 0) {
  availableNames.push(`agent-${Date.now()}`);
}

console.log('');
console.log('=== Creating new agents ===');

for (const need of needNewAgent) {
  if (availableNames.length === 0) break;
  
  const agentName = availableNames.shift();
  const agentDir = path.join(agentsRoot, 'auto-generated', agentName);
  
  fs.mkdirSync(agentDir, { recursive: true });
  fs.mkdirSync(path.join(agentDir, 'memory'), { recursive: true });
  fs.mkdirSync(path.join(agentDir, 'skills'), { recursive: true });
  fs.mkdirSync(path.join(agentDir, 'experiences'), { recursive: true });
  
  const generated = new Date().toISOString().split('T')[0];
  
  const agentContent = `# ${agentName}

## Identity
- **Name:** ${agentName} (auto-generated)
- **Role:** Specialized in: ${need.taskName}
- **Level:** mid
- **Generated:** ${generated}

## Capabilities
- [x] ${need.taskName}
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
`;
  
  fs.writeFileSync(path.join(agentDir, 'AGENT.md'), agentContent, 'utf8');
  console.log(`[created] New agent: ${agentName} — ${need.taskName}`);
}

console.log('');
console.log('=== Agent Generation Complete ===');
