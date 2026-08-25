/**
 * NassAI Praxis plugin for OpenCode.ai
 *
 * Registers skills directory via config hook.
 * Injects bootstrap context via message transform.
 */

import path from 'path';
import fs from 'fs';
import os from 'os';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const nassaiRoot = path.resolve(__dirname, '../..');
const nassaiSkillsDir = path.join(nassaiRoot, 'skills');
const nassaiMemoryDir = path.join(nassaiRoot, 'memory');
const nassaiEvolveDir = path.join(nassaiRoot, 'evolve');

let _bootstrapCache = undefined;
const _initNoticeSent = new Set();
const _inactiveMarked = new Set();
const _deactivated = new Set();

function _sessionId(output) {
  for (const m of output.messages) {
    if (m.info && (m.info.sessionID || m.info.session_id || m.info.id)) {
      return String(m.info.sessionID || m.info.session_id || m.info.id);
    }
  }
  return 'default';
}

export const NassaiPraxisPlugin = async ({ client, directory }) => {
  // Project-local memory: if the working project has its own memory/ dir,
  // it takes precedence for working/episodic/semantic/procedural reads and
  // writes. Methodology (AGENTS.md, skills, personas) always comes from the
  // master repo. Falls back to the master memory when no local dir exists.
  const projectRoot = directory || process.cwd();
  const localMemoryDir = path.join(projectRoot, 'memory');
  const activeMemoryDir = fs.existsSync(localMemoryDir) ? localMemoryDir : nassaiMemoryDir;

  const getBootstrapContent = () => {
    if (_bootstrapCache !== undefined) return _bootstrapCache;

    const introPath = path.join(nassaiRoot, 'AGENTS.md');
    if (!fs.existsSync(introPath)) {
      _bootstrapCache = null;
      return null;
    }

    const introContent = fs.readFileSync(introPath, 'utf8');

    const toolMapping = `**Tool Mapping for OpenCode:**
When skills request actions, substitute OpenCode equivalents:
- Create or update todos → \`todowrite\`
- \`Subagent (general-purpose):\` → \`task\` with \`subagent_type: "general"\`
- Invoke a skill → OpenCode's native \`skill\` tool
- Read files → \`read\`
- Create, edit, or delete files → \`apply_patch\`
- Run shell commands → \`bash\`
- Search files → \`grep\`, \`glob\`
- Fetch a URL → \`webfetch\`

Use OpenCode's native \`skill\` tool to list and load skills.`;

    const memorySource = activeMemoryDir === localMemoryDir
      ? `**PROJECT-LOCAL** (this project owns its memory; do not write to the master repo's memory)`
      : `master repository (this project has no local memory/ dir — create one with praxis-init if project-specific memory is needed)`;

    const pathsContext = `**NassAI Praxis Paths (Absolute):**
- Skills: \`${nassaiSkillsDir}\`
- Personas: \`${path.join(nassaiRoot, 'personas')}\`
- Memory: \`${activeMemoryDir}\` — source: ${memorySource}
  - Working: \`${path.join(activeMemoryDir, 'working')}\`
  - Episodic: \`${path.join(activeMemoryDir, 'episodic')}\`
  - Semantic: \`${path.join(activeMemoryDir, 'semantic')}\`
  - Procedural: \`${path.join(activeMemoryDir, 'procedural')}\`
- Self-Improvement: \`${nassaiEvolveDir}\`
  - Evaluation: \`${path.join(nassaiEvolveDir, 'evaluation')}\`
  - Refine: \`${path.join(nassaiEvolveDir, 'refine')}\`
  - Skills Generation: \`${path.join(nassaiEvolveDir, 'skills-gen')}\`
  - Agents Generation: \`${path.join(nassaiEvolveDir, 'agents-gen')}\`
- Scripts: \`${path.join(nassaiRoot, 'scripts')}\`

Use these absolute paths when reading/writing memory or evolve files.
All memory reads AND writes go to the Memory path above — never mix this
project's context into another project's memory store.`;

    const scriptsDir = path.join(nassaiRoot, 'scripts');

    const automationWorkflow = `**MANDATORY AUTOMATION WORKFLOW — YOU MUST FOLLOW THIS:**

After EVERY significant task completion, run these scripts IN ORDER:

### Step 1: Evaluate the task
\`\`\`bash
node "${path.join(scriptsDir, 'evaluate.js')}" --task "<task name>" --score <0-33> --agent "<agent or main>" --notes "<what happened>" --lessons "<what was learned>"
\`\`\`
Score breakdown: CodeQuality(0-6) + Testing(0-6) + Security(0-6) + Documentation(0-5) + MemoryLearning(0-5) + ProcessAdherence(0-5) = 33

### Step 2: Update the persona (if a sub-agent was used)
\`\`\`bash
node "${path.join(scriptsDir, 'update-persona.js')}" --persona "<persona name>" --task "<task name>" --outcome "success|failure" --skill "<skill if learned>" --experience "<what was gained>" --lessons "<lessons>"
\`\`\`

### Step 3: Check for new skills (run after evaluation)
\`\`\`bash
node "${path.join(scriptsDir, 'auto-skill.js')}"
\`\`\`

### Step 4: Check for new agents (run after evaluation)
\`\`\`bash
node "${path.join(scriptsDir, 'auto-agent.js')}"
\`\`\`

**WHEN to run:** After ANY task that involves coding, debugging, reviewing, planning, or architecture.
**Note:** These scripts RECORD EVIDENCE for human review — they do not auto-modify knowledge. Candidate skills/agents they surface require explicit human approval per the governance model.
**Cross-platform:** These scripts work on Windows, Linux, and macOS (requires Node.js).`;

    const personaGuide = `**PERSONA PROTOCOL — WHEN AND HOW TO USE PERSONAS:**

Available Personas (read \`${nassaiRoot}/personas/<name>/PERSONA.md\` before adopting one):

| Persona | Role | Propose for tasks involving... |
|---|---|---|
| fatima | Security Auditor | security review, auth, secrets, threat modeling |
| yousef | Backend Developer | server-side features, APIs, business logic |
| layla | Frontend Developer | UI components, pages, client state |
| hassan | System Architect | architecture decisions, service boundaries |
| khaled | Performance Engineer | latency, throughput, profiling |
| omar | DevOps Engineer | CI/CD, deployment, infrastructure |
| sami | QA Engineer | test plans, coverage, regression strategy |
| amr | Researcher | exploration, documentation, comparisons |
| nour | Technical Writer | documentation, guides, README quality |
| yasmin | Product Analyst | requirements analysis, prioritization |

Rules:
1. If the current task strongly matches a persona's domain (see table), PROPOSE
   adopting that persona before starting: "This matches the <name> persona
   (<role>) — adopt it for this task?" Wait for user confirmation.
2. If the project defines its own personas in a local \`personas/\` directory,
   prefer those over the package defaults.
3. Never adopt a persona silently; adoption is always user-approved.
4. Personas are optional for small, single-step tasks.
5. **Persona disclosure:** while working under an adopted persona, announce it at the start of your responses with name and specialization, e.g. "[fatima - Security Auditor]". Never work under a persona without this label visible to the user.
6. **Post-task learning report:** when the mission is complete, close with a short "Experience gained" summary announcing skills enhanced or new experience acquired during the task (techniques used, lessons learned, patterns worth remembering), and note whether they were recorded via the evaluation workflow.`;

    _bootstrapCache = `<!-- nassai-praxis v1.4.0 -->
<EXTREMELY_IMPORTANT>
You have NassAI Praxis loaded.

**IMPORTANT: NassAI Praxis is ALREADY ACTIVE. Do NOT use the skill tool to reload it.**

${introContent}

${toolMapping}

${pathsContext}

${personaGuide}

${automationWorkflow}
</EXTREMELY_IMPORTANT>`;

    return _bootstrapCache;
  };

  return {
    'experimental.chat.messages.transform': async (_input, output) => {
      if (!output.messages.length) return;

      // OPT-IN MODE: Praxis activates on explicit invocation and deactivates
      // on an explicit off phrase ("stop praxis" / "praxis off").
      const allText = output.messages
        .flatMap(m => m.parts || [])
        .filter(p => p.type === 'text')
        .map(p => p.text || '')
        .join('\n');

      // State = whichever phrase (activation vs deactivation) appears LAST
      // in the conversation text.
      const actRe = /nassai[- ]?praxis|use praxis|praxis mode/gi;
      const deactRe = /stop praxis|praxis (mode )?off|deactivate praxis/gi;
      let lastAct = -1, lastDeact = -1, m2;
      while ((m2 = actRe.exec(allText)) !== null) lastAct = m2.index;
      while ((m2 = deactRe.exec(allText)) !== null) lastDeact = m2.index;

      if (lastDeact > lastAct) {
        _deactivated.add(_sessionId(output));
      } else if (lastAct >= 0) {
        _deactivated.delete(_sessionId(output));
      }

      if (_deactivated.has(_sessionId(output))) return;

      const invoked = /nassai[- ]?praxis|use praxis|praxis mode/i.test(allText);
      if (!invoked) {
        // Inactive marker: appended once so the user can see Praxis is
        // present but dormant, instead of wondering whether it loaded.
        if (!_inactiveMarked.has(_sessionId(output))) {
          _inactiveMarked.add(_sessionId(output));
          const last = output.messages[output.messages.length - 1];
          if (last && last.parts && last.parts.length && last.info.role !== 'user') {
            const part = { ...last.parts[last.parts.length - 1], type: 'text' };
            part.text = (part.text || '') +
              '\n\n_[praxis: inactive — say "use praxis" to activate the NassAI Praxis methodology]_';
            last.parts[last.parts.length - 1] = part;
          }
        }
        return;
      }

      const bootstrap = getBootstrapContent();
      if (!bootstrap) return;
      const firstUser = output.messages.find(m => m.info.role === 'user');
      if (!firstUser || !firstUser.parts.length) return;

      // First use in a non-Praxis project: append a one-time init notice
      // instead of failing silently. Never auto-writes to the user's repo.
      let initNotice = '';
      try {
        const cwd = process.cwd();
        const hasPraxis = fs.existsSync(path.join(cwd, 'praxis.config.md')) ||
          fs.existsSync(path.join(cwd, '.praxis'));
        if (!hasPraxis && !_initNoticeSent.has(cwd)) {
          _initNoticeSent.add(cwd);
          initNotice = `\n\n**PROJECT NOT INITIALIZED:** This project (${cwd}) has no ` +
            `Praxis layer (praxis.config.md / .praxis). Project-specific memory, personas, and ` +
            `decisions are unavailable here. Mention this to the user once: this project can be ` +
            `initialized with \`node "${path.join(nassaiRoot, 'scripts', 'praxis-init.js')}" "${cwd}"\` — ` +
            `the tool never overwrites existing files. Until then, only package-level methodology ` +
            `and skills apply.`;
        }
      } catch { /* never break the session over the notice */ }

      if (firstUser.parts.some(p => p.type === 'text' && p.text.includes('EXTREMELY_IMPORTANT'))) return;

      const ref = firstUser.parts[0];
      firstUser.parts.unshift({ ...ref, type: 'text', text: bootstrap + initNotice });
    }
  };
};
