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

export const NassaiPraxisPlugin = async ({ client, directory }) => {
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

    const pathsContext = `**NassAI Praxis Paths (Absolute):**
- Skills: \`${nassaiSkillsDir}\`
- Memory: \`${nassaiMemoryDir}\`
  - Working: \`${path.join(nassaiMemoryDir, 'working')}\`
  - Episodic: \`${path.join(nassaiMemoryDir, 'episodic')}\`
  - Semantic: \`${path.join(nassaiMemoryDir, 'semantic')}\`
  - Procedural: \`${path.join(nassaiMemoryDir, 'procedural')}\`
- Self-Improvement: \`${nassaiEvolveDir}\`
  - Evaluation: \`${path.join(nassaiEvolveDir, 'evaluation')}\`
  - Refine: \`${path.join(nassaiEvolveDir, 'refine')}\`
  - Skills Generation: \`${path.join(nassaiEvolveDir, 'skills-gen')}\`
  - Agents Generation: \`${path.join(nassaiEvolveDir, 'agents-gen')}\`
- Scripts: \`${path.join(nassaiRoot, 'scripts')}\`

Use these absolute paths when reading/writing memory or evolve files.`;

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
**DO NOT skip evaluation.** This is how the system learns and improves.
**Cross-platform:** These scripts work on Windows, Linux, and macOS (requires Node.js).`;

    _bootstrapCache = `<EXTREMELY_IMPORTANT>
You have NassAI Praxis loaded.

**IMPORTANT: NassAI Praxis is ALREADY ACTIVE. Do NOT use the skill tool to reload it.**

${introContent}

${toolMapping}

${pathsContext}

${automationWorkflow}
</EXTREMELY_IMPORTANT>`;

    return _bootstrapCache;
  };

  return {
    'experimental.chat.messages.transform': async (_input, output) => {
      const bootstrap = getBootstrapContent();
      if (!bootstrap || !output.messages.length) return;
      const firstUser = output.messages.find(m => m.info.role === 'user');
      if (!firstUser || !firstUser.parts.length) return;

      if (firstUser.parts.some(p => p.type === 'text' && p.text.includes('EXTREMELY_IMPORTANT'))) return;

      const ref = firstUser.parts[0];
      firstUser.parts.unshift({ ...ref, type: 'text', text: bootstrap });
    }
  };
};
