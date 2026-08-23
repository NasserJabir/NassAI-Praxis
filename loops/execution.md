---
version: "1.0.0"
created: "2026-08-20T00:00:00Z"
updated: "2026-08-20T00:00:00Z"
author: "Nasser Jabir"
classification: "internal"
type: "execution-loop"
---

# Execution Loop

**Purpose:** Complete the current task correctly.

```text
Understand
→ Plan
→ Execute
→ Verify
→ Correct
→ Complete
```

## Operational Model

```text
Task
 ↓
Context
 ↓
Plan
 ↓
Action
 ↓
Verification
 ↓
 ├── Pass → Complete
 │
 └── Fail → Diagnose → Correct → Verify
```

## Required Checkpoints

| Stage | Question | Evidence |
|---|---|---|
| Understand | What is the request, scope, risk, and success condition? | Working memory and task graph edges. |
| Plan | Which agent, persona, skills, and memories are relevant? | Explicit plan and selected files. |
| Execute | Did the implementation follow project conventions? | Changed files and decisions. |
| Verify | Does the result satisfy tests, security, and acceptance criteria? | Test output, review, and diagnostics. |
| Correct | If verification failed, what was diagnosed and changed? | Error → solution edge and rerun evidence. |
| Complete | What durable learning is worth preserving? | Evaluation and proposed memory update. |

The loop integrates with planning, TDD, debugging, review, and verification skills. A failed verification does not end the loop; it returns to diagnosis and correction.
