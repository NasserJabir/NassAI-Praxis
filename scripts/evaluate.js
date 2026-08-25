#!/usr/bin/env node
/**
 * evaluate.js — Task evaluation & memory recording
 * Works on: Windows, Linux, macOS (requires Node.js)
 * 
 * Usage: node evaluate.js --task "name" --score 30 --agent "main" --notes "what" --lessons "learned"
 */

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
function getArg(name, def = '') {
  const idx = args.indexOf(`--${name}`);
  return idx >= 0 && args[idx + 1] ? args[idx + 1] : def;
}

const taskName = getArg('task');
const totalScore = parseInt(getArg('score', '0'), 10);
const agentName = getArg('agent', 'main');
const notes = getArg('notes', '');
const lessons = getArg('lessons', '');
const codeQuality = getArg('cq', '0/6');
const testing = getArg('test', '0/6');
const security = getArg('sec', '0/6');
const documentation = getArg('doc', '0/5');
const memoryLearning = getArg('mem', '0/5');
const processAdherence = getArg('proc', '0/5');

if (!taskName || !totalScore) {
  console.error('Usage: node evaluate.js --task "name" --score <0-33>');
  process.exit(1);
}

const scriptsDir = __dirname;
const masterRoot = path.resolve(scriptsDir, '..');
// Project-local memory resolution: use <cwd>/memory when the working
// project has one; otherwise fall back to the master repository's memory.
const cwdMemory = path.join(process.cwd(), 'memory');
const rootDir = fs.existsSync(cwdMemory) ? process.cwd() : masterRoot;
const memoryRoot = path.join(rootDir, 'memory');
const evolveDir = path.join(rootDir, 'evolve');

const today = new Date().toISOString().split('T')[0];
const now = new Date().toTimeString().slice(0, 5);
const episodeFile = path.join(memoryRoot, 'episodic', `${today}.md`);
const workingFile = path.join(memoryRoot, 'working', 'context.md');
const patternsFile = path.join(evolveDir, 'refine', 'patterns.md');

// Ensure directories exist
[path.dirname(episodeFile), path.dirname(workingFile), path.dirname(patternsFile)].forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

// 1. Rate the task
let rating;
if (totalScore >= 30) rating = 'Excellent';
else if (totalScore >= 25) rating = 'Good';
else if (totalScore >= 20) rating = 'Acceptable';
else rating = 'Needs Work';

// 2. Record in episodic memory
const entry = `
## ${now} — ${taskName}
- **Agent:** ${agentName}
- **Score:** ${totalScore}/33 — ${rating}
- **Breakdown:** Q:${codeQuality} T:${testing} S:${security} D:${documentation} M:${memoryLearning} P:${processAdherence}
- **Notes:** ${notes}
${lessons ? `- **Lessons:** ${lessons}` : ''}
`;

if (!fs.existsSync(episodeFile)) {
  fs.writeFileSync(episodeFile, `# Episode: ${today}\n\n## Tasks\n`, 'utf8');
}
fs.appendFileSync(episodeFile, entry, 'utf8');
console.log(`[memory] Recorded in ${episodeFile}`);

// 3. Update working memory
const workingEntry = `## Last Task
- Name: ${taskName}
- Score: ${totalScore}/33 (${rating})
- Agent: ${agentName}
- Date: ${today} ${now}
`;
fs.writeFileSync(workingFile, workingEntry, 'utf8');
console.log('[memory] Updated working context');

// 4. Record patterns
if (totalScore >= 30 && lessons) {
  const patternEntry = `
### Pattern: ${today} ${now} — ${taskName}
- **Score:** ${totalScore}/33
- **Agent:** ${agentName}
- **Lesson:** ${lessons}
- **Status:** confirmed
`;
  fs.appendFileSync(patternsFile, patternEntry, 'utf8');
  console.log('[evolve] Success pattern recorded');
} else if (totalScore < 25) {
  const antiPattern = `
### Anti-Pattern: ${today} ${now} — ${taskName}
- **Score:** ${totalScore}/33
- **Issue:** ${notes}
- **Status:** to-fix
`;
  fs.appendFileSync(patternsFile, antiPattern, 'utf8');
  console.log('[evolve] Weak pattern recorded');
}

// 5. Check for repeated procedure
if (fs.existsSync(episodeFile)) {
  const content = fs.readFileSync(episodeFile, 'utf8');
  const repeatCount = (content.match(new RegExp(escapeRegex(taskName), 'g')) || []).length;
  
  if (repeatCount >= 3 && totalScore >= 30) {
    console.log('');
    console.log(`[auto-skill] Procedure repeated ${repeatCount} times successfully!`);
    console.log('[auto-skill] Run: node auto-skill.js to generate new skill');
  }
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

console.log('');
console.log('=== Evaluation Complete ===');
console.log(`Score: ${totalScore}/33 (${rating})`);
