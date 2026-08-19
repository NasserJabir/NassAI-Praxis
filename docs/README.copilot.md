# NassAI Praxis for GitHub Copilot

Complete guide for using NassAI Praxis with [GitHub Copilot](https://github.com/features/copilot).

## Installation

Clone the repository and copy to your project:

```bash
git clone https://github.com/NasserJabir/NassAI-Praxis.git
cp -r NassAI-Praxis/.copilot-plugin your-project/
cp -r NassAI-Praxis/skills your-project/
cp -r NassAI-Praxis/agents your-project/
cp -r NassAI-Praxis/personas your-project/
cp -r NassAI-Praxis/memory your-project/
```

## Usage

### Automatic Activation

NassAI Praxis activates automatically when you start a session in GitHub Copilot. The agent will:

1. Read the plugin configuration
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

## Configuration

### Project-Level Configuration

Create `.github/copilot-instructions.md` in your project root:

```markdown
# NassAI Praxis Configuration

## Active Personas
- Default: Omar (Frontend)
- Specialists: Fatima (Backend), Nour (Security)

## Enabled Skills
- brainstorming
- tdd
- debugging
- code-review
- security

## Memory Settings
- Auto-save: true
- Max episodes: 100
```

## Updating

To update NassAI Praxis in GitHub Copilot:

1. Pull the latest changes:

```bash
cd path/to/NassAI-Praxis
git pull origin main
```

2. Recopy the plugin files:

```bash
cp -r NassAI-Praxis/.copilot-plugin your-project/
cp -r NassAI-Praxis/skills your-project/
```

3. Restart GitHub Copilot.

## Troubleshooting

### Plugin not loading

1. Check that `.copilot-plugin/` directory exists in your project
2. Verify the plugin configuration files
3. Restart GitHub Copilot after installation

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
