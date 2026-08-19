# NassAI Praxis for Pi

Complete guide for using NassAI Praxis with [Pi](https://pi.ai).

## Installation

Install NassAI Praxis as a Pi package from this repository:

```bash
pi install git:github.com/NasserJabir/NassAI-Praxis
```

For local development, run Pi with this checkout loaded as a temporary package:

```bash
pi -e /path/to/NassAI-Praxis
```

The Pi package loads the NassAI Praxis skills and a small extension that injects the bootstrap at session startup and again after compaction.

## Usage

### Automatic Activation

NassAI Praxis activates automatically when you start a session in Pi. The agent will:

1. Load the plugin extension
2. Register all skills from `skills/`
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

## Configuration

### Project-Level Configuration

Create `.pi/config.json` in your project root:

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

To update NassAI Praxis in Pi:

```bash
pi update nassai-praxis
```

Or reinstall from the repository:

```bash
pi install git:github.com/NasserJabir/NassAI-Praxis
```

## Troubleshooting

### Plugin not loading

1. Check that the Pi package is installed correctly
2. Verify the plugin configuration files
3. Restart Pi after installation

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
