# NassAI Praxis

> Your AI coding agent's operating system — not just instructions, but identity, memory, and evolution.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

---

## What is NassAI Praxis?

Most AI coding agents are brilliant but amnesiac. They forget your project's patterns between sessions. They don't know your team's conventions. They treat every conversation as a cold start.

**NassAI Praxis fixes this.**

It is a markdown-only framework that gives your AI agent:

- **Persistent memory** that survives across sessions
- **12 specialized sub-agents** that handle different domains
- **10 personas** with distinct personalities and expertise
- **29 skills** from brainstorming to deployment
- **Self-improvement** that learns from your project's history

No servers. No databases. No runtime. Just markdown files that any AI agent can read.

---

## The Problem We Solve

```
┌─────────────────────────────────────────────────────────────┐
│                    Without NassAI Praxis                     │
├─────────────────────────────────────────────────────────────┤
│  Session 1: "The project uses TypeScript strict mode"       │
│  Session 2: "Oh, I didn't know about that"                 │
│  Session 3: "Wait, what testing framework do you use?"     │
│  Session 4: "Let me check the package.json..."             │
│                                                             │
│  Every session starts from zero. Every agent is a stranger. │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                     With NassAI Praxis                       │
├─────────────────────────────────────────────────────────────┤
│  Session 1: Agent loads your project's memory, knows your  │
│             patterns, conventions, and team preferences.    │
│                                                             │
│  Session 2: Agent remembers what worked, what failed, and  │
│             evolves its approach based on your feedback.    │
│                                                             │
│  Session 3: Agent delegates to specialized sub-agents,     │
│             applies the right persona for the task.        │
│                                                             │
│  Every session is smarter than the last.                    │
└─────────────────────────────────────────────────────────────┘
```

---

## Supported Agents

NassAI Praxis works with 8+ AI coding agents:

```
┌─────────────────────────────────────────────────────────────┐
│                    NassAI Praxis Core                        │
│                  (Skills + Memory + Agents)                  │
└───────────────────────────┬─────────────────────────────────┘
                            │
        ┌───────────────────┼───────────────────┐
        │                   │                   │
        ▼                   ▼                   ▼
┌───────────────┐   ┌───────────────┐   ┌───────────────┐
│  Claude Code  │   │    Cursor     │   │    Copilot    │
│  (.claude/)   │   │  (.cursor/)   │   │  (.copilot/)  │
└───────────────┘   └───────────────┘   └───────────────┘
        │                   │                   │
        ▼                   ▼                   ▼
┌───────────────┐   ┌───────────────┐   ┌───────────────┐
│   OpenCode    │   │   Kimi Code   │   │     Codex     │
│  (.opencode/) │   │               │   │               │
└───────────────┘   └───────────────┘   └───────────────┘
        │                   │                   │
        ▼                   ▼                   ▼
┌───────────────┐   ┌───────────────┐   ┌───────────────┐
│   Windsurf    │   │    Pi         │   │   Gemini CLI  │
│               │   │               │   │               │
└───────────────┘   └───────────────┘   └───────────────┘
```

Each agent gets a plugin configuration file (`.claude-plugin/`, `.cursor-plugin/`, etc.) that tells it how to read NassAI Praxis skills, memory, and personas.

---

## How It Works

### 1. Memory System — Your Project's Institutional Knowledge

NassAI Praxis maintains four layers of persistent memory:

```
┌─────────────────────────────────────────────────────────────┐
│                     Memory Architecture                      │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────────┐  Current task context                     │
│  │   Working    │  "Refactoring auth module — phase 2"      │
│  │   Memory     │  Updated every session                    │
│  └──────────────┘                                           │
│                                                              │
│  ┌──────────────┐  Past events, outcomes                    │
│  │   Episodic   │  "Migration on Aug 15 caused 3min down"  │
│  │   Memory     │  Grows with each task                     │
│  └──────────────┘                                           │
│                                                              │
│  ┌──────────────┐  Patterns, conventions                    │
│  │   Semantic   │  "Always use Zod, never manual checks"   │
│  │   Memory     │  Project-specific rules                   │
│  └──────────────┘                                           │
│                                                              │
│  ┌──────────────┐  Step-by-step processes                   │
│  │  Procedural  │  "1. Test → 2. Implement → 3. Commit"    │
│  │   Memory     │  Workflows that repeat                    │
│  └──────────────┘                                           │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

| Memory Layer | What It Stores | Example |
|--------------|----------------|---------|
| **Working** | Current task context, in-progress decisions | "Refactoring auth module — phase 2 of 3" |
| **Episodic** | Past events, what worked, what failed | "Database migration on 2026-08-15 caused 3min downtime" |
| **Semantic** | Project patterns, conventions, rules | "Always use Zod for validation, never manual checks" |
| **Procedural** | Workflows, step-by-step processes | "1. Write test → 2. Implement → 3. Refactor → 4. Commit" |

### 2. Sub-Agents — Specialized Workers

When your task is complex, NassAI Praxis dispatches specialized sub-agents. Each agent is an expert in its domain, with its own memory, skills, and experience logs.

**Development Agents:**

| Agent | What It Does | When You Would Use It |
|-------|--------------|-------------------|
| `frontend-developer` | React, Vue, Angular, CSS architecture | Building UI components |
| `backend-developer` | APIs, databases, authentication | Server-side logic |
| `ui-designer` | Design systems, tokens, theming | Visual design implementation |
| `database-expert` | Schema design, optimization, migrations | Data architecture |
| `devops-engineer` | CI/CD, Docker, Kubernetes | Infrastructure and deployment |
| `system-architect` | Patterns, ADRs, scalability | Architecture decisions |

**Workflow Agents:**

| Agent | What It Does | When You Would Use It |
|-------|--------------|-------------------|
| `researcher` | Web research, analysis | Information gathering |
| `reviewer` | Code quality, security review | Before merging code |
| `tester` | Test generation, QA | Ensuring quality |
| `security-auditor` | Vulnerability detection | Security audits |
| `planner` | Task breakdown | Project planning |
| `orchestrator` | Multi-agent coordination | Complex multi-step workflows |

**How orchestration works:**

```
┌─────────────────────────────────────────────────────────────┐
│                  Agent Orchestration Flow                    │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  You: "Add user authentication with OAuth2"                 │
│                            │                                 │
│                            ▼                                 │
│                   ┌─────────────────┐                        │
│                   │   Orchestrator   │                        │
│                   └────────┬────────┘                        │
│                            │                                 │
│            ┌───────────────┼───────────────┐                 │
│            ▼               ▼               ▼                 │
│     ┌──────────┐    ┌──────────┐    ┌──────────┐            │
│     │ Planner  │    │ Backend  │    │ Security │            │
│     │          │    │   Dev    │    │  Auditor │            │
│     └────┬─────┘    └────┬─────┘    └────┬─────┘            │
│          │               │               │                   │
│          ▼               ▼               ▼                   │
│     Task list      API endpoints    Security review          │
│     created        written          completed                │
│                            │                                 │
│                            ▼                                 │
│                   ┌─────────────────┐                        │
│                   │     Tester      │                        │
│                   └────────┬────────┘                        │
│                            │                                 │
│                            ▼                                 │
│                   Test suite generated                       │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### 3. Personas — Your AI Team

NassAI Praxis includes 10 personas, each with a distinct expertise and communication style. You can address them by name for domain-specific guidance.

**Base Personas (Generalists):**

| Name | Level | Style | Best For |
|------|-------|-------|----------|
| Hassan | Mid-level | Balanced, bilingual | Everyday development tasks |
| Yousef | Senior | Opinionated, brief | Architecture decisions, code reviews |
| Layla | Junior | Detailed, examples | Learning, asking questions |

**Specialist Personas (Domain Experts):**

| Name | Specialty | Communication Style |
|------|-----------|---------------------|
| Omar Al-Khatib | Frontend — React, Next.js, TypeScript | Pragmatic, visual examples |
| Fatima Al-Zahra | Backend — Node.js, Python, PostgreSQL | Methodical, data-driven |
| Khaled Al-Mansour | UI/UX — Design Systems, WCAG | Systematic, pattern-focused |
| Yasmin Al-Sharif | QA — Playwright, Vitest, TDD | Evidence-based, thorough |
| Amr Al-Hassan | DevOps — Docker, K8s, CI/CD | Automation-first, practical |
| Nour Al-Din | Security — OWASP, Pen Testing | Precise, CWE-referenced |
| Sami Al-Saeed | Architecture — DDD, Microservices | Strategic, boundary-focused |

**Example interaction:**

```
You: Omar, how should I structure this React component?

Omar: Component-driven architecture. Here is my approach:

1. Extract a custom hook for state logic
2. Create a presentational component
3. Use TypeScript interfaces for props
4. Add React Testing Library tests

Here is the pattern...
```

Each persona includes 4 files:
- `PERSONA.md` — Profile, preferences, communication style
- `experience.md` — Background, technologies, expertise
- `preferences.md` — Code style, workflow, documentation habits
- `skills.md` — Technical skills, tools, methodologies

### 4. Skills — 29 Specialized Capabilities

```
┌─────────────────────────────────────────────────────────────┐
│                    Skill Activation Flow                     │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  User Request                                                │
│       │                                                      │
│       ▼                                                      │
│  ┌──────────────┐                                            │
│  │   Intent     │  What is the user trying to do?           │
│  │  Detection   │                                            │
│  └──────┬───────┘                                            │
│         │                                                    │
│    ┌────┴────┬──────────┬───────────┐                        │
│    ▼         ▼          ▼           ▼                        │
│  ┌─────┐  ┌─────┐  ┌─────────┐  ┌─────┐                    │
│  │Core │  │Tech │  │Method   │  │None │                    │
│  │     │  │     │  │ology    │  │     │                    │
│  └──┬──┘  └──┬──┘  └────┬────┘  └─────┘                    │
│     │        │          │                                    │
│     ▼        ▼          ▼                                    │
│  Always   Domain-     Process-                               │
│  active   specific    oriented                               │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

#### Core Skills (Always Active)

| Skill | What It Does | When It Activates |
|-------|--------------|-------------------|
| `brainstorming` | Structured ideation before coding | Before writing any code |
| `tdd` | Test-driven development workflow | During implementation |
| `debugging` | Systematic bug investigation | When encountering bugs |
| `planning` | Task breakdown and sequencing | Before complex tasks |
| `code-review` | Pre-commit quality checks | Before commits |
| `security` | Background security awareness | Always running |
| `subagent-management` | Multi-agent orchestration | Complex tasks |

#### Technical Skills (Domain-Specific)

| Skill | What It Does | When It Activates |
|-------|--------------|-------------------|
| `frontend-ui-engineering` | Component architecture, patterns | Building UI |
| `api-design` | REST/GraphQL API patterns | Designing APIs |
| `database-design` | Schema optimization, migrations | Database work |
| `devops-pipelines` | CI/CD, Docker, Kubernetes | Infrastructure |
| `mobile-app-development` | React Native, Flutter | Mobile apps |
| `system-architecture` | Microservices, CQRS, event-driven | Architecture decisions |
| `performance-tuning` | Core Web Vitals, caching | Optimization |
| `accessibility-compliance` | WCAG 2.2, ARIA | Accessibility |
| `design-systems` | DTCG tokens, theming | Design systems |
| `observability` | Logging, metrics, tracing | Production monitoring |

#### Methodology Skills (Process-Oriented)

| Skill | What It Does | When It Activates |
|-------|--------------|-------------------|
| `writing-plans` | Task breakdown (2-5 min) | Planning phase |
| `executing-plans` | Batch execution with checkpoints | Implementation phase |
| `verification` | Evidence before claims | Always |
| `spec-driven` | Interface contracts before code | Before coding |
| `refactoring` | Safe code improvement patterns | Code cleanup |
| `pr-review` | 5-agent parallel review | PR reviews |
| `risk-assessment` | Risk-based questioning | High-risk changes |
| `anti-patterns` | Shortcut prevention | Always |

### 5. Self-Improvement — Learning from Your Project

```
┌─────────────────────────────────────────────────────────────┐
│                  Self-Improvement Loop                       │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌─────────────┐     ┌─────────────┐     ┌─────────────┐   │
│  │  Evaluation  │────▶│   Pattern   │────▶│  Refinement  │   │
│  │              │     │  Discovery  │     │              │   │
│  │ Review what  │     │ Find what   │     │ Update skills│   │
│  │ worked or    │     │ keeps       │     │ and patterns │   │
│  │ did not      │     │ happening   │     │              │   │
│  └─────────────┘     └─────────────┘     └─────────────┘   │
│         │                                       │            │
│         │                                       ▼            │
│         │                               ┌─────────────┐     │
│         │                               │  Skill Gen  │     │
│         │                               │             │     │
│         │                               │ Auto-create │     │
│         │                               │ new skills  │     │
│         │                               │ from        │     │
│         │                               │ patterns    │     │
│         │                               └─────────────┘     │
│         │                                       │            │
│         │                                       ▼            │
│         │                               ┌─────────────┐     │
│         │                               │  Agent Gen  │     │
│         │                               │             │     │
│         │                               │ Auto-create │     │
│         │                               │ new agents  │     │
│         │                               │ from gaps   │     │
│         │                               └─────────────┘     │
│         │                                       │            │
│         └───────────────────────────────────────┘            │
│                    Continuous Loop                            │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

**How it works:**

1. **Evaluation** — After each task, run the evaluation checklist (33-point score)
2. **Pattern Discovery** — Log successful/failed patterns in `evolve/refine/`
3. **Refinement** — Track user preferences and codebase conventions
4. **Skill Generation** — When a procedure repeats 3+ times with score >= 30, auto-generate a new skill
5. **Agent Generation** — When a task type doesn't fit existing agents, auto-generate a new agent

**Evolve Directory:**

```
evolve/
├── evaluation/
│   └── checklist.md      # 33-point task evaluation checklist
├── refine/
│   └── patterns.md       # Successful/failed patterns, user preferences
├── skills-gen/
│   └── auto-skills.md    # Skills pending validation before promotion
└── agents-gen/
    └── auto-agents.md    # Agents pending validation before creation
```

**Skill Promotion Criteria:**

| Criterion | Requirement |
|-----------|-------------|
| Repetition | Used 3+ times successfully |
| Score | Average score >= 30/33 |
| Generality | Works across different contexts |
| Documentation | Steps are clear and complete |

**Agent Creation Criteria:**

| Criterion | Requirement |
|-----------|-------------|
| Gap | No existing agent handles this domain |
| Repetition | Task type appears 3+ times |
| Specialization | Requires deep domain knowledge |
| Isolation | Task benefits from independent execution |

---

## Quick Start

### Install for Claude Code

```bash
git clone https://github.com/NasserJabir/NassAI-Praxis.git
cp -r NassAI-Praxis/.claude-plugin your-project/
cp -r NassAI-Praxis/skills your-project/
cp NassAI-Praxis/CLAUDE.md your-project/
```

### Install for Cursor

```bash
cp -r NassAI-Praxis/.cursor-plugin your-project/
cp -r NassAI-Praxis/skills your-project/
```

### Install for GitHub Copilot

```bash
cp -r NassAI-Praxis/.copilot-plugin your-project/
cp -r NassAI-Praxis/skills your-project/
```

### Install for OpenCode

```bash
cp -r NassAI-Praxis/.opencode your-project/
cp -r NassAI-Praxis/skills your-project/
cp NassAI-Praxis/AGENTS.md your-project/
```

---

## Project Structure

```
nassai-praxis/
├── agents/                  # 12 specialized sub-agents
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
├── skills/                  # 29 specialized skills
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
├── personas/                # 10 developer personas
│   ├── hassan/
│   ├── yousef/
│   ├── layla/
│   ├── omar/
│   ├── fatima/
│   ├── khaled/
│   ├── yasmin/
│   ├── amr/
│   ├── nour/
│   └── sami/
├── memory/                  # Persistent memory templates
│   ├── working/
│   ├── episodic/
│   ├── semantic/
│   └── procedural/
├── evolve/                  # Self-improvement system
│   ├── evaluation/
│   │   └── checklist.md     # 33-point task evaluation
│   ├── refine/
│   │   └── patterns.md      # Pattern tracking
│   ├── skills-gen/
│   │   └── auto-skills.md   # Skill auto-generation
│   └── agents-gen/
│       └── auto-agents.md   # Agent auto-generation
├── .claude-plugin/          # Claude Code integration
├── .cursor-plugin/          # Cursor integration
├── .copilot-plugin/         # GitHub Copilot integration
├── .opencode/               # OpenCode integration
├── CLAUDE.md                # Claude Code entry point
├── AGENTS.md                # OpenCode entry point
└── GEMINI.md                # Gemini CLI entry point
```

---

## Customization

### Add a New Skill

```bash
mkdir skills/my-skill
cat > skills/my-skill/SKILL.md << 'EOF'
---
name: my-skill
description: What this skill does and when to use it
---

# My Skill

## Description
What this skill does

## When to Activate
Conditions that trigger this skill

## Process
Step-by-step instructions

## Quality Criteria
How to know if done well
EOF
```

### Add a New Agent

```bash
mkdir -p agents/my-agent/{memory,skills,experiences}
cat > agents/my-agent/AGENT.md << 'EOF'
# My Agent

## Identity
- Name: My Agent
- Role: [What it does]
- Expertise: [Skills]

## Capabilities
- [x] Can do X
- [x] Can do Y

## Constraints
- Must not [limitation]
EOF
```

### Add a New Persona

```bash
mkdir personas/my-persona
cat > personas/my-persona/PERSONA.md << 'EOF'
# Name — Specialty

## Profile
- Level: mid/senior/junior
- Specialty: What they are expert in
- Experience: Years of experience

## Communication
- Language: Arabic/English/Bilingual
- Detail level: brief/moderate/detailed
- Examples: yes/no
EOF
```

---

## Contributing

1. Fork the repository
2. Create a feature branch
3. Add your skills, agents, or personas
4. Submit a pull request

### Guidelines

- Keep `SKILL.md` under 500 lines
- Use progressive disclosure
- Include concrete examples
- Define clear boundaries for agents
- Include memory templates for agents

---

## License

MIT License - See [LICENSE](LICENSE) for details.

---

## Links

- [GitHub Repository](https://github.com/NasserJabir/NassAI-Praxis)
- [Contributing Guide](CONTRIBUTING.md)

---

Made with ❤️ by NassAI (Nasser Jabir)
