---
version: "1.0.0"
created: "2026-08-20T00:00:00Z"
updated: "2026-08-20T00:00:00Z"
author: "Nasser Jabir"
classification: "internal"
---

# Installing NassAI Praxis for OpenCode

## Prerequisites

- [OpenCode.ai](https://opencode.ai) installed

## Installation

Add NassAI Praxis to the `plugin` array in your `opencode.json` (global or project-level):

```json
{
  "plugin": ["nassai-praxis@git+https://github.com/NasserJabir/NassAI-Praxis.git"]
}
```

Restart OpenCode. The plugin installs through OpenCode's plugin manager and loads on startup.

**How it works:** the plugin injects the NassAI Praxis methodology (AGENTS.md), tool mappings, memory paths, and the post-task evaluation workflow into every conversation via OpenCode's `experimental.chat.messages.transform` hook. Praxis skills are not registered as native OpenCode skills, so they will NOT appear in skill listings — this is expected.

## Verification

Ask a behavioral probe that can only be answered from the injected context:

```text
Without searching files: per your NassAI Praxis instructions, name the four project-memory tiers.
```

Correct answer: Working (`memory/working/`), Episodic (`memory/episodic/`), Semantic (`memory/semantic/`), Procedural (`memory/procedural/`). If the model says it has no such instructions, the plugin is not loading — check `~/.local/share/opencode/log/opencode.log`.

Do NOT verify by asking "do you have the NassAI Praxis plugin?" or "list your skills" — the agent will truthfully say no, because injection is invisible to its self-description.

OpenCode uses its own plugin install. If you also use Claude Code, Cursor, or another harness, install NassAI Praxis separately for each one.

## Usage

Praxis methodology, memory paths, and the post-task evaluation workflow are injected automatically into every conversation. Skills are loaded selectively: consult the trigger table in `PRAXIS.md` (path is provided in the injected context) and read only the SKILL.md files matching the current task.

The plugin also registers the Praxis sub-agent definitions (planner, reviewer, tester, etc.) via `.opencode/agents/`, available through OpenCode's agent mechanism.

## Updating

OpenCode installs NassAI Praxis through a git-backed package spec. To update:

```bash
rm -rf ~/.config/opencode/node_modules/nassai-praxis
```

Restart OpenCode, or reinstall the plugin.

To pin a specific version:

```json
{
  "plugin": ["nassai-praxis@git+https://github.com/NasserJabir/NassAI-Praxis.git#v1.0.0"]
}
```

## Troubleshooting

### Plugin not loading

1. Check logs: `opencode run --print-logs "hello" 2>&1 | grep -i nassai`
2. Verify the plugin line in your `opencode.json`
3. Make sure you're running a recent version of OpenCode

### Windows install issues

Some Windows OpenCode builds have upstream installer issues with git-backed plugin specs. If OpenCode cannot install the plugin, try installing with system npm:

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

1. Use `skill` tool to list what's discovered
2. Check that the plugin is loading (see above)

## Tool Mapping

Skills speak in actions rather than naming any one runtime's tools. On OpenCode these resolve to:

- "Create a todo" / "mark complete in todo list" → `todowrite`
- `Subagent (general-purpose):` template → OpenCode's `task` tool with `subagent_type: "general"`
- "Invoke a skill" → OpenCode's native `skill` tool
- "Read a file" → `read`
- "Create a file" / "edit a file" / "delete a file" → `apply_patch`
- "Run a shell command" → `bash`
- "Search file contents" / "find files by name" → `grep`, `glob`
- "Fetch a URL" → `webfetch`

## Getting Help

- Report issues: https://github.com/NasserJabir/NassAI-Praxis/issues
- Full documentation: https://github.com/NasserJabir/NassAI-Praxis
