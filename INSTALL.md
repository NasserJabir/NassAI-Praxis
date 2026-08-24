# NassAI Praxis — Installation

> **Recommended path: project-local installation.** Add Praxis to the real project where the agent will work. This keeps project knowledge visible to Git review and avoids treating a global agent directory as a shared project-memory store. Never copy `memory/private/` into a public repository.

## Recommended Project-Local Installation

Choose the coding-agent host used in your project, then run the matching commands from the **Project-Local Agent Instructions** section below. Those instructions copy the host adapter and the shared Markdown core into the current project; they do not create a Runtime, database, service, or background process.

| Coding-agent host | Project-local setup |
|---|---|
| Claude Code | [Project-local Claude Code](#project-local-claude-code) |
| Cursor | [Project-local Cursor](#project-local-cursor) |
| GitHub Copilot | [Project-local GitHub Copilot](#project-local-github-copilot) |
| Kimi | [Project-local Kimi](#project-local-kimi) |
| Codex CLI | [Project-local Codex CLI](#project-local-codex-cli) |
| Gemini CLI | [Project-local Gemini CLI](#project-local-gemini-cli) |
| OpenCode | [Project-local OpenCode](#project-local-opencode) |
| Pi | [Project-local Pi](#project-local-pi) |
| Windsurf | [Project-local Windsurf](#project-local-windsurf) |

## First Useful Result — Not a Validation Protocol

After project-local installation, use Praxis during normal work:

```text
Install into a real project
  ↓
Start the coding agent in that project
  ↓
Ask it to read the context relevant to the task
  ↓
Give it one real, bounded task
  ↓
Observe whether it cites and uses the relevant project knowledge
```

For the first observation, ask: **“Read my Praxis context and tell me the active project conventions and their source files.”** A useful result identifies `memory/semantic/conventions.md` or another relevant project source, while respecting that host agents may not automatically discover every file. Then give the agent a real, low-risk task and observe whether the cited context affects its work.

This onboarding path is **not** the formal adapter-validation experiment. Use [`docs/AGENT_TESTING.md`](docs/AGENT_TESTING.md) only when you intentionally want to test an integration in a disposable project.

## Project-Local Agent Instructions

The commands below are the primary installation route. Run them from the root of the existing project that should receive Praxis.

### Project-local Claude Code

```bash
git clone https://github.com/NasserJabir/NassAI-Praxis.git /tmp/nassai-praxis
mkdir -p .claude
cp -r /tmp/nassai-praxis/.claude/* .claude/
cp -r /tmp/nassai-praxis/praxis.config.md .
mkdir -p memory
find /tmp/nassai-praxis/memory -mindepth 1 -maxdepth 1 ! -name private -exec cp -R {} memory/ \;
cp -r /tmp/nassai-praxis/skills .
cp -r /tmp/nassai-praxis/agents .
cp -r /tmp/nassai-praxis/personas .
rm -rf /tmp/nassai-praxis
```

### Project-local Cursor

```bash
git clone https://github.com/NasserJabir/NassAI-Praxis.git /tmp/nassai-praxis
mkdir -p .cursor
cp -r /tmp/nassai-praxis/.cursor/* .cursor/
cp -r /tmp/nassai-praxis/praxis.config.md .
mkdir -p memory
find /tmp/nassai-praxis/memory -mindepth 1 -maxdepth 1 ! -name private -exec cp -R {} memory/ \;
cp -r /tmp/nassai-praxis/skills .
cp -r /tmp/nassai-praxis/agents .
cp -r /tmp/nassai-praxis/personas .
rm -rf /tmp/nassai-praxis
```

### Project-local GitHub Copilot

```bash
git clone https://github.com/NasserJabir/NassAI-Praxis.git /tmp/nassai-praxis
mkdir -p .copilot
cp -r /tmp/nassai-praxis/.copilot/* .copilot/
cp -r /tmp/nassai-praxis/praxis.config.md .
mkdir -p memory
find /tmp/nassai-praxis/memory -mindepth 1 -maxdepth 1 ! -name private -exec cp -R {} memory/ \;
cp -r /tmp/nassai-praxis/skills .
cp -r /tmp/nassai-praxis/agents .
cp -r /tmp/nassai-praxis/personas .
rm -rf /tmp/nassai-praxis
```

### Project-local Kimi

```bash
git clone https://github.com/NasserJabir/NassAI-Praxis.git /tmp/nassai-praxis
mkdir -p .kimi
cp -r /tmp/nassai-praxis/.kimi/* .kimi/
cp -r /tmp/nassai-praxis/praxis.config.md .
mkdir -p memory
find /tmp/nassai-praxis/memory -mindepth 1 -maxdepth 1 ! -name private -exec cp -R {} memory/ \;
cp -r /tmp/nassai-praxis/skills .
cp -r /tmp/nassai-praxis/agents .
cp -r /tmp/nassai-praxis/personas .
rm -rf /tmp/nassai-praxis
```

### Project-local Codex CLI

```bash
git clone https://github.com/NasserJabir/NassAI-Praxis.git /tmp/nassai-praxis
mkdir -p .codex
cp -r /tmp/nassai-praxis/.codex/* .codex/
cp -r /tmp/nassai-praxis/praxis.config.md .
mkdir -p memory
find /tmp/nassai-praxis/memory -mindepth 1 -maxdepth 1 ! -name private -exec cp -R {} memory/ \;
cp -r /tmp/nassai-praxis/skills .
cp -r /tmp/nassai-praxis/agents .
cp -r /tmp/nassai-praxis/personas .
rm -rf /tmp/nassai-praxis
```

### Project-local Gemini CLI

```bash
git clone https://github.com/NasserJabir/NassAI-Praxis.git /tmp/nassai-praxis
mkdir -p .gemini
cp -r /tmp/nassai-praxis/.gemini/* .gemini/
cp -r /tmp/nassai-praxis/praxis.config.md .
mkdir -p memory
find /tmp/nassai-praxis/memory -mindepth 1 -maxdepth 1 ! -name private -exec cp -R {} memory/ \;
cp -r /tmp/nassai-praxis/skills .
cp -r /tmp/nassai-praxis/agents .
cp -r /tmp/nassai-praxis/personas .
rm -rf /tmp/nassai-praxis
```

### Project-local OpenCode

```bash
git clone https://github.com/NasserJabir/NassAI-Praxis.git /tmp/nassai-praxis
mkdir -p .opencode
cp -r /tmp/nassai-praxis/.opencode/* .opencode/
cp -r /tmp/nassai-praxis/praxis.config.md .
mkdir -p memory
find /tmp/nassai-praxis/memory -mindepth 1 -maxdepth 1 ! -name private -exec cp -R {} memory/ \;
cp -r /tmp/nassai-praxis/skills .
cp -r /tmp/nassai-praxis/agents .
cp -r /tmp/nassai-praxis/personas .
rm -rf /tmp/nassai-praxis
```

### Project-local Pi

```bash
git clone https://github.com/NasserJabir/NassAI-Praxis.git /tmp/nassai-praxis
mkdir -p .pi
cp -r /tmp/nassai-praxis/.pi/* .pi/
cp -r /tmp/nassai-praxis/praxis.config.md .
mkdir -p memory
find /tmp/nassai-praxis/memory -mindepth 1 -maxdepth 1 ! -name private -exec cp -R {} memory/ \;
cp -r /tmp/nassai-praxis/skills .
cp -r /tmp/nassai-praxis/agents .
cp -r /tmp/nassai-praxis/personas .
rm -rf /tmp/nassai-praxis
```

### Project-local Windsurf

```bash
git clone https://github.com/NasserJabir/NassAI-Praxis.git /tmp/nassai-praxis
mkdir -p .windsurf
cp -r /tmp/nassai-praxis/.windsurf/* .windsurf/
cp -r /tmp/nassai-praxis/praxis.config.md .
mkdir -p memory
find /tmp/nassai-praxis/memory -mindepth 1 -maxdepth 1 ! -name private -exec cp -R {} memory/ \;
cp -r /tmp/nassai-praxis/skills .
cp -r /tmp/nassai-praxis/agents .
cp -r /tmp/nassai-praxis/personas .
rm -rf /tmp/nassai-praxis
```

Return to [First Useful Result](#first-useful-result--not-a-validation-protocol) after installation. Run the five-minute protocol in [`docs/AGENT_TESTING.md`](docs/AGENT_TESTING.md) only for deliberate integration validation.

## Legacy / Alternative: Global Installation

The following compatibility prompts install files into a host-specific global directory. They are not the recommended path for a project’s shared knowledge, and they do not replace the project-local instructions above.

### OpenCode

```
Fetch and follow instructions from https://raw.githubusercontent.com/NasserJabir/NassAI-Praxis/main/.opencode/INSTALL.md
```

### Claude Code

```
Run the following commands to install NassAI Praxis globally:

git clone https://github.com/NasserJabir/NassAI-Praxis.git /tmp/nassai-praxis
cp -r /tmp/nassai-praxis/.claude-plugin ~/.claude/
cp -r /tmp/nassai-praxis/skills ~/.claude/
cp -r /tmp/nassai-praxis/agents ~/.claude/
cp -r /tmp/nassai-praxis/personas ~/.claude/
cp -r /tmp/nassai-praxis/memory ~/.claude/
cp /tmp/nassai-praxis/AGENTS.md ~/.claude/
cp /tmp/nassai-praxis/CLAUDE.md ~/.claude/
rm -rf /tmp/nassai-praxis

Then for each project you work on, copy these two files into the project root:
cp ~/.claude/AGENTS.md ./
cp ~/.claude/CLAUDE.md ./

After installing, tell me: what skills and personas are now available?
```

### Cursor

```
Run the following commands to install NassAI Praxis globally for Cursor:

git clone https://github.com/NasserJabir/NassAI-Praxis.git /tmp/nassai-praxis
cp -r /tmp/nassai-praxis/.cursor-plugin ~/.cursor/
cp -r /tmp/nassai-praxis/skills ~/.cursor/
cp -r /tmp/nassai-praxis/agents ~/.cursor/
cp -r /tmp/nassai-praxis/personas ~/.cursor/
cp -r /tmp/nassai-praxis/memory ~/.cursor/
rm -rf /tmp/nassai-praxis

Then create .cursor/rules/nassai-praxis.md in your project root with:
"use NassAI Praxis methodology for all tasks"

After installing, tell me: what skills and personas are now available?
```

### GitHub Copilot

```
Run the following commands to install NassAI Praxis globally for GitHub Copilot:

git clone https://github.com/NasserJabir/NassAI-Praxis.git /tmp/nassai-praxis
cp -r /tmp/nassai-praxis/.copilot-plugin ~/.copilot/
cp -r /tmp/nassai-praxis/skills ~/.copilot/
cp -r /tmp/nassai-praxis/agents ~/.copilot/
cp -r /tmp/nassai-praxis/personas ~/.copilot/
cp -r /tmp/nassai-praxis/memory ~/.copilot/
rm -rf /tmp/nassai-praxis

Then create .github/copilot-instructions.md in your project root with:
"use NassAI Praxis methodology for all tasks"

After installing, tell me: what skills and personas are now available?
```

### Kimi Code

```
Run the following commands to install NassAI Praxis globally for Kimi Code:

git clone https://github.com/NasserJabir/NassAI-Praxis.git /tmp/nassai-praxis
cp -r /tmp/nassai-praxis/.kimi-plugin ~/.kimi/
cp -r /tmp/nassai-praxis/skills ~/.kimi/
cp -r /tmp/nassai-praxis/agents ~/.kimi/
cp -r /tmp/nassai-praxis/personas ~/.kimi/
cp -r /tmp/nassai-praxis/memory ~/.kimi/
rm -rf /tmp/nassai-praxis

After installing, tell me: what skills and personas are now available?
```

### Codex

```
Run the following commands to install NassAI Praxis globally for Codex:

git clone https://github.com/NasserJabir/NassAI-Praxis.git /tmp/nassai-praxis
cp -r /tmp/nassai-praxis/.codex-plugin ~/.codex/
cp -r /tmp/nassai-praxis/skills ~/.codex/
cp -r /tmp/nassai-praxis/agents ~/.codex/
cp -r /tmp/nassai-praxis/personas ~/.codex/
cp -r /tmp/nassai-praxis/memory ~/.codex/
rm -rf /tmp/nassai-praxis

After installing, tell me: what skills and personas are now available?
```

### Pi

```
Run the following commands to install NassAI Praxis globally for Pi:

git clone https://github.com/NasserJabir/NassAI-Praxis.git /tmp/nassai-praxis
cp -r /tmp/nassai-praxis/.pi-plugin ~/.pi/
cp -r /tmp/nassai-praxis/skills ~/.pi/
cp -r /tmp/nassai-praxis/agents ~/.pi/
cp -r /tmp/nassai-praxis/personas ~/.pi/
cp -r /tmp/nassai-praxis/memory ~/.pi/
rm -rf /tmp/nassai-praxis

After installing, tell me: what skills and personas are now available?
```

### Windsurf

```
Run the following commands to install NassAI Praxis globally for Windsurf:

git clone https://github.com/NasserJabir/NassAI-Praxis.git /tmp/nassai-praxis
cp -r /tmp/nassai-praxis/.windsurf-plugin ~/.windsurf/
cp -r /tmp/nassai-praxis/skills ~/.windsurf/
cp -r /tmp/nassai-praxis/agents ~/.windsurf/
cp -r /tmp/nassai-praxis/personas ~/.windsurf/
cp -r /tmp/nassai-praxis/memory ~/.windsurf/
rm -rf /tmp/nassai-praxis

After installing, tell me: what skills and personas are now available?
```
