---
version: "1.0.0"
created: "2026-08-20T00:00:00Z"
updated: "2026-08-20T00:00:00Z"
author: "Nasser Jabir"
classification: "internal"
---

# Sample `praxis doctor` Output

```markdown
# Praxis Doctor Report

- Generated: 2026-08-20T16:30:00Z
- Root: /workspace/project
- Result: CRITICAL

## Critical
| Check | File | Finding | Recommended fix |
|---|---|---|---|
| Configuration | `praxis.config.md` | Missing required `token_budget.max_tokens` | Restore the token budget section. |
| Secret scan | `memory/semantic/conventions.md` | Pattern `OpenAI API key` matched | Reject the memory write, rotate the value, and replace it with an environment-variable reference. |
| Consistency | `memory/semantic/conventions.md` | Active rules contradict `skills/core/planning/SKILL.md` | Mark the older rule `[SUPERSEDED]` and resolve it with human review. |

## Warnings
| Check | File | Finding | Recommended fix |
|---|---|---|---|
| Freshness | `memory/episodic/events.md` | No reference for 45 days | Review and archive if stale. |
| Size | `skills/technical/api-design/SKILL.md` | Near the 500-line quality limit | Remove repetition or split the skill. |

## Info
| Check | File | Finding | Recommended fix |
|---|---|---|---|
| Usage | `personas/yasmin/PERSONA.md` | No recorded use in the review window | Keep, revise, or archive based on project needs. |

## Summary
- Critical: 3
- Warnings: 2
- Info: 1
```

The sample demonstrates actionable paths and fixes without printing any secret value.
