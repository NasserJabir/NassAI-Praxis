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

## Installation

NassAI Praxis is not yet published on any marketplace. Installation is manual — clone the repository and copy files into your agent's global directory.

**Key concept:** Skills, personas, agents, and memory install **globally** for your coding agent. Only an activation file goes into each project.

Pick your agent below. If you use more than one, install separately for each.

### Claude Code

```bash
# Install globally
git clone https://github.com/NasserJabir/NassAI-Praxis.git /tmp/nassai-praxis
cp -r /tmp/nassai-praxis/.claude-plugin ~/.claude/
cp -r /tmp/nassai-praxis/skills ~/.claude/
cp -r /tmp/nassai-praxis/agents ~/.claude/
cp -r /tmp/nassai-praxis/personas ~/.claude/
cp -r /tmp/nassai-praxis/memory ~/.claude/
cp /tmp/nassai-praxis/AGENTS.md ~/.claude/
cp /tmp/nassai-praxis/CLAUDE.md ~/.claude/
rm -rf /tmp/nassai-praxis

# Activate per-project
cp ~/.claude/AGENTS.md your-project/
cp ~/.claude/CLAUDE.md your-project/
```

- Detailed docs: [docs/README.claude.md](docs/README.claude.md)

### OpenCode

Add to your `opencode.json` (global or project-level):

```json
{
  "plugin": ["nassai-praxis@git+https://github.com/NasserJabir/NassAI-Praxis.git"]
}
```

Restart OpenCode. No per-project setup needed.

- Detailed docs: [docs/README.opencode.md](docs/README.opencode.md)

### Cursor

```bash
# Install globally
git clone https://github.com/NasserJabir/NassAI-Praxis.git /tmp/nassai-praxis
cp -r /tmp/nassai-praxis/.cursor-plugin ~/.cursor/
cp -r /tmp/nassai-praxis/skills ~/.cursor/
cp -r /tmp/nassai-praxis/agents ~/.cursor/
cp -r /tmp/nassai-praxis/personas ~/.cursor/
cp -r /tmp/nassai-praxis/memory ~/.cursor/
rm -rf /tmp/nassai-praxis

# Activate per-project (create .cursor/rules/nassai-praxis.md)
```

- Detailed docs: [docs/README.cursor.md](docs/README.cursor.md)

### GitHub Copilot

```bash
# Install globally
git clone https://github.com/NasserJabir/NassAI-Praxis.git /tmp/nassai-praxis
cp -r /tmp/nassai-praxis/.copilot-plugin ~/.copilot/
cp -r /tmp/nassai-praxis/skills ~/.copilot/
cp -r /tmp/nassai-praxis/agents ~/.copilot/
cp -r /tmp/nassai-praxis/personas ~/.copilot/
cp -r /tmp/nassai-praxis/memory ~/.copilot/
rm -rf /tmp/nassai-praxis

# Activate per-project (create .github/copilot-instructions.md)
```

- Detailed docs: [docs/README.copilot.md](docs/README.copilot.md)

### Kimi Code

```bash
# Install globally
git clone https://github.com/NasserJabir/NassAI-Praxis.git /tmp/nassai-praxis
cp -r /tmp/nassai-praxis/.kimi-plugin ~/.kimi/
cp -r /tmp/nassai-praxis/skills ~/.kimi/
cp -r /tmp/nassai-praxis/agents ~/.kimi/
cp -r /tmp/nassai-praxis/personas ~/.kimi/
cp -r /tmp/nassai-praxis/memory ~/.kimi/
rm -rf /tmp/nassai-praxis

# Activate per-project (create .kimi/config.json)
```

- Detailed docs: [docs/README.kimi.md](docs/README.kimi.md)

### Codex

```bash
# Install globally
git clone https://github.com/NasserJabir/NassAI-Praxis.git /tmp/nassai-praxis
cp -r /tmp/nassai-praxis/.codex-plugin ~/.codex/
cp -r /tmp/nassai-praxis/skills ~/.codex/
cp -r /tmp/nassai-praxis/agents ~/.codex/
cp -r /tmp/nassai-praxis/personas ~/.codex/
cp -r /tmp/nassai-praxis/memory ~/.codex/
rm -rf /tmp/nassai-praxis

# Activate per-project (create .codex/config.json)
```

- Detailed docs: [docs/README.codex.md](docs/README.codex.md)

### Pi

```bash
# Install globally
git clone https://github.com/NasserJabir/NassAI-Praxis.git /tmp/nassai-praxis
cp -r /tmp/nassai-praxis/.pi-plugin ~/.pi/
cp -r /tmp/nassai-praxis/skills ~/.pi/
cp -r /tmp/nassai-praxis/agents ~/.pi/
cp -r /tmp/nassai-praxis/personas ~/.pi/
cp -r /tmp/nassai-praxis/memory ~/.pi/
rm -rf /tmp/nassai-praxis

# Activate per-project (create .pi/config.json)
```

- Detailed docs: [docs/README.pi.md](docs/README.pi.md)

### Windsurf

```bash
# Install globally
git clone https://github.com/NasserJabir/NassAI-Praxis.git /tmp/nassai-praxis
cp -r /tmp/nassai-praxis/.windsurf-plugin ~/.windsurf/
cp -r /tmp/nassai-praxis/skills ~/.windsurf/
cp -r /tmp/nassai-praxis/agents ~/.windsurf/
cp -r /tmp/nassai-praxis/personas ~/.windsurf/
cp -r /tmp/nassai-praxis/memory ~/.windsurf/
rm -rf /tmp/nassai-praxis

# Activate per-project (create .windsurf/config.json)
```

- Detailed docs: [docs/README.windsurf.md](docs/README.windsurf.md)

---

## The Basic Workflow

1. **brainstorming** — Activates before writing code. Refines rough ideas through questions, explores alternatives, presents design in sections for validation.

2. **writing-plans** — Activates with approved design. Breaks work into bite-sized tasks (2-5 minutes each). Every task has exact file paths, complete code, verification steps.

3. **executing-plans** — Activates with plan. Dispatches fresh subagent per task with two-stage review (spec compliance, then code quality), or executes in batches with human checkpoints.

4. **test-driven-development** — Activates during implementation. Enforces RED-GREEN-REFACTOR: write failing test, watch it fail, write minimal code, watch it pass, commit.

5. **requesting-code-review** — Activates between tasks. Reviews against plan, reports issues by severity. Critical issues block progress.

6. **verification** — Activates before claiming completion. Evidence before assertions always.

**The agent checks for relevant skills before any task.** Mandatory workflows, not suggestions.

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
├── docs/                    # Detailed documentation
│   ├── README.claude.md     # Claude Code guide
│   ├── README.opencode.md   # OpenCode guide
│   ├── README.cursor.md     # Cursor guide
│   ├── README.copilot.md    # GitHub Copilot guide
│   ├── README.kimi.md       # Kimi Code guide
│   ├── README.codex.md      # Codex guide
│   ├── README.pi.md         # Pi guide
│   └── README.windsurf.md   # Windsurf guide
├── .claude-plugin/          # Claude Code integration
├── .cursor-plugin/          # Cursor integration
├── .copilot-plugin/         # GitHub Copilot integration
├── .opencode/               # OpenCode integration
├── CLAUDE.md                # Claude Code entry point
├── AGENTS.md                # OpenCode entry point
└── GEMINI.md                # Gemini CLI entry point
```

---

## What's Inside

### Skills Library

**Testing**
- **test-driven-development** — RED-GREEN-REFACTOR cycle
- **verification** — Evidence before claims

**Debugging**
- **debugging** — Systematic bug investigation
- **anti-patterns** — Shortcut prevention

**Collaboration**
- **brainstorming** — Socratic design refinement
- **writing-plans** — Detailed implementation plans
- **executing-plans** — Batch execution with checkpoints
- **subagent-management** — Multi-agent orchestration
- **code-review** — Pre-commit quality checks
- **pr-review** — 5-agent parallel review
- **risk-assessment** — Risk-based questioning

**Technical**
- **frontend-ui-engineering** — Component architecture
- **api-design** — REST/GraphQL patterns
- **database-design** — Schema optimization
- **devops-pipelines** — CI/CD, Docker, K8s
- **system-architecture** — Microservices, CQRS
- **performance-tuning** — Core Web Vitals
- **accessibility-compliance** — WCAG 2.2
- **design-systems** — DTCG tokens
- **observability** — Logging, metrics, tracing
- **mobile-app-development** — React Native, Flutter

**Methodology**
- **planning** — Task breakdown
- **spec-driven** — Interface contracts
- **refactoring** — Safe code improvement

**Meta**
- **security** — Background security awareness
- **writing-skills** — Create new skills

### Personas Library

**Generalists**
- **Hassan** — Balanced, bilingual developer
- **Yousef** — Senior architect
- **Layla** — Junior developer

**Specialists**
- **Omar Al-Khatib** — Frontend
- **Fatima Al-Zahra** — Backend
- **Khaled Al-Mansour** — UI/UX
- **Yasmin Al-Sharif** — QA
- **Amr Al-Hassan** — DevOps
- **Nour Al-Din** — Security
- **Sami Al-Saeed** — Architecture

### Memory System

- **Working** — Current session context
- **Episodic** — Historical records
- **Semantic** — Extracted knowledge
- **Procedural** — Workflows and processes

### Self-Improvement

- **Evaluation** — 33-point task scoring
- **Refinement** — Pattern tracking
- **Skill Generation** — Auto-create skills from patterns
- **Agent Generation** — Auto-create agents from gaps

---

## Philosophy

- **Test-Driven Development** — Write tests first, always
- **Systematic over ad-hoc** — Process over guessing
- **Complexity reduction** — Simplicity as primary goal
- **Evidence over claims** — Verify before declaring success
- **Memory matters** — Learn from every task
- **Specialization wins** — Right agent for the right task

---

## Contributing

1. Fork the repository
2. Create a feature branch
3. Follow the `writing-skills` skill for creating and testing new skills
4. Submit a PR

### Guidelines

- Keep `SKILL.md` under 500 lines
- Use progressive disclosure
- Include concrete examples
- Define clear boundaries for agents
- Include memory templates for agents

---

## License

MIT License - see LICENSE file for details.

---

## Links

- [GitHub Repository](https://github.com/NasserJabir/NassAI-Praxis)
- [Contributing Guide](CONTRIBUTING.md)
- [Documentation](docs/)

---

Made with ❤️ by NassAI (Nasser Jabir)
