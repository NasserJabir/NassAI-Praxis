# NassAI Praxis — Installation Prompts

> **Recommended path:** use the project-local installation instructions beginning at “Phase 3: Agent Integration Prompts.” They keep Praxis knowledge with the project and make review through Git straightforward. The global-copy prompts above that section are retained as legacy compatibility instructions; do not copy `memory/private/` into a public project.

Copy the prompt for your agent and paste it. The agent will install NassAI Praxis automatically.

## OpenCode

```
Fetch and follow instructions from https://raw.githubusercontent.com/NasserJabir/NassAI-Praxis/main/.opencode/INSTALL.md
```

## Claude Code

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

## Cursor

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

## GitHub Copilot

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

## Kimi Code

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

## Codex

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

## Pi

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

## Windsurf

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

## Phase 3: Agent Integration Prompts

The following prompts install the project-local four-file plugin and shared Praxis core. Do not copy `memory/private/` into a public project.

### Claude Code

```bash
git clone https://github.com/NasserJabir/NassAI-Praxis.git /tmp/nassai-praxis
mkdir -p .claude
cp -r /tmp/nassai-praxis/.claude/* .claude/
cp -r /tmp/nassai-praxis/praxis.config.md .
cp -r /tmp/nassai-praxis/memory .
cp -r /tmp/nassai-praxis/skills .
cp -r /tmp/nassai-praxis/agents .
cp -r /tmp/nassai-praxis/personas .
rm -rf /tmp/nassai-praxis
```

Then start Claude Code in the project and run the five-minute test in `docs/AGENT_TESTING.md`.

### Cursor

```bash
git clone https://github.com/NasserJabir/NassAI-Praxis.git /tmp/nassai-praxis
mkdir -p .cursor
cp -r /tmp/nassai-praxis/.cursor/* .cursor/
cp -r /tmp/nassai-praxis/praxis.config.md .
cp -r /tmp/nassai-praxis/memory .
cp -r /tmp/nassai-praxis/skills .
cp -r /tmp/nassai-praxis/agents .
cp -r /tmp/nassai-praxis/personas .
rm -rf /tmp/nassai-praxis
```

Then start Cursor in the project and run the five-minute test in `docs/AGENT_TESTING.md`.

### GitHub Copilot

```bash
git clone https://github.com/NasserJabir/NassAI-Praxis.git /tmp/nassai-praxis
mkdir -p .copilot
cp -r /tmp/nassai-praxis/.copilot/* .copilot/
cp -r /tmp/nassai-praxis/praxis.config.md .
cp -r /tmp/nassai-praxis/memory .
cp -r /tmp/nassai-praxis/skills .
cp -r /tmp/nassai-praxis/agents .
cp -r /tmp/nassai-praxis/personas .
rm -rf /tmp/nassai-praxis
```

Then start GitHub Copilot in the project and run the five-minute test in `docs/AGENT_TESTING.md`.

### Kimi

```bash
git clone https://github.com/NasserJabir/NassAI-Praxis.git /tmp/nassai-praxis
mkdir -p .kimi
cp -r /tmp/nassai-praxis/.kimi/* .kimi/
cp -r /tmp/nassai-praxis/praxis.config.md .
cp -r /tmp/nassai-praxis/memory .
cp -r /tmp/nassai-praxis/skills .
cp -r /tmp/nassai-praxis/agents .
cp -r /tmp/nassai-praxis/personas .
rm -rf /tmp/nassai-praxis
```

Then start Kimi in the project and run the five-minute test in `docs/AGENT_TESTING.md`.

### Codex CLI

```bash
git clone https://github.com/NasserJabir/NassAI-Praxis.git /tmp/nassai-praxis
mkdir -p .codex
cp -r /tmp/nassai-praxis/.codex/* .codex/
cp -r /tmp/nassai-praxis/praxis.config.md .
cp -r /tmp/nassai-praxis/memory .
cp -r /tmp/nassai-praxis/skills .
cp -r /tmp/nassai-praxis/agents .
cp -r /tmp/nassai-praxis/personas .
rm -rf /tmp/nassai-praxis
```

Then start Codex CLI in the project and run the five-minute test in `docs/AGENT_TESTING.md`.

### Gemini CLI

```bash
git clone https://github.com/NasserJabir/NassAI-Praxis.git /tmp/nassai-praxis
mkdir -p .gemini
cp -r /tmp/nassai-praxis/.gemini/* .gemini/
cp -r /tmp/nassai-praxis/praxis.config.md .
cp -r /tmp/nassai-praxis/memory .
cp -r /tmp/nassai-praxis/skills .
cp -r /tmp/nassai-praxis/agents .
cp -r /tmp/nassai-praxis/personas .
rm -rf /tmp/nassai-praxis
```

Then start Gemini CLI in the project and run the five-minute test in `docs/AGENT_TESTING.md`.

### OpenCode

```bash
git clone https://github.com/NasserJabir/NassAI-Praxis.git /tmp/nassai-praxis
mkdir -p .opencode
cp -r /tmp/nassai-praxis/.opencode/* .opencode/
cp -r /tmp/nassai-praxis/praxis.config.md .
cp -r /tmp/nassai-praxis/memory .
cp -r /tmp/nassai-praxis/skills .
cp -r /tmp/nassai-praxis/agents .
cp -r /tmp/nassai-praxis/personas .
rm -rf /tmp/nassai-praxis
```

Then start OpenCode in the project and run the five-minute test in `docs/AGENT_TESTING.md`.

### Pi

```bash
git clone https://github.com/NasserJabir/NassAI-Praxis.git /tmp/nassai-praxis
mkdir -p .pi
cp -r /tmp/nassai-praxis/.pi/* .pi/
cp -r /tmp/nassai-praxis/praxis.config.md .
cp -r /tmp/nassai-praxis/memory .
cp -r /tmp/nassai-praxis/skills .
cp -r /tmp/nassai-praxis/agents .
cp -r /tmp/nassai-praxis/personas .
rm -rf /tmp/nassai-praxis
```

Then start Pi in the project and run the five-minute test in `docs/AGENT_TESTING.md`.

### Windsurf

```bash
git clone https://github.com/NasserJabir/NassAI-Praxis.git /tmp/nassai-praxis
mkdir -p .windsurf
cp -r /tmp/nassai-praxis/.windsurf/* .windsurf/
cp -r /tmp/nassai-praxis/praxis.config.md .
cp -r /tmp/nassai-praxis/memory .
cp -r /tmp/nassai-praxis/skills .
cp -r /tmp/nassai-praxis/agents .
cp -r /tmp/nassai-praxis/personas .
rm -rf /tmp/nassai-praxis
```

Then start Windsurf in the project and run the five-minute test in `docs/AGENT_TESTING.md`.
