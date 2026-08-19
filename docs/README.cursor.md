# NassAI Praxis for Cursor

Complete guide for using NassAI Praxis with [Cursor](https://cursor.sh).

## Installation (Global)

NassAI Praxis installs globally for Cursor — all your projects get access.

```bash
# Clone the repository
git clone https://github.com/NasserJabir/NassAI-Praxis.git /tmp/nassai-praxis

# Install globally for Cursor
cp -r /tmp/nassai-praxis/.cursor-plugin ~/.cursor/
cp -r /tmp/nassai-praxis/skills ~/.cursor/
cp -r /tmp/nassai-praxis/agents ~/.cursor/
cp -r /tmp/nassai-praxis/personas ~/.cursor/
cp -r /tmp/nassai-praxis/memory ~/.cursor/

# Clean up
rm -rf /tmp/nassai-praxis
```

### Per-Project Activation

Each project needs an entry point. Create `.cursor/rules/nassai-praxis.md` in your project root:

```markdown
# NassAI Praxis

Use NassAI Praxis methodology for all tasks in this project.
Skills are loaded from ~/.cursor/skills/
Personas are loaded from ~/.cursor/personas/
Memory is loaded from ~/.cursor/memory/
```

## Usage

### Automatic Activation

NassAI Praxis activates automatically when the agent sees the configuration in your project. It will:

1. Load available skills from `~/.cursor/skills/`
2. Load personas from `~/.cursor/personas/`
3. Initialize memory from `~/.cursor/memory/`

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
cp -r /tmp/nassai-praxis/skills ~/.cursor/
cp -r /tmp/nassai-praxis/agents ~/.cursor/
cp -r /tmp/nassai-praxis/personas ~/.cursor/
cp -r /tmp/nassai-praxis/memory ~/.cursor/
rm -rf /tmp/nassai-praxis
```

## Troubleshooting

### Plugin not loading

1. Check that `~/.cursor/.cursor-plugin/` exists
2. Verify files were copied to the correct locations
3. Restart Cursor

### Skills not found

1. Verify `~/.cursor/skills/` exists with SKILL.md files
2. Check that each skill has valid YAML frontmatter
3. Restart your session

## Getting Help

- **Issues**: https://github.com/NasserJabir/NassAI-Praxis/issues
- **Documentation**: https://github.com/NasserJabir/NassAI-Praxis
