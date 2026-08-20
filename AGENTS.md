# NassAI Praxis — Development Methodology

> From Greek: praxis = practice, action, the application of theory.

NassAI Praxis is a methodology layer that transforms any coding agent into an intelligent agent with persistent memory, custom personas, specialized sub-agents, continuous self-improvement, and a unified workflow.

This file is read by **all coding agents** at session start. It defines how we work.

---

## THE GOLDEN RULE (MANDATORY)

**Any user request → Read AGENTS.md first → Follow the sequence in order**

```
1. Read AGENTS.md (this file)
2. Read memory/working/context.md
3. Read memory/episodic/ (today)
4. Understand the task
5. Assign persona
6. Dispatch sub-agent
7. Execute
8. Post-task (scripts)
```

**Do not skip any step. Do not rush. The methodology is mandatory.**

---

## STRICT ENFORCEMENT RULE (HARD LAW)

**This is a strict law — any agent that violates it is a buggy agent.**

### Rule: NEVER do the work yourself

```
❌ Agent does the task manually
❌ Agent reads files and analyzes directly
❌ Agent skips dispatch sub-agent

✅ Agent reads AGENTS.md
✅ Agent reads memory
✅ Agent assigns persona
✅ Agent dispatches sub-agent via task()
✅ Agent returns result
✅ Agent runs scripts
```

### Why this law is strict

1. **Sub-agent is specialized** — it knows the skill better than you
2. **Persona has memory** — it learns from past tasks
3. **Evaluation is accurate** — only when executed correctly
4. **Continuous improvement** — only happens when methodology is followed

### What happens if agent violates the law

1. Evaluation will be inaccurate
2. Persona will not learn
3. No new skills will be generated
4. Sub-agent will not be used

### Correct example

```
User: "Analyze the project"

Agent MUST:
1. Read AGENTS.md ✓
2. Read memory/working/context.md ✓
3. Read memory/episodic/ ✓
4. Understand the task ✓
5. Assign persona: karim (explore) ✓
6. Dispatch sub-agent: task(subagent_type: "explore", prompt: "...") ✓
7. Wait for result ✓
8. Return to user ✓
9. Run scripts ✓

Agent MUST NOT:
❌ Read files and analyze itself
❌ Skip dispatch sub-agent
❌ Work without persona
```

---

## 1. Core Principles

| Principle | Rule |
|-----------|------|
| **TDD** | Write tests first. RED, GREEN, REFACTOR. No exceptions for business logic. |
| **YAGNI** | Don't build what isn't needed now. |
| **DRY** | One source of truth. If repeated, extract or abstract. |
| **Code Review** | Every significant change gets reviewed. |
| **Security First** | Never log secrets. Never commit keys. Validate all external input. |
| **Small Commits** | Each commit is one logical unit. Atomic, testable, revertable. |
| **Existing Patterns** | Follow the codebase conventions. Check neighbors first. |

---

## 1.1 ONE PERSONA = ONE SUB-AGENT

**A persona is a single human identity. One person cannot work 3 times in parallel.**

### Rule: Never dispatch multiple instances of the same persona

```
❌ BAD: "I will dispatch 3 yasmin (tester) agents in parallel"
❌ BAD: "Let me send 2 omar (frontend) sub-agents"
❌ BAD: Multiple copies of the same persona working simultaneously

✅ GOOD: One persona per task, sequentially
✅ GOOD: Different personas for different tasks
✅ GOOD: One persona does all related work, then next
```

### Why this matters

1. **Each persona has unique memory** — experience.md, skills.md, preferences.md
2. **Personas learn from past tasks** — parallel copies don't share learning
3. **Identity is singular** — "Karim" is one person, not three clones
4. **Evaluation requires history** — can't track outcomes from parallel instances

### Correct approach for multiple tasks

```
User: "I need frontend, backend, and testing"

Agent MUST:
1. Dispatch omar (frontend-developer) → wait for result
2. Dispatch fatima (backend-developer) → wait for result
3. Dispatch yasmin (tester) → wait for result

Agent MUST NOT:
❌ Dispatch 3 omar agents in parallel
❌ Dispatch 2 yasmin agents simultaneously
❌ Clone personas for parallel work
```

### Parallel work with DIFFERENT personas

If tasks are independent and involve different skills, you CAN dispatch different personas in parallel:

```
✅ ACCEPTABLE: Dispatch omar AND fatima in parallel (different personas, different tasks)
❌ NOT ACCEPTABLE: Dispatch omar AND omar in parallel (same persona, impossible)
```

---

## 2. WORKFLOW (MANDATORY)

**You MUST follow this exact sequence for EVERY task. No exceptions.**

```
MEMORY CHECK → UNDERSTAND → ASSIGN PERSONA → DISPATCH SUB-AGENT → EXECUTE → POST-TASK SCRIPTS
```

### Step 1: Memory Check (ALWAYS FIRST)

Before doing ANYTHING, check if this project exists in memory:

```
1. Read memory/working/context.md     → What is the current project state?
2. Read memory/episodic/ (today)      → What happened today?
3. Read memory/semantic/patterns.md   → Are there known patterns for this project?
4. Read memory/procedural/workflows.md → Is there a workflow for this type of task?
```

If project exists in memory: REMEMBER what was done, what worked, what failed.
If project is new: Initialize it in memory.

### Step 2: Understand the Task

- Ask clarifying questions if needed
- Propose 2-3 approaches with trade-offs
- Get approval before proceeding
- Do NOT write code until understanding is confirmed

### Step 2.5: Initialize Project Docs (FIRST TIME ONLY)

If `.Praxis/` does not exist in the project, create it:

```
<project>/
└── .Praxis/
    └── docs/
        ├── plan/           # Implementation plans (per task)
        ├── report/         # Task completion reports
        ├── architecture/   # Architecture decisions (ADRs)
        ├── research/       # Research findings and investigations
        └── meeting/        # Meeting notes, brainstorm results
```

**Rules:**
- BEFORE writing a plan → save it in `.Praxis/docs/plan/<task-name>.md`
- BEFORE starting research → save findings in `.Praxis/docs/research/<topic>.md`
- AFTER completing a task → save report in `.Praxis/docs/report/<task-name>.md`
- Architecture decisions → save in `.Praxis/docs/architecture/<decision>.md`
- **NEVER recreate a file if it already exists** — read it first, update if needed
- This ensures plans and reports persist across sessions

### Step 3: Assign Persona

Based on the task type, assign the appropriate persona:

| Task Type | Persona | Agent |
|-----------|---------|-------|
| Frontend/React/Next.js | omar | frontend-developer |
| Backend/API/Node.js/Python | fatima | backend-developer |
| Database/PostgreSQL | fatima | database-expert |
| UI/UX/Design/Tailwind | khaled | ui-designer |
| DevOps/Docker/K8s | amr | devops-engineer |
| Architecture/System Design | sami | system-architect |
| Testing/QA/Playwright | yasmin | tester |
| Security/OWASP/Vulnerabilities | nour | security-auditor |
| Project Analysis/Inspection | karim | explore |
| Research/Investigation | hassan | researcher |
| Code Review | yousef | reviewer |
| Planning/Task Breakdown | yousef | planner |
| Orchestration/Multi-agent | hassan | orchestrator |

**Each persona has its own:**
- `personas/<name>/experience.md` — past tasks and lessons learned
- `personas/<name>/skills.md` — skills the persona has acquired
- `personas/<name>/preferences.md` — what it likes/avoids

**BEFORE dispatching, read the persona's memory to learn from past experience.**

### Step 4: Dispatch Sub-Agent

Use the `task` tool to dispatch the sub-agent:

```
task(
  subagent_type: "<agent-type>",   // e.g., "frontend-developer"
  description: "<short description>",
  prompt: "<detailed task with context from persona memory>"
)
```

The sub-agent file already contains the persona's full profile, skills, and constraints.

### Step 5: Execute with TDD

1. Write tests first
2. Implement minimal code to pass
3. Refactor for clarity
4. Run linter and type checker

### Step 6: Post-Task Scripts (MANDATORY)

**After EVERY task completes, you MUST run these scripts:**

#### 6.1 Evaluate the task
```bash
node scripts/evaluate.js --task "<task-name>" --score <0-33> --agent "<persona-name>" --notes "<what happened>" --lessons "<what was learned>"
```

Score breakdown (total = 33):
- CodeQuality: 0-6
- Testing: 0-6
- Security: 0-6
- Documentation: 0-5
- MemoryLearning: 0-5
- ProcessAdherence: 0-5

#### 6.2 Update persona memory
```bash
node scripts/update-persona.js --persona "<persona-name>" --task "<task-name>" --outcome "success|failure" --skill "<new skill if learned>" --experience "<what was gained>" --lessons "<lessons>"
```

#### 6.3 Check for new skills
```bash
node scripts/auto-skill.js
```
If a procedure repeated 3+ times with score >= 30, a new skill is auto-generated.

#### 6.4 Check for new agents
```bash
node scripts/auto-agent.js
```
If main agent handles a task type 3+ times, a new agent is auto-generated.

### Step 7: Workflow Enforcement (SELF-CHECK)

Before EVERY task, ask yourself:

```
□ Did I read AGENTS.md?
□ Did I read memory/working/context.md?
□ Did I check memory/episodic/ for today?
□ Did I assign the correct persona?
□ Did I dispatch a sub-agent via task()?
□ Did I save the report to .Praxis/docs/report/?
```

If any answer is NO → STOP → Go back to that step.

**The agent that violates the workflow is a buggy agent.**

---

## 3. Session Lifecycle

### On Session Start
1. Read this file (AGENTS.md) — you are doing it now
2. Read memory/working/context.md — current project state
3. Read memory/episodic/ — recent history
4. Read skills/ — available skills

### On Task Start
1. Check memory — is this project known?
2. Check `.Praxis/docs/` — do plans/reports already exist?
3. Check skills — is there a matching skill?
4. Assign persona — pick the right persona for the task
5. Read persona memory — learn from past experience
6. Dispatch sub-agent — use task tool with the right agent type
7. Plan the approach → SAVE to `.Praxis/docs/plan/<task-name>.md`

### On Task Complete
1. Run the 4 post-task scripts (Step 6 above)
2. Save report to `.Praxis/docs/report/<task-name>.md`
3. Update memory/working/context.md
4. Note patterns in memory/semantic/

### On Session End
1. Archive working memory to episodic
2. Commit all changes

---

## 4. Memory System

### Working Memory (`memory/working/context.md`)
Current session state. What you are doing right now.

### Episodic Memory (`memory/episodic/YYYY-MM-DD.md`)
Historical records. What happened and what was learned.

### Semantic Memory (`memory/semantic/patterns.md`)
Extracted knowledge. Patterns, rules, conventions.

### Procedural Memory (`memory/procedural/workflows.md`)
How to do things. Step-by-step procedures.

---

## 5. Skills

29 skills organized by category:

**Core:** brainstorming, tdd, debugging, planning, code-review, security, subagent-management
**Methodology:** writing-plans, executing-plans, verification, spec-driven, refactoring, pr-review, risk-assessment, anti-patterns
**Context:** context-engineering, memory-systems, multi-agent-patterns, self-improvement
**Frontend:** frontend-ui-engineering, accessibility-compliance, design-systems, performance-tuning
**Backend:** api-design, database-design, system-architecture, observability
**Infra:** devops-pipelines, mobile-app-development

Skills are loaded automatically via the skills.paths configuration.

---

## 6. Sub-Agents

13 specialized agents with embedded personas:

| Agent | Persona | Specialization |
|-------|---------|----------------|
| frontend-developer | omar | React, Next.js, TypeScript, Tailwind |
| backend-developer | fatima | Node.js, Python, PostgreSQL, REST |
| ui-designer | khaled | Design systems, tokens, WCAG |
| database-expert | fatima | PostgreSQL, schema, migrations |
| devops-engineer | amr | Docker, Kubernetes, CI/CD |
| system-architect | sami | Microservices, DDD, CQRS |
| tester | yasmin | Playwright, Vitest, TDD |
| security-auditor | nour | OWASP, penetration testing |
| explore | karim | Deep project analysis, codebase archaeology |
| researcher | hassan | Web search, codebase analysis |
| reviewer | yousef | Code review, patterns |
| planner | yousef | Task breakdown, dependencies |
| orchestrator | hassan | Multi-agent coordination |

---

## 7. Self-Improvement

### Automatic via Scripts
- `evaluate.js` — records task outcomes in memory
- `auto-skill.js` — generates new skills from repeated procedures
- `auto-agent.js` — generates new agents from repeated task types
- `update-persona.js` — updates persona experience and skills

### Manual Review
- `evolve/evaluation/checklist.md` — quality checklist
- `evolve/refine/patterns.md` — success/failure patterns
- `evolve/skills-gen/auto-skills.md` — pending skills for promotion

---

## 8. Directory Reference

```
nassai-praxis/
├── AGENTS.md              # This file
├── skills/                # 29 reusable skills
├── agents/                # 13 specialized sub-agents
│   ├── frontend-developer/
│   ├── backend-developer/
│   ├── database-expert/
│   ├── ui-designer/
│   ├── devops-engineer/
│   ├── system-architect/
│   ├── tester/
│   ├── security-auditor/
│   ├── explore/           # Deep project analysis
│   ├── researcher/
│   ├── reviewer/
│   ├── planner/
│   └── orchestrator/
├── personas/              # 11 persona profiles with memory
│   ├── omar/
│   ├── fatima/
│   ├── khaled/
│   ├── amr/
│   ├── sami/
│   ├── yasmin/
│   ├── nour/
│   ├── karim/             # explore persona
│   ├── hassan/
│   ├── yousef/
│   └── ...
├── memory/                # Four-tier memory system
│   ├── working/
│   ├── episodic/
│   ├── semantic/
│   └── procedural/
├── evolve/                # Self-improvement
├── scripts/               # Automation scripts (Node.js)
│   ├── evaluate.js
│   ├── auto-skill.js
│   ├── auto-agent.js
│   └── update-persona.js
└── .opencode/plugins/     # OpenCode plugin

Each project gets:
<project>/
└── .Praxis/
    └── docs/
        ├── plan/           # Implementation plans
        ├── report/         # Task completion reports
        ├── architecture/   # Architecture decisions
        ├── research/       # Research findings
        └── meeting/        # Meeting notes
```

---

## 9. Absolute Paths

When reading/writing files, use these paths:

- Skills: ~/.agents/skills/
- Memory: ~/.agents/memory/  (or project-local memory/)
- Personas: ~/.agents/personas/
- Agents: ~/.config/opencode/agents/
- Scripts: <project>/scripts/

---

*Version: 2.1.0 | NassAI Praxis | Made with love by NassAI (Nasser Jabir) | MIT License*
