#!/usr/bin/env node
/**
 * praxis-build.js — single source of truth tooling.
 *
 * 1. Normalizes YAML frontmatter on every skills/**\/SKILL.md:
 *    adds name, description, triggers, tokens (approx), version fields
 *    where missing. Never overwrites existing keys.
 * 2. Generates PRAXIS.md — a machine-readable index with trigger
 *    conditions so agents can selectively load context cheaply.
 *
 * Usage: node scripts/praxis-build.js [--check]
 *   --check : exit 1 if any file would change (for CI)
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const check = process.argv.includes('--check');
let changed = [];

function walkSkills(dir) {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      const sk = path.join(p, 'SKILL.md');
      if (fs.existsSync(sk)) out.push({ dir: p, file: sk });
      else out.push(...walkSkills(p));
    }
  }
  return out;
}

// crude but adequate: estimate tokens as chars/4
const tokensOf = s => Math.ceil(Buffer.byteLength(s, 'utf8') / 4);

function parseFrontmatter(text) {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  return m ? { raw: m[0], body: text.slice(m[0].length), fm: m[1] } :
    { raw: '', body: text, fm: '' };
}

function getFmKey(fm, key) {
  const m = fm.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'));
  return m ? m[1].replace(/^["']|["']$/g, '').trim() : null;
}

function inferTriggers(name, desc) {
  const t = [];
  const map = {
    'tdd': ['writing tests', 'implementing features', 'before writing code'],
    'debugging': ['a bug is reported', 'tests fail unexpectedly', 'root-cause investigation'],
    'code-review': ['reviewing diffs before commit or PR'],
    'pr-review': ['GitHub pull request review requested'],
    'security': ['auth, secrets, input validation, or dependency changes'],
    'planning': ['multi-step feature work is about to start'],
    'writing-plans': ['implementation plan must be written to disk'],
    'executing-plans': ['an approved implementation plan exists'],
    'brainstorming': ['requirements are vague; design alternatives needed'],
    'subagent-management': ['work should be parallelized across sub-agents'],
    'refactoring': ['improving structure without changing behavior'],
    'api-design': ['designing HTTP/GraphQL interfaces or contracts'],
    'database-design': ['schema, migration, index, or query design'],
    'devops-pipelines': ['CI/CD, Docker, Kubernetes, deployment tasks'],
    'observability': ['logging, metrics, tracing, alerting work'],
    'performance-tuning': ['latency/throughput optimization required'],
    'system-architecture': ['cross-service boundaries or architecture decisions'],
    'frontend-ui-engineering': ['React/Vue component or page implementation'],
    'accessibility-compliance': ['WCAG/ARIA/keyboard-nav requirements apply'],
    'design-systems': ['design tokens or component library work'],
    'mobile-app-development': ['iOS/Android app development'],
    'memory-systems': ['building agent memory architectures'],
    'context-engineering': ['deciding what context an agent needs'],
    'multi-agent-patterns': ['orchestrating multiple cooperating agents'],
    'anti-patterns': ['tempted to skip process steps'],
    'risk-assessment': ['evaluating blast radius of risky changes'],
    'spec-driven': ['converting specs into executable requirements'],
    'self-improvement': ['recording lessons after task completion'],
    'verification': ['confirming work is actually done and correct'],
    'test-automation-setup': ['setting up test runners or CI test jobs'],
  };
  for (const k of Object.keys(map)) {
    if (name === k || name.endsWith(k)) return map[k];
  }
  // fallback: derive from description keywords
  if (/api/i.test(desc)) t.push('API-related tasks');
  if (/test/i.test(desc)) t.push('testing tasks');
  if (/secur|auth/i.test(desc)) t.push('security-sensitive tasks');
  return t.length ? t : [`tasks matching "${name}"`];
}

function normalize(skill) {
  let text = fs.readFileSync(skill.file, 'utf8').replace(/\r\n/g, '\n');
  const { raw, body, fm } = parseFrontmatter(text);
  const rel = path.relative(root, skill.dir).replace(/\\/g, '/');
  const name = getFmKey(fm, 'name') || path.basename(skill.dir);
  let desc = getFmKey(fm, 'description') ||
    (body.match(/^## Description\r?\n+([^\n]+)/m) || [])[1] || '';
  desc = desc.trim();
  const badDesc = !desc || desc === name || desc.startsWith('#'); // placeholder or heading leak
  if (badDesc) {
    desc = ((body.match(/^## Description\r?\n+([^\n]+)/m) || [])[1] ||
      (body.match(/^## [^\n]*Purpose\r?\n+([^\n]+)/m) || [])[1] || '').trim();
    if (!desc || desc.startsWith('#')) {
      // fall back to first prose paragraph anywhere in body
      const para = body.split(/\n{2,}/).map(s => s.trim())
        .find(s => s && !s.startsWith('#') && !s.startsWith('---'));
      desc = para || '';
    }
  }
  if (!desc) { console.warn(`  ! no description found for ${rel}`); desc = name; }
  let triggers = null;
  { // parse multi-line triggers list
    const tm = fm.match(/^triggers:\n((?:  - .*\n?)*)/m);
    if (tm) {
      triggers = tm[1].split('\n').filter(Boolean)
        .map(l => l.replace(/^\s*- /, '').replace(/"/g, ''));
    }
  }
  const tokens = `~${tokensOf(text)}`;

  const needName = !/^name:/m.test(fm);
  const needDesc = badDesc;
  const needTrig = !/^triggers:/m.test(fm) || triggers === null;
  const needTokens = !/^tokens:/m.test(fm);

  if (needName || needDesc || needTrig || needTokens) {
    const lines = ['---'];
    if (!fm && !raw) {
      lines.push(`name: ${name}`);
      lines.push(`description: ${desc}`);
      lines.push('version: "1.0.0"');
    } else {
      lines.push(fm.replace(/\n\s*\n/g, '\n').replace(/^description: .*\n?/m, badDesc ? '' : '$&'));
      if (needName) lines.push(`name: ${name}`);
      if (needDesc) lines.push(`description: ${desc}`);
    }
    if (needTrig) {
      lines.push('triggers:');
      for (const t of inferTriggers(name, desc)) lines.push(`  - "${t}"`);
    } else {
      lines.push('triggers:');
      for (const t of triggers) lines.push(`  - "${t}"`);
    }
    if (needTokens) lines.push(`tokens: ${tokens}`);
    lines.push('---');
    const newText = lines.join('\n') + '\n' + body;
    changed.push(rel);
    if (!check) fs.writeFileSync(skill.file, newText, 'utf8');
  }
  return {
    name, dir: rel,
    description: desc,
    tokens,
    triggers: triggers ? [triggers] : inferTriggers(name, desc),
  };
}

function buildIndex(entries) {
  const core = entries.filter(e => e.dir.startsWith('skills/core/'));
  const extended = entries.filter(e => !e.dir.startsWith('skills/core/'));
  const fmt = list => list.map(e =>
    `| \`${e.name}\` | ${(Array.isArray(e.triggers) ? e.triggers : []).join('; ').replace(/\|/g, ',')} | ${e.tokens} |`)
    .join('\n');

  return `# PRAXIS.md — Skill Index

> Machine-readable index. Agents: scan this table FIRST, then load only the
> SKILL.md files whose triggers match the current task. Budget: load at most
> ~8K tokens of Praxis content per task.

Generated by \`scripts/praxis-build.js\`. Do not edit by hand.

## Core Skills

| Skill | Load when... | Tokens |
|-------|--------------|--------|
${fmt(core)}

## Extended Skills

| Skill | Load when... | Tokens |
|-------|--------------|--------|
${fmt(extended)}
`;
}

const skillsDir = path.join(root, 'skills');
const entries = walkSkills(skillsDir).map(normalize);
const indexPath = path.join(root, 'PRAXIS.md');
const newIndex = buildIndex(entries);

if (check) {
  const old = fs.existsSync(indexPath) ? fs.readFileSync(indexPath, 'utf8') : '';
  if (old !== newIndex) changed.push('PRAXIS.md');
} else {
  fs.writeFileSync(indexPath, newIndex, 'utf8');
}

if (changed.length) {
  console.log(`${check ? 'WOULD CHANGE' : 'Updated'} (${changed.length}):`);
  for (const c of changed) console.log(`  ${c}`);
  process.exit(check ? 1 : 0);
} else {
  console.log('All skills normalized; PRAXIS.md up to date.');
}
