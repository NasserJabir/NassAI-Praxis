# NassAI Praxis for Claude Code

Complete guide for using NassAI Praxis with [Claude Code](https://claude.ai/code).

## Installation (Global)

NassAI Praxis installs globally for Claude Code — all your projects get access.

```bash
# Clone the repository
git clone https://github.com/NasserJabir/NassAI-Praxis.git /tmp/nassai-praxis

# Install globally for Claude Code
cp -r /tmp/nassai-praxis/.claude-plugin ~/.claude/
cp -r /tmp/nassai-praxis/skills ~/.claude/
cp -r /tmp/nassai-praxis/agents ~/.claude/
cp -r /tmp/nassai-praxis/personas ~/.claude/
cp -r /tmp/nassai-praxis/memory ~/.claude/
cp /tmp/nassai-praxis/AGENTS.md ~/.claude/
cp /tmp/nassai-praxis/CLAUDE.md ~/.claude/

# Clean up
rm -rf /tmp/nassai-praxis
```

### Per-Project Activation

Each project needs an entry point. Add to your project root:

```bash
# In your project directory
cp ~/.claude/AGENTS.md ./AGENTS.md
cp ~/.claude/CLAUDE.md ./CLAUDE.md
```

This tells Claude Code: "Use NassAI Praxis for this project."

### Verify Installation

Start a new Claude Code session and ask:

```
What skills do you have?
```

The agent should list NassAI Praxis skills and personas.

## Usage

### Automatic Activation

NassAI Praxis activates automatically when the agent sees `AGENTS.md` in the project. It will:

1. Read `AGENTS.md` for the methodology
2. Load skills from `~/.claude/skills/`
3. Load personas from `~/.claude/personas/`
4. Initialize memory from `~/.claude/memory/`

### Using Personas

Address personas by name for domain-specific guidance:

```
You: Omar, how should I structure this React component?
```

### Using Skills

Skills activate automatically based on context:

- **brainstorming** — Before writing code
- **tdd** — During implementation
- **debugging** — When encountering bugs
- **code-review** — Before commits
- **security** — Always running

### Using Sub-Agents

Dispatch specialized agents for complex tasks:

```
Use the Task tool to dispatch the frontend-developer agent to build the login form.
```

### Memory System

The agent maintains 4 layers of persistent memory:

- `~/.claude/memory/working/` — Current session context
- `~/.claude/memory/episodic/` — Past events and lessons
- `~/.claude/memory/semantic/` — Patterns and conventions
- `~/.claude/memory/procedural/` — Workflows and processes

## Updating

```bash
git clone https://github.com/NasserJabir/NassAI-Praxis.git /tmp/nassai-praxis
cp -r /tmp/nassai-praxis/skills ~/.claude/
cp -r /tmp/nassai-praxis/agents ~/.claude/
cp -r /tmp/nassai-praxis/personas ~/.claude/
cp -r /tmp/nassai-praxis/memory ~/.claude/
rm -rf /tmp/nassai-praxis
```

## Troubleshooting

### Plugin not loading

1. Check that `~/.claude/.claude-plugin/plugin.json` exists
2. Verify files were copied to the correct locations
3. Restart Claude Code

### Skills not found

1. Verify `~/.claude/skills/` exists with SKILL.md files
2. Check that each skill has valid YAML frontmatter
3. Restart your session

### Memory not persisting

1. Check that `~/.claude/memory/` exists
2. Verify write permissions

## Getting Help

- **Issues**: https://github.com/NasserJabir/NassAI-Praxis/issues
- **Documentation**: https://github.com/NasserJabir/NassAI-Praxis
