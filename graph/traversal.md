---
version: "1.0.0"
created: "2026-08-20T00:00:00Z"
updated: "2026-08-20T00:00:00Z"
author: "Manus AI"
classification: "internal"
type: "graph-traversal"
---

# Graph Traversal Patterns

Traversal is documentation-driven. An agent follows links from a starting entity, loads only the relevant targets, and records the path when the result changes future work.

## Problem → Solution

```text
Error
→ Solution
→ Procedure
→ Skill
```

Use when debugging or fixing a regression. Start with the error event, follow its solution, then load the procedure and skill that prevent recurrence.

## Task → Knowledge

```text
Task
→ Agent
→ Skill
→ Memory
→ Related Decision
```

Use before execution. Confirm the assigned role, load the task skill, read relevant memory, and check decisions that constrain implementation.

## Learning

```text
Experience
→ Pattern
→ Skill
→ Future Task
```

Use after evaluation. Promote only validated, reusable patterns; one isolated event remains episodic.

## Architecture

```text
Decision
→ Project
→ Architecture
→ Related Tasks
```

Use when a decision changes boundaries, interfaces, data ownership, or scalability expectations.

## Traversal Rules

1. Start from the task and follow only relationships relevant to the current goal.
2. Prefer canonical files over duplicate summaries; use summaries first when the token budget requires it.
3. Stop at private memory boundaries unless the task is authorized and the host can safely load it.
4. Record broken or surprising paths as validation findings, never as silent edits.
5. Avoid cycles unless the traversal explicitly needs historical context; a cycle must have a stopping condition.
