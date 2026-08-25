#!/usr/bin/env node
/**
 * update-persona.js — Update persona experience, skills, and preferences
 * Works on: Windows, Linux, macOS (requires Node.js)
 * 
 * Usage: node update-persona.js --persona "name" --task "name" --outcome "success|failure" [--skill "new skill"] [--experience "what"] [--lessons "learned"]
 */

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
function getArg(name, def = '') {
  const idx = args.indexOf(`--${name}`);
  return idx >= 0 && args[idx + 1] ? args[idx + 1] : def;
}

const personaName = getArg('persona');
const taskName = getArg('task');
const outcome = getArg('outcome', 'success');
const newSkill = getArg('skill', '');
const newExperience = getArg('experience', '');
const lessonsLearned = getArg('lessons', '');

if (!personaName || !taskName) {
  console.error('Usage: node update-persona.js --persona "name" --task "name"');
  process.exit(1);
}

const scriptsDir = __dirname;
const masterRoot = path.resolve(scriptsDir, '..');
const rootDir = masterRoot;
const personasRoot = path.join(rootDir, 'personas');
const agentsDir = path.join(rootDir, 'agents');

const personaDir = path.join(personasRoot, personaName);
const experienceFile = path.join(personaDir, 'experience.md');
const skillsFile = path.join(personaDir, 'skills.md');
const preferencesFile = path.join(personaDir, 'preferences.md');

console.log(`=== Updating Persona: ${personaName} ===`);
console.log('');

// Check if persona exists
if (!fs.existsSync(personaDir)) {
  console.error(`[error] Persona '${personaName}' not found`);
  console.log('Available personas:');
  fs.readdirSync(personasRoot)
    .filter(d => fs.statSync(path.join(personasRoot, d)).isDirectory())
    .forEach(d => console.log(`  - ${d}`));
  process.exit(1);
}

const today = new Date().toISOString().split('T')[0];
const now = new Date().toTimeString().slice(0, 5);

// 1. Add new experience
const experienceEntry = `
### ${today} ${now} — ${taskName}
- **Outcome:** ${outcome}
- **Agent:** ${personaName}
${newExperience ? `- **Experience:** ${newExperience}` : ''}
${lessonsLearned ? `- **Lessons:** ${lessonsLearned}` : ''}
`;

fs.appendFileSync(experienceFile, experienceEntry, 'utf8');
console.log(`[experience] Added new experience: ${taskName}`);

// 2. Add new skill
if (newSkill) {
  const skillsContent = fs.readFileSync(skillsFile, 'utf8');
  
  if (!skillsContent.includes(newSkill)) {
    const skillEntry = `\n- ${newSkill} (learned on ${today})`;
    fs.appendFileSync(skillsFile, skillEntry, 'utf8');
    console.log(`[skills] New skill: ${newSkill}`);
  } else {
    console.log(`[skills] Skill '${newSkill}' already exists`);
  }
}

// 3. Update preferences based on outcome
if (fs.existsSync(preferencesFile)) {
  if (outcome === 'success') {
    const prefEntry = `\n- likes: ${taskName} (succeeded on ${today})`;
    fs.appendFileSync(preferencesFile, prefEntry, 'utf8');
    console.log(`[preferences] Recorded preference: ${taskName}`);
  } else if (outcome === 'failure') {
    const prefEntry = `\n- avoids: ${taskName} (failed on ${today})`;
    fs.appendFileSync(preferencesFile, prefEntry, 'utf8');
    console.log(`[preferences] Recorded avoidance: ${taskName}`);
  }
}

// 4. Update linked agent file
const agentFile = path.join(agentsDir, `${personaName}.md`);

if (fs.existsSync(agentFile)) {
  const agentUpdate = `
---

## Recent Activity (${today})
- Task: ${taskName}
- Outcome: ${outcome}
- Persona: ${personaName}
- Updated: ${today} ${now}
${newSkill ? `- New Skill: ${newSkill}` : ''}
${lessonsLearned ? `- Lessons: ${lessonsLearned}` : ''}
`;
  
  fs.appendFileSync(agentFile, agentUpdate, 'utf8');
  console.log(`[agent] Updated agent file: ${personaName}.md`);
}

console.log('');
console.log('=== Persona Update Complete ===');
