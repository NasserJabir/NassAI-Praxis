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

Use these absolute paths when reading/writing memory or evolve files.`;

    _bootstrapCache = `<EXTREMELY_IMPORTANT>
You have NassAI Praxis loaded.

**IMPORTANT: NassAI Praxis is ALREADY ACTIVE. Do NOT use the skill tool to reload it.**

${introContent}

${toolMapping}

${pathsContext}
</EXTREMELY_IMPORTANT>`;

    return _bootstrapCache;
  };

  return {
    config: async (config) => {
      config.skills = config.skills || {};
      config.skills.paths = config.skills.paths || [];
      if (!config.skills.paths.includes(nassaiSkillsDir)) {
        config.skills.paths.push(nassaiSkillsDir);
      }
    },

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
