#!/usr/bin/env node
/**
 * praxis-validate.js — CI guard for the Praxis knowledge base.
 *
 * Checks every skills/**\/SKILL.md for:
 *  - required frontmatter keys: name, description, triggers (>=1), tokens
 *  - description is not a placeholder (not equal to name, not a heading)
 *  - internal markdown links resolve to existing files
 * Also validates PRAXIS.md exists and every skill appears in it.
 *
 * Usage: node scripts/praxis-validate.js   (exit 1 on any error)
 */
const fs = require('fs');
const path = require('path');
const { fileURLToPath } = require('url');

const root = path.resolve(path.dirname(__filename), '..');
const errors = [];
let checked = 0;

function walkSkills(dir) {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      const sk = path.join(p, 'SKILL.md');
      if (fs.existsSync(sk)) out.push(sk); else out.push(...walkSkills(p));
    }
  }
  return out;
}

function fmOf(text) {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  return m ? m[1] : null;
}

const keyRe = k => new RegExp(`^${k}:`, 'm');

for (const file of walkSkills(path.join(root, 'skills'))) {
  checked++;
  const rel = path.relative(root, file).replace(/\\/g, '/');
  const text = fs.readFileSync(file, 'utf8');
  const fm = fmOf(text);
  if (!fm) { errors.push(`${rel}: missing frontmatter`); continue; }

  const nameM = fm.match(/^name:\s*(.+)$/m);
  if (!nameM) errors.push(`${rel}: frontmatter missing "name"`);
  const descM = fm.match(/^description:\s*(.+)$/m);
  if (!descM) {
    errors.push(`${rel}: frontmatter missing "description"`);
  } else {
    const d = descM[1].trim();
    if (!d || d === (nameM?.[1] || '').trim() || d.startsWith('#')) {
      errors.push(`${rel}: description is a placeholder ("${d}")`);
    }
  }
  if (!keyRe('triggers').test(fm)) errors.push(`${rel}: frontmatter missing "triggers"`);
  else if (!/^\s+- /m.test(fm.split(/^triggers:$/m)[1]?.split(/\n\S/)[0] || '')) {
    errors.push(`${rel}: triggers list is empty`);
  }
  if (!keyRe('tokens').test(fm)) errors.push(`${rel}: frontmatter missing "tokens"`);

  // internal link targets
  for (const lm of text.matchAll(/\]\(([^)#]+?)\)/g)) {
    const target = lm[1];
    if (/^https?:/.test(target) || target.startsWith('mailto:')) continue;
    if (!fs.existsSync(path.resolve(path.dirname(file), decodeURI(target)))) {
      errors.push(`${rel}: broken link -> ${target}`);
    }
  }
}

// PRAXIS.md coverage
const indexPath = path.join(root, 'PRAXIS.md');
if (!fs.existsSync(indexPath)) {
  errors.push('PRAXIS.md: missing (run scripts/praxis-build.js)');
} else {
  const index = fs.readFileSync(indexPath, 'utf8');
  for (const file of walkSkills(path.join(root, 'skills'))) {
    const rel = path.relative(path.join(root, 'skills'), file).replace(/\\/g, '/');
    const skillName = rel.replace(/(^|\/|\\)SKILL\.md$/, '').split(/[\\/]/).pop();
    if (!new RegExp(`\\| \`${skillName}\` \\|`).test(index)) {
      errors.push(`PRAXIS.md: skill "${skillName}" not indexed`);
    }
  }
}

console.log(`Checked ${checked} skills.`);
if (errors.length) {
  console.error(`\n${errors.length} ERROR(S):`);
  for (const e of errors) console.error(`  ${e}`);
  process.exit(1);
}
console.log('All checks passed.');
