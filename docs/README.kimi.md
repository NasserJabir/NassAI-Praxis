# NassAI Praxis for Kimi Code

Complete guide for using NassAI Praxis with [Kimi Code](https://kimi.ai).

## Installation (Global)

NassAI Praxis installs globally for Kimi Code — all your projects get access.

```bash
# Clone the repository
git clone https://github.com/NasserJabir/NassAI-Praxis.git /tmp/nassai-praxis

# Install globally for Kimi Code
cp -r /tmp/nassai-praxis/.kimi-plugin ~/.kimi/
cp -r /tmp/nassai-praxis/skills ~/.kimi/
cp -r /tmp/nassai-praxis/agents ~/.kimi/
cp -r /tmp/nassai-praxis/personas ~/.kimi/
cp -r /tmp/nassai-praxis/memory ~/.kimi/

# Clean up
rm -rf /tmp/nassai-praxis
```

### Per-Project Activation

Each project needs an entry point. Create `.kimi/config.json` in your project root:

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

1. Load available skills from `~/.kimi/skills/`
2. Load personas from `~/.kimi/personas/`
3. Initialize memory from `~/.kimi/memory/`

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
cp -r /tmp/nassai-praxis/skills ~/.kimi/
cp -r /tmp/nassai-praxis/agents ~/.kimi/
cp -r /tmp/nassai-praxis/personas ~/.kimi/
cp -r /tmp/nassai-praxis/memory ~/.kimi/
rm -rf /tmp/nassai-praxis
```

## Troubleshooting

### Plugin not loading

1. Check that `~/.kimi/.kimi-plugin/` exists
2. Verify files were copied to the correct locations
3. Restart Kimi Code

### Skills not found

1. Verify `~/.kimi/skills/` exists with SKILL.md files
2. Check that each skill has valid YAML frontmatter
3. Restart your session

## Getting Help

- **Issues**: https://github.com/NasserJabir/NassAI-Praxis/issues
- **Documentation**: https://github.com/NasserJabir/NassAI-Praxis
