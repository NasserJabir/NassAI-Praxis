# NassAI Praxis for OpenCode

Complete guide for using NassAI Praxis with [OpenCode.ai](https://opencode.ai).

## Installation (Global)

OpenCode uses its own plugin system. NassAI Praxis installs globally — all your projects get access.

Add NassAI Praxis to the `plugin` array in your `opencode.json` (global or project-level):

```json
{
  "plugin": ["nassai-praxis@git+https://github.com/NasserJabir/NassAI-Praxis.git"]
}
```

Restart OpenCode. The plugin installs through OpenCode's plugin manager and registers all skills.

Verify by asking: "Tell me about your skills and personas"

OpenCode uses its own plugin install. If you also use Claude Code, Cursor, or another harness, install NassAI Praxis separately for each one.

## Usage

### Finding Skills

Use OpenCode's native `skill` tool to list all available skills:

```
use skill tool to list skills
```

### Loading a Skill

```
use skill tool to load brainstorming
```

### Using Personas

Address personas by name for domain-specific guidance:

```
You: Omar, how should I structure this React component?
```

### Using Sub-Agents

Dispatch specialized agents using OpenCode's `task` tool:

```
Use the task tool with subagent_type "frontend-developer" to build the login form.
```

### Personal Skills

Create your own skills in `~/.config/opencode/skills/`:

```bash
mkdir -p ~/.config/opencode/skills/my-skill
```

Create `~/.config/opencode/skills/my-skill/SKILL.md`:

```markdown
---
name: my-skill
description: Use when [condition] - [what it does]
---

# My Skill

[Your skill content here]
```

### Project Skills

Create project-specific skills in `.opencode/skills/` within your project.

**Skill Priority:** Project skills > Personal skills > NassAI Praxis skills

## Updating

OpenCode installs NassAI Praxis through a git-backed package spec. To update:

```bash
# Clear OpenCode's package cache
rm -rf ~/.config/opencode/node_modules/nassai-praxis

# Restart OpenCode
```

Or reinstall the plugin:

```json
{
  "plugin": ["nassai-praxis@git+https://github.com/NasserJabir/NassAI-Praxis.git"]
}
```

To pin a specific version, use a branch or tag:

```json
{
  "plugin": ["nassai-praxis@git+https://github.com/NasserJabir/NassAI-Praxis.git#v1.0.0"]
}
```

## How It Works

The plugin does two things:

1. **Injects bootstrap context** via the `experimental.chat.messages.transform` hook, adding NassAI Praxis awareness to every conversation.
2. **Registers the skills directory** via the `config` hook, so OpenCode discovers all NassAI Praxis skills without symlinks or manual config.

### Tool Mapping

Skills speak in actions rather than naming any one runtime's tools. On OpenCode these resolve to:

- "Create a todo" / "mark complete in todo list" → `todowrite`
- `Subagent (general-purpose):` template → OpenCode's `task` tool with `subagent_type: "general"`
- "Invoke a skill" → OpenCode's native `skill` tool
- "Read a file" → `read`
- "Create a file" / "edit a file" / "delete a file" → `apply_patch`
- "Run a shell command" → `bash`
- "Search file contents" / "find files by name" → `grep`, `glob`
- "Fetch a URL" → `webfetch`

## Troubleshooting

### Plugin not loading

1. Check OpenCode logs: `opencode run --print-logs "hello" 2>&1 | grep -i nassai`
2. Verify the plugin line in your `opencode.json` is correct
3. Make sure you're running a recent version of OpenCode

### Windows install issues

Some Windows OpenCode builds have upstream installer issues with git-backed plugin specs. If OpenCode cannot install the plugin, try installing with system npm and pointing OpenCode at the local package:

```powershell
npm install nassai-praxis@git+https://github.com/NasserJabir/NassAI-Praxis.git --prefix "$HOME\.config\opencode"
```

Then use the installed package path in `opencode.json`:

```json
{
  "plugin": ["~/.config/opencode/node_modules/nassai-praxis"]
}
```

### Skills not found

1. Use OpenCode's `skill` tool to list available skills
2. Check that the plugin is loading (see above)
3. Each skill needs a `SKILL.md` file with valid YAML frontmatter

### Bootstrap not appearing

1. Check OpenCode version supports `experimental.chat.messages.transform` hook
2. Restart OpenCode after config changes

## Getting Help

- **Issues**: https://github.com/NasserJabir/NassAI-Praxis/issues
- **Main documentation**: https://github.com/NasserJabir/NassAI-Praxis
- **OpenCode docs**: https://opencode.ai/docs/
