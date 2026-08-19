# NassAI Praxis

> Agentic Skills Framework & Development Methodology

NassAI Praxis is a methodology layer that transforms any coding agent into an intelligent agent with persistent memory, custom personas, specialized sub-agents, continuous self-improvement, and a unified workflow. It provides plugin configurations for Claude Code, Cursor, GitHub Copilot, and OpenCode.

## Features

- **Four-Tier Memory System** - Working, episodic, semantic, and procedural memory for persistent context across sessions
- **Custom Personas** - Tailor agent behavior to different developer profiles (junior, senior, default)
- **Specialized Sub-Agents** - Researcher, reviewer, tester, and security-auditor agents with independent memory
- **Self-Improvement** - Evaluation, refinement, and automatic skill generation from repeated patterns
- **7 Core Skills** - Brainstorming, TDD, debugging, planning, code review, security, and sub-agent management
- **Multi-Agent Support** - Plugin configs for Claude Code, Cursor, GitHub Copilot, and OpenCode

## Quick Start

### Claude Code

Copy the `.claude-plugin/` directory into your project root or symlink it. Claude Code will automatically load `AGENTS.md` and `CLAUDE.md` as instructions and register all skills.

### Cursor

Copy the `.cursor-plugin/` directory into your project root. Cursor will load `AGENTS.md` as instructions and apply the configured rules.

### GitHub Copilot

Copy the `.copilot-plugin/` directory into your project root. Copilot will load `AGENTS.md` as instructions and use working memory for context.

### OpenCode

Copy the `.opencode/` directory into your project root. OpenCode will load `AGENTS.md` and `CLAUDE.md` as instructions and register all skills.

## Directory Structure

```
nassai-praxis/
├── .claude-plugin/
│   └── plugin.json            # Claude Code plugin config
├── .cursor-plugin/
│   └── plugin.json            # Cursor plugin config
├── .copilot-plugin/
│   └── plugin.json            # GitHub Copilot plugin config
├── .opencode/
│   └── plugin.json            # OpenCode plugin config
├── AGENTS.md                  # Core methodology (read by all agents)
├── CLAUDE.md                  # Claude Code specific instructions
├── skills/                    # Reusable skills
│   ├── brainstorming/
│   ├── tdd/
│   ├── debugging/
│   ├── planning/
│   ├── code-review/
│   ├── security/
│   └── subagent-management/
├── agents/                    # Specialized sub-agents
│   ├── researcher/
│   ├── reviewer/
│   ├── tester/
│   └── security-auditor/
├── personas/                  # User personality profiles
│   ├── default/
│   ├── junior-dev/
│   └── senior-dev/
├── memory/                    # Four-tier memory system
│   ├── working/
│   ├── episodic/
│   ├── semantic/
│   └── procedural/
├── evolve/                    # Self-improvement
│   ├── evaluation/
│   ├── refine/
│   └── skills-gen/
├── docs/                      # Documentation
└── package.json               # Package metadata
```

## How It Works

Every task follows the workflow: **brainstorm → plan → implement → review → commit**.

1. **Brainstorm** - Explore the problem, ask questions, propose approaches
2. **Plan** - Break work into small tasks with test cases and dependency mapping
3. **Implement** - Write tests first (TDD), then minimal code to pass, then refactor
4. **Review** - Self-review the diff for quality, security, and edge cases
5. **Commit** - Atomic commits with clear, imperative messages

The memory system maintains context across sessions, the persona system adapts behavior to the user's style, and the self-improvement loop captures lessons learned for future tasks.

## Available Skills

| Skill | Purpose |
|-------|---------|
| `brainstorming` | Structured ideation before coding |
| `tdd` | Test-driven development (RED → GREEN → REFACTOR) |
| `debugging` | Systematic bug-finding methodology |
| `planning` | Breaking complex tasks into ordered steps |
| `code-review` | Honest code review for quality and correctness |
| `security` | Background security awareness and vulnerability prevention |
| `subagent-management` | Orchestrating parallel work across specialized agents |

## Available Agents

| Agent | Role | Specialization |
|-------|------|----------------|
| `researcher` | Research & exploration | Web search, codebase analysis, documentation |
| `reviewer` | Code review | Honest review, pattern checking, security |
| `tester` | Testing | Test creation, coverage analysis, regression |
| `security-auditor` | Security | Vulnerability scanning, threat modeling |

## Contributing

1. Follow the methodology in `AGENTS.md` - TDD, small commits, code review
2. New skills go in `skills/<name>/SKILL.md` following the standard structure
3. New agents go in `agents/<name>/AGENT.md` with their own memory and skills
4. Test new skills across at least 2 different tasks before promoting
5. Evolving patterns go in `evolve/` until ready for promotion

## License

MIT
