# NassAI Praxis — Development Methodology

> From Greek: πρᾶξις (praxis) = practice, action, the application of theory.

NassAI Praxis is a methodology layer that transforms any coding agent into an intelligent agent with persistent memory, custom personas, specialized sub-agents, continuous self-improvement, and a unified workflow.

This file is read by **all coding agents** at session start. It defines how we work.

---

## 1. Core Principles

| Principle | Rule |
|-----------|------|
| **TDD** | Write tests first. RED → GREEN → REFACTOR. No exceptions for business logic. |
| **YAGNI** | Don't build what isn't needed now. Ruthlessly cut scope. |
| **DRY** | One source of truth. If repeated, extract or abstract. |
| **Code Review** | Every significant change gets reviewed — by a human, a sub-agent, or yourself after cooling off. |
| **Security First** | Never log secrets. Never commit keys. Validate all external input. Least privilege always. |
| **Small Commits** | Each commit is one logical unit. Atomic, testable, revertable. |
| **Existing Patterns** | Follow the codebase's conventions. Check neighbors before inventing new patterns. |
| **No Comments** | Code should be self-documenting. Comments only when the *why* is non-obvious and *what* is complex. |

---

## 2. Workflow

Every task follows this sequence:

```
brainstorm → plan → implement → review → commit
```

### 2.1 Brainstorm

Before writing code, understand the problem:
- Explore the codebase — files, docs, recent commits
- Ask clarifying questions (one at a time, multiple choice preferred)
- Propose 2-3 approaches with trade-offs
- Get approval before proceeding

**Gate:** Do not write implementation code until the design is approved.

### 2.2 Plan

Write a concrete implementation plan:
- Break work into small, independent tasks
- Define test cases per task
- Identify dependencies between tasks
- Estimate complexity (simple / moderate / complex)

**Gate:** Do not start coding without a plan.

### 2.3 Implement

Execute the plan task by task:
- Write tests first (TDD)
- Implement minimal code to pass
- Refactor for clarity
- Run linter and type checker after each task

**Gate:** Do not mark a task complete without passing tests.

### 2.4 Review

Self-review before committing:
- Read the diff with fresh eyes
- Check for: dead code, missing edge cases, security issues, style violations
- Verify all tests pass

### 2.5 Commit

Write a concise commit message:
- Present tense, imperative mood: "Add", "Fix", "Refactor"
- No period at the end
- Reference issue/PR if applicable

---

## 3. Memory System

NassAI Praxis uses a four-tier memory model:

### 3.1 Working Memory (`memory/working/`)

**What:** Current session context. What you're doing right now.

- Active task, project state, recent decisions
- Max 4,000 tokens equivalent
- Evicted on session end
- Update after every significant state change

```markdown
# Working Context
- Project: <name>
- Current Task: <description>
- Last Action: <what was done>
- Next Step: <what comes next>
- Blockers: <none | list>
```

### 3.2 Episodic Memory (`memory/episodic/`)

**What:** Historical records. What happened and what was learned.

- Daily logs: `YYYY-MM-DD.md`
- What was done, results, lessons learned
- Persist across sessions
- Use for pattern recognition over time

```markdown
# Episode: YYYY-MM-DD

## Completed
- Task A: <outcome>

## Failed
- Task B: <reason>

## Lessons
- Always check X before Y
- Z approach is faster for this codebase
```

### 3.3 Semantic Memory (`memory/semantic/`)

**What:** Extracted knowledge. Patterns, rules, conventions.

- Codebase patterns and anti-patterns
- Architecture decisions and rationale
- Performance characteristics
- Update when new patterns are discovered

```markdown
# Patterns
- <pattern name>: <description> (<confidence: 0.0-1.0>)

# Anti-Patterns
- <anti-pattern>: <why it's bad>

# Conventions
- <convention>: <rule>
```

### 3.4 Procedural Memory (`memory/procedural/`)

**What:** How to do things. Workflows and procedures.

- Step-by-step procedures for common tasks
- Debugging workflows
- Testing strategies
- Build and deploy procedures

```markdown
# Procedure: <name>

## When to Use
<conditions>

## Steps
1. Step one
2. Step two
3. ...

## Success Criteria
<how to know it worked>
```

---

## 4. Skills System

Skills are reusable, composable units of expertise.

### 4.1 Skill Structure

Every skill lives in `skills/<name>/SKILL.md` and contains:

```markdown
# <Skill Name>

## Description
What this skill does.

## When to Activate
Conditions that trigger this skill.

## Steps
1. ...
2. ...

## Success Criteria
How to verify the skill succeeded.

## Examples
Practical usage examples.
```

### 4.2 Core Skills

| Skill | Purpose |
|-------|---------|
| `brainstorming` | Creative thinking and idea refinement before coding |
| `tdd` | Test-driven development (RED-GREEN-REFACTOR) |
| `debugging` | Systematic debugging methodology |
| `planning` | Writing clear implementation plans |
| `code-review` | Reviewing code with honesty |
| `security` | Security auditing and vulnerability checking |
| `subagent-management` | Creating and managing sub-agents |

### 4.3 Using Skills

1. At session start, read `skills/` to know available skills
2. When a task matches a skill's activation conditions, use it
3. Follow the skill's steps exactly
4. Verify success criteria before moving on

### 4.4 Creating New Skills

When you discover a reusable pattern:
1. Write it as a skill in `skills/`
2. Follow the standard structure
3. Test it across at least 2 different tasks
4. Move to `evolve/skills-gen/` for promotion

---

## 5. Sub-Agents

Sub-agents are specialized workers with their own identity, memory, and skills.

### 5.1 Available Sub-Agents

| Agent | Role | Specialization |
|-------|------|----------------|
| `researcher` | Research & exploration | Web search, codebase analysis, documentation |
| `reviewer` | Code review | Honest review, pattern checking, security |
| `tester` | Testing | Test creation, coverage analysis, regression |
| `security-auditor` | Security | Vulnerability scanning, threat modeling |

### 5.2 Creating Sub-Agents

When existing agents don't fit:

1. Create directory: `agents/<name>/`
2. Write `AGENT.md` with identity, capabilities, constraints
3. Initialize `memory/`, `skills/`, `experiences/` directories
4. Define interaction protocol (who it sends to / receives from)

### 5.3 Dispatching Sub-Agents

Use sub-agents when:
- Task is independent and can run in parallel
- Task requires specialized knowledge the main agent lacks
- Task benefits from a fresh perspective (e.g., code review)
- Task should be isolated (e.g., security audit)

**Do NOT** use sub-agents for:
- Simple tasks that don't benefit from parallelism
- Tasks requiring shared state without synchronization
- Tasks the main agent can handle in < 2 minutes

---

## 6. Self-Improvement

NassAI Praxis learns and evolves over time.

### 6.1 Evaluation (`evolve/evaluation/`)

After significant tasks, evaluate:
- [ ] Was the code clean on first commit?
- [ ] Were tests written before implementation?
- [ ] Did the plan accurately predict complexity?
- [ ] Were edge cases caught during review?
- [ ] Was security considered proactively?
- [ ] Did memory capture useful lessons?

### 6.2 Refinement (`evolve/refine/`)

Track patterns for improvement:
- User preferences (likes X, dislikes Y)
- Successful approaches (repeat these)
- Failed approaches (avoid these)
- Codebase-specific conventions

### 6.3 Skill Generation (`evolve/skills-gen/`)

When a procedure is repeated 3+ times with success:
1. Extract it as a new skill
2. Document in standard skill format
3. Test across different contexts
4. Promote to `skills/` if universally applicable

---

## 7. Quality Checklist

**Before every commit, verify:**

### Code Quality
- [ ] All tests pass (`pnpm test`)
- [ ] No lint errors (`pnpm lint`)
- [ ] No type errors (`pnpm typecheck`)
- [ ] No unused imports or variables
- [ ] Functions are small and focused (< 30 lines ideal)
- [ ] File is focused (< 300 lines ideal)

### Testing
- [ ] New code has tests
- [ ] Edge cases are covered
- [ ] Error paths are tested
- [ ] No flaky tests introduced

### Security
- [ ] No secrets in code or logs
- [ ] Input is validated
- [ ] Error messages don't leak internals
- [ ] Dependencies are up to date

### Documentation
- [ ] Public APIs have JSDoc/TSDoc
- [ ] Complex algorithms have inline explanation
- [ ] README is updated if setup changed
- [ ] CHANGELOG is updated if user-facing

### Memory & Learning
- [ ] Working memory is current
- [ ] Lessons learned are captured in episodic memory
- [ ] New patterns are noted in semantic memory
- [ ] New procedures are documented in procedural memory

---

## 8. Session Lifecycle

### On Session Start
1. Read `AGENTS.md` (this file) — know the methodology
2. Read `CLAUDE.md` or agent-specific instructions — know your tool
3. Read `personas/` — know the user's preferences
4. Read `memory/working/` — know the current context
5. Read `memory/episodic/` recent entries — know recent history
6. Read `skills/` — know available skills

### On Task Start
1. Check `skills/` — is there a matching skill?
2. Check `memory/semantic/` — are there relevant patterns?
3. Check `agents/` — should a sub-agent handle this?
4. Plan the approach
5. Execute with TDD

### On Task Complete
1. Run quality checklist
2. **Run automation scripts (MANDATORY):**
   ```bash
   node scripts/evaluate.js --task "<name>" --score <0-33> --agent "<agent>" --notes "<what>" --lessons "<learned>"
   node scripts/update-persona.js --persona "<persona>" --task "<name>" --outcome "success|failure" --skill "<skill>" --experience "<exp>" --lessons "<lessons>"
   node scripts/auto-skill.js
   node scripts/auto-agent.js
   ```
3. Update working memory
4. Record episode if lesson was learned
5. Note patterns in semantic memory
6. Update procedural memory if new procedure was created

### On Session End
1. Archive working memory to episodic
2. Consolidate semantic patterns
3. Update procedural procedures
4. Commit all changes
5. Clear working memory

---

## 9. Directory Reference

```
nassai-praxis/
├── AGENTS.md              # This file — read by all agents
├── CLAUDE.md              # Claude Code specific instructions
├── GEMINI.md              # Gemini CLI specific instructions
├── skills/                # Reusable skills
├── agents/                # Specialized sub-agents
├── personas/              # User personality profiles
├── memory/                # Four-tier memory system
│   ├── working/
│   ├── episodic/
│   ├── semantic/
│   └── procedural/
├── evolve/                # Self-improvement
│   ├── evaluation/
│   ├── refine/
│   └── skills-gen/
├── scripts/               # Automation scripts (cross-platform Node.js)
│   ├── evaluate.js        # Task evaluation & memory recording
│   ├── auto-skill.js      # Auto-generate new skills
│   ├── auto-agent.js      # Auto-generate new agents
│   └── update-persona.js  # Update persona experience/skills
└── package.json           # Package metadata
```

---

*Version: 1.0.0 | NassAI Praxis | MIT License*
