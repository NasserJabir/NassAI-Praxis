# NassAI Praxis for Codex

Complete guide for using NassAI Praxis with [Codex](https://openai.com/codex).

## Installation

### Option 1: Plugin Marketplace (Recommended)

NassAI Praxis is available via the official Codex plugin marketplace.

- In the Codex app, click on Plugins in the sidebar.
- You should see `NassAI Praxis` in the Coding section.
- Click the `+` next to NassAI Praxis and follow the prompts.

### Option 2: CLI Installation

Open the plugin search interface:

```text
/plugins
```

Search for NassAI Praxis:

```text
nassai-praxis
```

Select `Install Plugin`.

### Option 3: Manual Installation

Clone the repository and copy to your project:

```bash
git clone https://github.com/NasserJabir/NassAI-Praxis.git
cp -r NassAI-Praxis/.codex-plugin your-project/
cp -r NassAI-Praxis/skills your-project/
cp -r NassAI-Praxis/agents your-project/
cp -r NassAI-Praxis/personas your-project/
cp -r NassAI-Praxis/memory your-project/
```

## Usage

### Automatic Activation

NassAI Praxis activates automatically when you start a session in Codex. The agent will:

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

Create `.codex/config.json` in your project root:

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

To update NassAI Praxis in Codex:

1. Open the plugin manager:

   ```text
   /plugins
   ```

2. Go to `Updates` and select NassAI Praxis.

3. Or reinstall from the marketplace.

## Troubleshooting

### Plugin not loading

1. Check that `.codex-plugin/` directory exists in your project
2. Verify the plugin configuration files
3. Restart Codex after installation

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
