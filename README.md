# NassAI Praxis

> Your AI coding agent's operating system — not just instructions, but identity, memory, and evolution.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

---

## What is NassAI Praxis?

Most AI coding agents are brilliant but amnesiac. They forget your project's patterns between sessions. They don't know your team's conventions. They treat every conversation as a cold start.

**NassAI Praxis fixes this.**

It's a markdown-only framework that gives your AI agent:

- **Persistent memory** that survives across sessions
- **12 specialized sub-agents** that handle different domains
- **10 personas** with Arabic names and distinct personalities
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

## How It Works

### 1. Memory System — Your Project's Institutional Knowledge

Unlike other frameworks that forget everything between sessions, NassAI Praxis maintains four layers of persistent memory:

| Memory Layer | What It Stores | Example |
|--------------|----------------|---------|
| **Working** | Current task context, in-progress decisions | "Refactoring auth module — phase 2 of 3" |
| **Episodic** | Past events, what worked, what failed | "Database migration on 2026-08-15 caused 3min downtime — avoid NULL columns" |
| **Semantic** | Project patterns, conventions, rules | "Always use Zod for validation, never manual checks" |
| **Procedural** | Workflows, step-by-step processes | "1. Write test → 2. Implement → 3. Refactor → 4. Commit" |

**The result:** Your AI agent doesn't just read your code — it understands your project's history, preferences, and evolution.

### 2. Sub-Agents — Specialized Workers

When your task is complex, NassAI Praxis dispatches specialized sub-agents. Each agent is an expert in its domain, with its own memory, skills, and experience logs.

**Development Agents:**

| Agent | What It Does | When You'd Use It |
|-------|--------------|-------------------|
| `frontend-developer` | React, Vue, Angular, CSS architecture | Building UI components |
| `backend-developer` | APIs, databases, authentication | Server-side logic |
| `ui-designer` | Design systems, tokens, theming | Visual design implementation |
| `database-expert` | Schema design, optimization, migrations | Data architecture |
| `devops-engineer` | CI/CD, Docker, Kubernetes | Infrastructure and deployment |
| `system-architect` | Patterns, ADRs, scalability | Architecture decisions |

**Workflow Agents:**

| Agent | What It Does | When You'd Use It |
|-------|--------------|-------------------|
| `researcher` | Web research, analysis | Information gathering |
| `reviewer` | Code quality, security review | Before merging code |
| `tester` | Test generation, QA | Ensuring quality |
| `security-auditor` | Vulnerability detection | Security audits |
| `planner` | Task breakdown | Project planning |
| `orchestrator` | Multi-agent coordination | Complex multi-step workflows |

**How orchestration works:**

```
You: "Add user authentication with OAuth2"
         │
         ▼
┌─────────────────┐
│   Orchestrator   │ ← Coordinates the entire workflow
└────────┬────────┘
         │
    ┌────┴────┬──────────┬───────────┐
    ▼         ▼          ▼           ▼
┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐
│Planner │ │Backend │ │Security│ │Tester  │
│        │ │Dev     │ │Auditor │ │        │
└────┬───┘ └────┬───┘ └────┬───┘ └────┬───┘
     │          │          │          │
     ▼          ▼          ▼          ▼
  Tasks     API Code   Security   Test Suite
  Created   Written    Reviewed   Generated
```

### 3. Personas — Your AI Team with Real Personalities

NassAI Praxis includes 10 personas, each with a fictional Arabic name, distinct expertise, and communication style. You can address them by name for domain-specific guidance.

**Base Personas (Generalists):**

| Name | Level | Style | Best For |
|------|-------|-------|----------|
| **حسن** (Hassan) | Mid-level | Balanced, bilingual | Everyday development tasks |
| **يوسف** (Yousef) | Senior | Opinionated, brief | Architecture decisions, code reviews |
| **ليلى** (Layla) | Junior | Detailed, examples | Learning, asking questions |

**Specialist Personas (Domain Experts):**

| Name | Specialty | Communication Style |
|------|-----------|---------------------|
| **عمر الخطيب** (Omar) | Frontend — React, Next.js, TypeScript | Pragmatic, visual examples |
| **فاطمة الزهراء** (Fatima) | Backend — Node.js, Python, PostgreSQL | Methodical, data-driven |
| **خالد المنصور** (Khaled) | UI/UX — Design Systems, WCAG | Systematic, pattern-focused |
| **ياسمين الشريف** (Yasmin) | QA — Playwright, Vitest, TDD | Evidence-based, thorough |
| **عمرو الحسن** (Amr) | DevOps — Docker, K8s, CI/CD | Automation-first, practical |
| **نور الدين** (Nour) | Security — OWASP, Pen Testing | Precise, CWE-referenced |
| **سامي السعيد** (Sami) | Architecture — DDD, Microservices | Strategic, boundary-focused |

**Example interaction:**

```
You: عمر، how should I structure this React component?

Omar: Component-driven architecture. Here's my approach:

1. Extract a custom hook for state logic
2. Create a presentational component
3. Use TypeScript interfaces for props
4. Add React Testing Library tests

Here's the pattern...

[Provides specific code examples based on your project's conventions]
```

Each persona includes 4 files:
- `PERSONA.md` — Profile, preferences, communication style
- `experience.md` — Background, technologies, expertise
- `preferences.md` — Code style, workflow, documentation habits
- `skills.md` — Technical skills, tools, methodologies

### 4. Skills — 29 Specialized Capabilities

NassAI Praxis includes 29 skills organized into three categories:

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
| `verification` | Evidence before claims | Always — prevents false confidence |
| `spec-driven` | Interface contracts before code | Before coding |
| `refactoring` | Safe code improvement patterns | Code cleanup |
| `pr-review` | 5-agent parallel review | PR reviews |
| `risk-assessment` | Risk-based questioning | High-risk changes |
| `anti-patterns` | Shortcut prevention | Always — catches bad habits |

### 5. Self-Improvement — Learning from Your Project

NassAI Praxis includes a self-improvement loop that learns from your project's history:

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│  Evaluation  │────▶│   Pattern   │────▶│  Refinement  │
│              │     │  Discovery  │     │              │
│ Review what  │     │ Find what   │     │ Update skills│
│ worked/didn't│     │ keeps       │     │ and patterns │
│              │     │ happening   │     │              │
└─────────────┘     └─────────────┘     └─────────────┘
       │                                       │
       │                                       ▼
       │                               ┌─────────────┐
       │                               │ Skill Gen   │
       │                               │             │
       │                               │ Auto-create │
       │                               │ new skills  │
       │                               │ from        │
       │                               │ patterns    │
       │                               └─────────────┘
       │                                       │
       └───────────────────────────────────────┘
                    Continuous Loop
```

**How it works:**

1. **Evaluation** — After each task, the system evaluates what worked and what didn't
2. **Pattern Discovery** — Identifies recurring patterns across multiple tasks
3. **Refinement** — Updates existing skills based on project-specific learnings
4. **Skill Generation** — Creates new skills from discovered patterns

---

## Why NassAI Praxis?

### Comparison with Other Frameworks

#### vs. obra/superpowers (273k★)

Superpowers is excellent — it pioneered the skills-based approach for Claude Code. But it has limitations:

| Capability | Superpowers | NassAI Praxis |
|------------|-------------|---------------|
| **Skills** | 24 skills, Claude Code only | 29 skills, 8+ agents supported |
| **Memory** | Basic session memory | 4-layer persistent memory |
| **Personas** | None | 10 personas with personalities |
| **Sub-Agents** | Basic task delegation | 12 specialized agents with orchestration |
| **Self-Improvement** | Manual updates | Automated learning loop |
| **Agent Support** | Claude Code only | Claude Code, Cursor, Copilot, OpenCode, Kimi, Codex, Pi |

**Think of it this way:** Superpowers gave your agent a toolbox. NassAI Praxis gives your agent a toolbox, a workshop, a memory, and a team.

#### vs. anthropics/agent-skills (170k★)

Anthropic's official skills collection is a great reference for skill authoring. But it's a collection, not a framework:

| Capability | Agent Skills | NassAI Praxis |
|------------|--------------|---------------|
| **Purpose** | Skill authoring reference | Complete agent enhancement framework |
| **Organization** | Flat skill collection | Categorized skills + agents + personas |
| **Memory** | None | 4-layer persistent memory |
| **Orchestration** | None | Multi-agent coordination |
| **Agent Support** | Claude Code | 8+ agents |
| **Self-Improvement** | None | Automated learning loop |

**Think of it this way:** Agent Skills is a cookbook. NassAI Praxis is a full kitchen with chefs, recipes, and a memory of what tastes good.

#### vs. mem0ai/mem0 (63k★)

Mem0 is a powerful memory layer for AI. But it's a general-purpose memory tool, not a coding framework:

| Capability | Mem0 | NassAI Praxis |
|------------|------|---------------|
| **Focus** | General AI memory | Coding agent enhancement |
| **Memory Types** | Vector-based semantic memory | 4 specialized layers (working, episodic, semantic, procedural) |
| **Skills** | None | 29 specialized skills |
| **Agents** | None | 12 specialized agents |
| **Personas** | None | 10 personas |
| **Self-Improvement** | Basic memory consolidation | Automated skill generation |

**Think of it this way:** Mem0 is a hard drive. NassAI Praxis is a brain with skills, experience, and the ability to learn.

#### vs. VoltAgent/awesome-agent-skills (30k★)

Awesome-agent-skills is a curated list of agent skills. It's a directory, not a framework:

| Capability | Awesome Agent Skills | NassAI Praxis |
|------------|----------------------|---------------|
| **What It Is** | Curated list of skills | Complete enhancement framework |
| **Organization** | Links to various skills | Integrated skills + agents + personas |
| **Memory** | None | 4-layer persistent memory |
| **Orchestration** | None | Multi-agent coordination |
| **Installation** | Manual, find and copy | Plugin configs for 8+ agents |

**Think of it this way:** Awesome Agent Skills is a phone book. NassAI Praxis is the phone company with operators, directories, and call history.

### The NassAI Praxis Difference

```
┌─────────────────────────────────────────────────────────────┐
│                    What Others Give You                      │
├─────────────────────────────────────────────────────────────┤
│  ✓ Skills (some frameworks)                                 │
│  ✓ Basic instructions                                       │
│  ✓ Maybe memory (a few frameworks)                         │
│                                                             │
│  ✗ No persistent memory across sessions                    │
│  ✗ No specialized agents                                    │
│  ✗ No personas or personalities                             │
│  ✗ No self-improvement                                      │
│  ✗ Limited agent support                                    │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                    What NassAI Praxis Gives You              │
├─────────────────────────────────────────────────────────────┤
│  ✓ 29 skills (core + technical + methodology)              │
│  ✓ 12 specialized sub-agents with orchestration            │
│  ✓ 10 personas with Arabic names and personalities         │
│  ✓ 4-layer persistent memory (working, episodic, etc.)    │
│  ✓ Self-improvement loop (evaluation → refinement)         │
│  ✓ Plugin configs for 8+ AI agents                         │
│  ✓ Bilingual (Arabic + English)                            │
│  ✓ Markdown-only — no runtime, no servers                  │
└─────────────────────────────────────────────────────────────┘
```

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
│   ├── frontend-developer/  # React, Vue, Angular
│   ├── backend-developer/   # APIs, databases, auth
│   ├── ui-designer/         # Design systems, tokens
│   ├── database-expert/     # Schema, optimization
│   ├── devops-engineer/     # CI/CD, Docker, K8s
│   ├── system-architect/    # Patterns, ADRs
│   ├── researcher/          # Web research
│   ├── reviewer/            # Code quality
│   ├── tester/              # Test generation
│   ├── security-auditor/    # Vulnerability detection
│   ├── planner/             # Task breakdown
│   └── orchestrator/        # Multi-agent coordination
├── skills/                  # 29 specialized skills
│   ├── brainstorming/       # Pre-coding ideation
│   ├── tdd/                 # Test-driven development
│   ├── debugging/           # Systematic bug fixing
│   ├── planning/            # Task breakdown
│   ├── code-review/         # Quality checks
│   ├── security/            # Background security
│   ├── subagent-management/ # Multi-agent orchestration
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
│   ├── hassan/              # حسن — General Developer
│   ├── yousef/              # يوسف — Senior Developer
│   ├── layla/               # ليلى — Junior Developer
│   ├── omar/                # عمر — Frontend
│   ├── fatima/              # فاطمة — Backend
│   ├── khaled/              # خالد — UI/UX
│   ├── yasmin/              # ياسمين — QA
│   ├── amr/                 # عمرو — DevOps
│   ├── nour/                # نور — Security
│   └── sami/                # سامي — Architecture
├── memory/                  # Persistent memory templates
│   ├── working/
│   ├── episodic/
│   ├── semantic/
│   └── procedural/
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
# Arabic Name (English Name) — Specialty

## Profile
- Level: mid/senior/junior
- Specialty: What they're expert in
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

Made with ❤️ by NassAI
