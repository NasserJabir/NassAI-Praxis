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

    _bootstrapCache = `<EXTREMELY_IMPORTANT>
You have NassAI Praxis loaded.

**IMPORTANT: NassAI Praxis is ALREADY ACTIVE. Do NOT use the skill tool to reload it.**

${introContent}

${toolMapping}
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
