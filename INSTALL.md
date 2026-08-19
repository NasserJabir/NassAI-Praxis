# NassAI Praxis — Installation Prompts

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
