# NassAI Praxis for Claude Code

Complete guide for using NassAI Praxis with [Claude Code](https://claude.ai/code).

## Installation

Clone the repository and copy to your project:

```bash
git clone https://github.com/NasserJabir/NassAI-Praxis.git
cp -r NassAI-Praxis/.claude-plugin your-project/
cp -r NassAI-Praxis/skills your-project/
cp -r NassAI-Praxis/agents your-project/
cp -r NassAI-Praxis/personas your-project/
cp -r NassAI-Praxis/memory your-project/
cp NassAI-Praxis/AGENTS.md your-project/
cp NassAI-Praxis/CLAUDE.md your-project/
```

## Usage

### Automatic Activation

NassAI Praxis activates automatically when you start a session. The agent will:

1. Read `AGENTS.md` for the methodology
2. Load available skills from `skills/`
3. Load personas from `personas/`
4. Initialize memory from `memory/`

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

The agent maintains 4 layers of memory:

- `memory/working/` — Current session context
- `memory/episodic/` — Past events and lessons
- `memory/semantic/` — Patterns and conventions
- `memory/procedural/` — Workflows and processes

## Configuration

### Project-Level Configuration

Create `.nassai-praxis/config.json` in your project root:

```json
{
  "personas": {
    "default": "omar",
    "specialists": ["fatima", "nour"]
  },
  "skills": {
    "enabled": ["brainstorming", "tdd", "debugging"],
    "disabled": []
  },
  "memory": {
    "auto-save": true,
    "max-episodes": 100
  }
}
```

## Updating

To update NassAI Praxis:

```bash
cd NassAI-Praxis
git pull origin main
```

## Troubleshooting

### Plugin not loading

1. Check that `.claude-plugin/plugin.json` exists
2. Verify the files were copied correctly
3. Restart Claude Code after installation

### Skills not found

1. Verify `skills/` directory exists with SKILL.md files
2. Check that each skill has valid YAML frontmatter
3. Restart your session

### Memory not persisting

1. Check that `memory/` directory exists
2. Verify write permissions
3. Check `memory/working/` for current context

## Getting Help

- **Issues**: https://github.com/NasserJabir/NassAI-Praxis/issues
- **Documentation**: https://github.com/NasserJabir/NassAI-Praxis
