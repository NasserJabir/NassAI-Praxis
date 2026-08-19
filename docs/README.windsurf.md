# NassAI Praxis for Windsurf

Complete guide for using NassAI Praxis with [Windsurf](https://windsurf.com).

## Installation (Global)

NassAI Praxis installs globally for Windsurf — all your projects get access.

```bash
# Clone the repository
git clone https://github.com/NasserJabir/NassAI-Praxis.git /tmp/nassai-praxis

# Install globally for Windsurf
cp -r /tmp/nassai-praxis/.windsurf-plugin ~/.windsurf/
cp -r /tmp/nassai-praxis/skills ~/.windsurf/
cp -r /tmp/nassai-praxis/agents ~/.windsurf/
cp -r /tmp/nassai-praxis/personas ~/.windsurf/
cp -r /tmp/nassai-praxis/memory ~/.windsurf/

# Clean up
rm -rf /tmp/nassai-praxis
```

### Per-Project Activation

Each project needs an entry point. Create `.windsurf/config.json` in your project root:

```json
{
  "nassai-praxis": {
    "enabled": true
  }
}
```

## Usage

### Automatic Activation

NassAI Praxis activates automatically when the agent sees the configuration in your project. It will:

1. Load available skills from `~/.windsurf/skills/`
2. Load personas from `~/.windsurf/personas/`
3. Initialize memory from `~/.windsurf/memory/`

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

## Updating

```bash
git clone https://github.com/NasserJabir/NassAI-Praxis.git /tmp/nassai-praxis
cp -r /tmp/nassai-praxis/skills ~/.windsurf/
cp -r /tmp/nassai-praxis/agents ~/.windsurf/
cp -r /tmp/nassai-praxis/personas ~/.windsurf/
cp -r /tmp/nassai-praxis/memory ~/.windsurf/
rm -rf /tmp/nassai-praxis
```

## Troubleshooting

### Plugin not loading

1. Check that `~/.windsurf/.windsurf-plugin/` exists
2. Verify files were copied to the correct locations
3. Restart Windsurf

### Skills not found

1. Verify `~/.windsurf/skills/` exists with SKILL.md files
2. Check that each skill has valid YAML frontmatter
3. Restart your session

## Getting Help

- **Issues**: https://github.com/NasserJabir/NassAI-Praxis/issues
- **Documentation**: https://github.com/NasserJabir/NassAI-Praxis
