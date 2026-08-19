# NassAI Praxis

> Agentic Skills Framework & Development Methodology for AI Coding Agents

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![GitHub stars](https://img.shields.io/github/stars/YOUR_USERNAME/nassai-praxis?style=social)](https://github.com/YOUR_USERNAME/nassai-praxis/stargazers)

---

## 🎯 What is NassAI Praxis?

NassAI Praxis (from Greek πρᾶξις = practice) is a markdown-only skills framework that enhances any AI coding agent with:

- 🧠 **Persistent Memory** — Working, episodic, semantic, procedural
- 👥 **Sub-Agents** — 12 specialized agents for different domains
- 🎭 **Personas** — Customizable developer profiles
- 📈 **Self-Improvement** — Evaluation, refinement, skill generation
- 🛠️ **29 Skills** — From brainstorming to deployment

---

## 🚀 Quick Start

### Install for Claude Code

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/nassai-praxis.git

# Copy to your project
cp -r nassai-praxis/.claude-plugin your-project/
cp -r nassai-praxis/skills your-project/
cp nassai-praxis/CLAUDE.md your-project/
```

### Install for Cursor

```bash
cp -r nassai-praxis/.cursor-plugin your-project/
cp -r nassai-praxis/skills your-project/
```

### Install for GitHub Copilot

```bash
cp -r nassai-praxis/.copilot-plugin your-project/
cp -r nassai-praxis/skills your-project/
```

### Install for OpenCode

```bash
cp -r nassai-praxis/.opencode your-project/
cp -r nassai-praxis/skills your-project/
cp nassai-praxis/AGENTS.md your-project/
```

---

## 📁 Project Structure

```
nassai-praxis/
├── .claude-plugin/          # Claude Code integration
│   ├── CLAUDE.md
│   ├── agents/
│   ├── personas/
│   └── memory/
├── .cursor-plugin/          # Cursor integration
│   ├── .cursor/
│   │   ├── rules/
│   │   └── agents/
│   └── rules/
├── .copilot-plugin/         # GitHub Copilot integration
│   ├── .copilot/
│   │   ├── instructions.md
│   │   └── skills/
│   └── skills/
├── .opencode/               # OpenCode integration
│   ├── agents/
│   ├── skills/
│   └── personas/
├── agents/                  # Sub-agent definitions
│   ├── frontend-developer/
│   ├── backend-developer/
│   ├── ui-designer/
│   ├── database-expert/
│   ├── devops-engineer/
│   ├── system-architect/
│   ├── researcher/
│   ├── reviewer/
│   ├── tester/
│   ├── security-auditor/
│   ├── planner/
│   └── orchestrator/
├── skills/                  # All skill definitions
│   ├── brainstorming/
│   ├── tdd/
│   ├── debugging/
│   ├── planning/
│   ├── code-review/
│   ├── security/
│   ├── subagent-management/
│   ├── frontend-ui-engineering/
│   ├── api-design/
│   ├── database-design/
│   ├── devops-pipelines/
│   ├── mobile-app-development/
│   ├── system-architecture/
│   ├── performance-tuning/
│   ├── accessibility-compliance/
│   ├── design-systems/
│   ├── observability/
│   ├── writing-plans/
│   ├── executing-plans/
│   ├── verification/
│   ├── spec-driven/
│   ├── refactoring/
│   ├── pr-review/
│   ├── risk-assessment/
│   └── anti-patterns/
├── personas/                # Developer personas
│   ├── default/
│   ├── senior-dev/
│   └── junior-dev/
├── memory/                  # Persistent memory layers
│   ├── working/
│   ├── episodic/
│   ├── semantic/
│   └── procedural/
├── references/              # Documentation & references
│   ├── copilot-tools.md
│   ├── codex-tools.md
│   └── gemini-tools.md
├── CLAUDE.md                # Claude Code entry point
├── AGENTS.md                # OpenCode entry point
├── GEMINI.md                # Gemini CLI entry point
├── CONTRIBUTING.md
├── LICENSE
└── README.md
```

---

## 🛠️ Available Skills

### Core Skills
| Skill | Description | When to Use |
|-------|-------------|-------------|
| brainstorming | Pre-coding ideation | Before writing any code |
| tdd | Test-driven development | During implementation |
| debugging | Systematic bug fixing | When encountering bugs |
| planning | Task breakdown | Before complex tasks |
| code-review | Pre-commit quality checks | Before commits |
| security | Background security | Always |
| subagent-management | Multi-agent orchestration | Complex tasks |

### Technical Skills
| Skill | Description | When to Use |
|-------|-------------|-------------|
| frontend-ui-engineering | Component architecture | Building UI |
| api-design | REST/GraphQL patterns | Designing APIs |
| database-design | Schema optimization | Database work |
| devops-pipelines | CI/CD, Docker, K8s | Infrastructure |
| mobile-app-development | React Native, Flutter | Mobile apps |
| system-architecture | Microservices, CQRS | Architecture decisions |
| performance-tuning | Core Web Vitals, caching | Optimization |
| accessibility-compliance | WCAG 2.2 | Accessibility |
| design-systems | DTCG tokens, theming | Design systems |
| observability | Logging, metrics, tracing | Production monitoring |

### Methodology Skills
| Skill | Description | When to Use |
|-------|-------------|-------------|
| writing-plans | Task breakdown (2-5 min) | Planning |
| executing-plans | Batch execution | Implementation |
| verification | Evidence before claims | Always |
| spec-driven | Interface contracts | Before coding |
| refactoring | Safe code improvement | Code cleanup |
| pr-review | 5-agent parallel review | PR reviews |
| risk-assessment | Risk-based questions | High-risk changes |
| anti-patterns | Shortcut prevention | Always |

---

## 👥 Available Agents

### Development Agents
| Agent | Expertise | Best For |
|-------|-----------|----------|
| frontend-developer | React, Vue, Angular, CSS | UI implementation |
| backend-developer | APIs, databases, auth | Server-side code |
| ui-designer | Design systems, tokens | Visual design |
| database-expert | Schema, optimization, migrations | Data architecture |
| devops-engineer | CI/CD, Docker, K8s | Infrastructure |
| system-architect | Patterns, ADRs, scalability | Architecture decisions |

### Workflow Agents
| Agent | Expertise | Best For |
|-------|-----------|----------|
| researcher | Web research, analysis | Information gathering |
| reviewer | Code quality, security | Code reviews |
| tester | Test generation, QA | Testing |
| security-auditor | Vulnerability detection | Security audits |
| planner | Task breakdown | Project planning |
| orchestrator | Multi-agent coordination | Complex workflows |

---

## 🎭 Available Personas

| Persona | Level | Style |
|---------|-------|-------|
| default | Mid-level | Balanced, bilingual |
| senior-dev | Senior | Opinionated, brief |
| junior-dev | Junior | Detailed, examples |

---

## 📝 How to Add Skills Manually

### Create a New Skill

1. Create a directory in `skills/`:
```bash
mkdir skills/my-new-skill
```

2. Create `SKILL.md` with YAML frontmatter:
```markdown
---
name: my-new-skill
description: What this skill does and when to use it
---

# My New Skill

## Description
What this skill does

## When to Activate
Conditions that trigger this skill

## Process
Step-by-step instructions

## Quality Criteria
How to know if done well

## Examples
Practical examples
```

3. Add references (optional):
```bash
mkdir skills/my-new-skill/references
# Add reference files here
```

---

## 🤖 How to Add Skills via Prompt

### For Claude Code

Tell Claude:
```
Create a new skill called "my-skill" that:
1. Activates when [condition]
2. Does [what it does]
3. Follows these steps: [steps]
4. Has these quality criteria: [criteria]

Save it to skills/my-skill/SKILL.md
```

### For Cursor

Tell Cursor:
```
Add a new skill to .cursor/rules/my-skill.md that:
- Activates when [condition]
- Follows [process]
- Has [quality criteria]
```

### For GitHub Copilot

Tell Copilot:
```
Create a .copilot/skills/my-skill.md file with:
- Trigger: [when to use]
- Process: [steps]
- Quality: [criteria]
```

---

## 👥 How to Add Sub-Agents Manually

### Create a New Agent

1. Create a directory in `agents/`:
```bash
mkdir -p agents/my-agent/{memory,skills,experiences}
```

2. Create `AGENT.md`:
```markdown
# My Agent

## Identity
- Name: My Agent
- Role: [What it does]
- Expertise: [Skills]

## Capabilities
- [x] Can do X
- [x] Can do Y
- [ ] Cannot do Z

## Interactions
- Receives from: [Who sends to it]
- Sends to: [Who it sends to]

## Constraints
- Must not [limitation]
- Requires approval for [action]
```

3. Create supporting files:
```bash
# Memory templates
echo "# Working Memory" > agents/my-agent/memory/working.md
echo "# Episodic Memory" > agents/my-agent/memory/episodic.md

# Skills
echo "# My Agent Skill" > agents/my-agent/skills/my-skill.md

# Experience log
echo "# Experience Log" > agents/my-agent/experiences/log.md
```

---

## 🤖 How to Add Sub-Agents via Prompt

### For Claude Code

Tell Claude:
```
Create a new sub-agent called "my-agent" that:
1. Specializes in [domain]
2. Has these capabilities: [list]
3. Receives tasks from: [source]
4. Sends results to: [destination]
5. Has these constraints: [limits]

Create the full agent structure in agents/my-agent/
```

### For Cursor

Tell Cursor:
```
Add a new agent to .cursor/agents/my-agent.md with:
- Role: [what it does]
- Capabilities: [list]
- Constraints: [limits]
```

---

## 🔧 Customization

### Modify Existing Skills

Edit any `SKILL.md` file to customize it for your project:
```bash
# Edit a skill
vim skills/tdd/SKILL.md

# Edit an agent
vim agents/frontend-developer/AGENT.md

# Edit a persona
vim personas/senior-dev/PERSONA.md
```

### Add Custom Memory

Update memory files to persist context:
```bash
# Add working context
echo "- Project uses TypeScript strict mode" >> memory/working/context.md

# Add learned patterns
echo "- User prefers functional programming" >> memory/semantic/patterns.md

# Add workflows
echo "1. When adding a feature → Write test first" >> memory/procedural/workflows.md
```

---

## 📊 Comparison with Other Frameworks

| Feature | NassAI Praxis | Superpowers | Agent Skills |
|---------|---------------|-------------|--------------|
| Skills | 29 | 24 | Varies |
| Sub-Agents | 12 | Basic | None |
| Personas | 3 | None | None |
| Memory | 4 layers | Basic | None |
| Self-Improvement | ✅ | ❌ | ❌ |
| Bilingual | ✅ | ❌ | ❌ |
| Markdown Only | ✅ | ✅ | ✅ |

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Add your skills/agents
4. Submit a pull request

### Skill Guidelines

- Keep `SKILL.md` under 500 lines
- Use progressive disclosure
- Include concrete examples
- Add negative triggers in description

### Agent Guidelines

- Define clear boundaries
- Include memory templates
- Add domain-specific skills
- Document interactions

---

## 📄 License

MIT License - See [LICENSE](LICENSE) for details.

---

## 🔗 Links

- [GitHub Repository](https://github.com/YOUR_USERNAME/nassai-praxis)
- [Documentation](https://github.com/YOUR_USERNAME/nassai-praxis/blob/main/README.md)
- [Contributing Guide](CONTRIBUTING.md)

---

Made with ❤️ by NassAI
