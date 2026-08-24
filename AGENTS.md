# NassAI Praxis — Development Methodology

> From Greek: πρᾶξις (praxis) = practice, action, the application of theory.

NassAI Praxis is a Markdown-first methodology layer for project knowledge, custom Personas, specialized Agent definitions, reusable Skills, and evidence-based, human-reviewed evolution.

Host integrations may load this file as project guidance. Actual context access and use remain dependent on the host coding agent and the task; this document defines repository methodology, not a runtime guarantee.

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

## 3. Project Memory Structure

NassAI Praxis defines a four-tier **project memory** model. Persona profiles may reference relevant project knowledge, but they do not own or operate this memory structure.

### 3.1 Working Memory (`memory/working/`)

**What:** Current session context. What you're doing right now.

- Active task, project state, recent decisions
- Max 4,000 tokens equivalent
- Intended to be archived or cleared at session end under the documented workflow
- Update when relevant, safe, and permitted by the host project

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

1. When the host and task make it relevant, consult the available Skills.
2. When a task matches a Skill's activation conditions, use its documented method.
3. Apply the relevant steps in the host project context.
4. Verify the applicable success criteria before moving on.

### 4.4 Proposing New Skills

When observed work suggests a reusable pattern:
1. Record the supporting experience and evaluation evidence.
2. Create a candidate proposal with provenance and clear generalization boundaries.
3. Validate the candidate across relevant tasks when authorized.
4. Obtain explicit human approval before a maintainer creates or changes a canonical Skill.

A Persona may use or be related to a Skill proposal, but it does not automatically create, own, or promote canonical Skills.

---

## 5. Sub-Agents

Specialized Agent definitions describe roles a capable host agent may use for focused work. They do not create autonomous Praxis workers, dedicated runtime memory, or separate canonical Skill ownership.

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
3. Document relevant project-memory references, applicable Skills, and evidence/provenance boundaries
4. Define a handoff protocol when host-agent coordination is appropriate

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

## 6. Evidence-Governed Evolution

NassAI Praxis documents a human-governed evolution method. It does not provide autonomous Persona learning or self-modification.

### 6.1 Evaluation (`evolve/evaluation/`)

When the host project records evidence after a significant task, evaluate:
- [ ] Was the code clean on first commit?
- [ ] Were tests written before implementation?
- [ ] Did the plan accurately predict complexity?
- [ ] Were edge cases caught during review?
- [ ] Was security considered proactively?
- [ ] Did memory capture useful lessons?

### 6.2 Refinement (`evolve/refine/`)

Record candidate patterns for human-reviewed improvement:
- User preferences (likes X, dislikes Y)
- Successful approaches (repeat these)
- Failed approaches (avoid these)
- Codebase-specific conventions

### 6.3 Skill Proposals (`evolve/skills-gen/`)

When a procedure is repeated with successful, evaluated evidence:
1. Record it as a candidate procedure and Skill proposal.
2. Link the supporting experiences, evaluations, and generalization rationale.
3. Test it across relevant contexts when authorized.
4. Promote it to `skills/` only after explicit human approval.

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

### Project Memory & Evidence
- [ ] Working memory is current
- [ ] Lessons learned are captured in episodic memory
- [ ] New patterns are noted in semantic memory
- [ ] New procedures are documented in procedural memory

---

## 8. Suggested Session Context Workflow

The following is repository methodology for a host agent that can access these files. It does not mean every host automatically loads every file or that a Persona has independent runtime state.

### On Session Start
1. Read the host-recognized project guidance needed for the task.
2. Consult relevant agent-specific instructions where the host supports them.
3. Select a Persona only when its reasoning profile is materially relevant.
4. Read the relevant project Memory and recent records within the task's context budget.
5. Consult applicable Skills and procedures.

### On Task Start
1. Check relevant `skills/` — is there a matching Skill?
2. Check relevant `memory/semantic/` — are there approved patterns or decisions?
3. Check `agents/` — should a specialized Agent role handle or review the work?
4. Plan the approach.
5. Execute with TDD where applicable.

### On Task Complete
1. Run quality checklist
2. **Optionally use local automation helpers:**
   ```bash
   # Optional only; the Markdown workflow remains canonical.
   # Use any local helper only if the host project already permits it.
   ```
3. Update relevant project memory when safe, useful, and permitted by the host project
4. Record an episode when the session produced useful evidence
5. Note candidate patterns in semantic memory with the appropriate status and provenance
6. Propose procedural guidance when a new reusable procedure is evidenced; do not promote it automatically

### On Session End
1. Archive or clear working context according to the host project’s documented workflow
2. Consolidate only reviewed and appropriately classified project knowledge
3. Record candidate procedural changes through the evidence and human-review path
4. Commit only when the host project’s review and version-control workflow permits it

---

## 9. Directory Reference

```
nassai-praxis/
├── AGENTS.md              # This file — read by all agents
├── CLAUDE.md              # Claude Code specific instructions
├── GEMINI.md              # Gemini CLI specific instructions
├── skills/                # Reusable skills
├── agents/                # Specialized sub-agents
├── personas/              # Versioned reasoning profiles
├── memory/                # Four-tier memory system
│   ├── working/
│   ├── episodic/
│   ├── semantic/
│   └── procedural/
├── evolve/                # Evidence-based, human-reviewed evolution
│   ├── evaluation/
│   ├── refine/
│   └── skills-gen/
├── scripts/               # Optional helpers; not required by Praxis Core
└── package.json           # Optional host-project metadata
```

---

*Version: 1.0.0 | NassAI Praxis | MIT License*
