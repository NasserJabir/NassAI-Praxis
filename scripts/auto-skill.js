#!/usr/bin/env node
/**
 * auto-skill.js — Auto-generate new skills from repeated procedures
 * Works on: Windows, Linux, macOS (requires Node.js)
 * 
 * Usage: node auto-skill.js [--min-repeats 3] [--min-score 30]
 */

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
function getArg(name, def = '') {
  const idx = args.indexOf(`--${name}`);
  return idx >= 0 && args[idx + 1] ? args[idx + 1] : def;
}

const minRepeats = parseInt(getArg('min-repeats', '3'), 10);
const minScore = parseInt(getArg('min-score', '30'), 10);

const scriptsDir = __dirname;
const rootDir = path.resolve(scriptsDir, '..');
const memoryRoot = path.join(rootDir, 'memory');
const skillsRoot = path.join(rootDir, 'skills');
const episodicDir = path.join(memoryRoot, 'episodic');

console.log('=== Auto Skill Generation Check ===');
console.log('');

// 1. Collect all tasks from episodic memory
const tasks = {};

if (fs.existsSync(episodicDir)) {
  const episodes = fs.readdirSync(episodicDir).filter(f => f.endsWith('.md') && f !== 'template.md');
  
  for (const ep of episodes) {
    const content = fs.readFileSync(path.join(episodicDir, ep), 'utf8');
    const lines = content.split('\n');
    
    let currentTask = null;
    
    for (const line of lines) {
      // Check for task header: ## HH:MM — TaskName
      const taskMatch = line.match(/^## (\d{2}:\d{2}) [—-] (.+)$/);
      if (taskMatch) {
        currentTask = taskMatch[2].trim();
      }
      // Check for score line: - **Score:** XX/33
      else if (currentTask) {
        const scoreMatch = line.match(/Score:\*\* (\d+)\/33/);
        if (scoreMatch) {
          const score = parseInt(scoreMatch[1], 10);
          
          if (!tasks[currentTask]) {
            tasks[currentTask] = { count: 0, totalScore: 0 };
          }
          tasks[currentTask].count++;
          tasks[currentTask].totalScore += score;
          
          currentTask = null;
        }
      }
    }
  }
}

const taskNames = Object.keys(tasks);
console.log(`Found ${taskNames.length} unique tasks in memory`);
console.log('');

// 2. Check for repeated tasks
const candidates = [];

for (const [name, data] of Object.entries(tasks)) {
  const avgScore = data.totalScore / data.count;
  
  if (data.count >= minRepeats && avgScore >= minScore) {
    candidates.push({
      name,
      count: data.count,
      avgScore: Math.round(avgScore * 10) / 10
    });
    console.log(`[candidate] ${name} — repeated ${data.count} times, avg ${avgScore.toFixed(1)}`);
  }
}

if (candidates.length === 0) {
  console.log('');
  console.log('No tasks meet generation criteria yet');
  console.log(`Required: repeats >= ${minRepeats} + avg score >= ${minScore}`);
  process.exit(0);
}

// 3. Create new skills
const skillsDir = path.join(skillsRoot, 'auto-generated');
if (!fs.existsSync(skillsDir)) {
  fs.mkdirSync(skillsDir, { recursive: true });
}

for (const candidate of candidates) {
  const skillName = candidate.name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
  
  const skillDir = path.join(skillsDir, skillName);
  const skillFile = path.join(skillDir, 'SKILL.md');
  
  if (fs.existsSync(skillFile)) {
    console.log(`[skip] Skill '${skillName}' already exists`);
    continue;
  }
  
  fs.mkdirSync(skillDir, { recursive: true });
  
  const generated = new Date().toISOString().split('T')[0];
  
  const skillContent = `# ${candidate.name}

## Description
Auto-generated skill from repeating procedure "${candidate.name}" (${candidate.count} times).

## When to Activate
- When executing: ${candidate.name}
- When context is similar to previous tasks

## Process
1. Check episodic memory for previous tasks with same name
2. Extract success patterns from evolve/refine/patterns.md
3. Execute procedure avoiding weak patterns
4. Evaluate result and record in memory

## Quality Criteria
- [ ] Procedure executed successfully (score >= 25/33)
- [ ] No repeated weak patterns
- [ ] Result is reproducible

## Stats
- **Generated:** ${generated}
- **Repeats:** ${candidate.count}
- **Avg Score:** ${candidate.avgScore}/33
- **Status:** auto-generated (draft)

## References
- Review patterns in: evolve/refine/patterns.md
- Review past tasks in: memory/episodic/
`;
  
  fs.writeFileSync(skillFile, skillContent, 'utf8');
  console.log(`[created] New skill: ${skillName}`);
}

console.log('');
console.log('=== Skill Generation Complete ===');
