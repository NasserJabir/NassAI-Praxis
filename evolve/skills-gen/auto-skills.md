# Auto-Generated Skills

Track procedures that should become skills. When a procedure is repeated 3+ times with success (score >= 30), promote it to a full skill.

---

## Pending Skills

Skills that are being validated before promotion:

### Skill: [Name]
- **Status:** draft / testing / confirmed
- **Discovered:** YYYY-MM-DD
- **Trigger:** When this happens
- **Validation count:** 0 / 3 (need 3 successful uses)
- **Average score:** 0.0

**Draft Steps:**
1. Step one
2. Step two
3. Step three

**Success Criteria:**
- Criteria 1
- Criteria 2

---

## Promotion Criteria

A pending skill is promoted to `skills/` when:

| Criterion | Requirement |
|-----------|-------------|
| Repetition | Used 3+ times successfully |
| Score | Average score >= 30/33 |
| Generality | Works across different contexts |
| Documentation | Steps are clear and complete |
| Verification | Can be followed by another agent |

## Promotion Process

```
┌─────────────────────────────────────────────────────────────┐
│                 Skill Promotion Flow                        │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Procedure repeated 3+ times                                │
│         │                                                    │
│         ▼                                                    │
│  ┌──────────────┐                                            │
│  │  Validation  │  Check average score >= 30                 │
│  └──────┬───────┘                                            │
│         │                                                    │
│    ┌────┴────┐                                               │
│    ▼         ▼                                               │
│  Pass       Fail                                             │
│    │         │                                               │
│    ▼         ▼                                               │
│  ┌───────┐  ┌───────┐                                        │
│  │Draft  │  │Keep   │                                        │
│  │Skill  │  │in     │                                        │
│  │in     │  │pending│                                        │
│  │skills/│  └───────┘                                        │
│  └───┬───┘                                                   │
│      │                                                       │
│      ▼                                                       │
│  ┌──────────────┐                                            │
│  │  Finalize    │  Add SKILL.md with full structure          │
│  └──────┬───────┘                                            │
│         │                                                    │
│         ▼                                                    │
│  ┌──────────────┐                                            │
│  │   Test       │  Use in 2+ real tasks                      │
│  └──────┬───────┘                                            │
│         │                                                    │
│         ▼                                                    │
│  ┌──────────────┐                                            │
│  │   Promote    │  Move to skills/<name>/SKILL.md            │
│  └──────────────┘                                            │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## Skill Template

When promoting, create `skills/<name>/SKILL.md`:

```markdown
---
name: <skill-name>
description: <what this skill does and when to use it>
---

# <Skill Name>

## Description
What this skill does in 2-3 sentences.

## When to Activate
- Condition 1
- Condition 2
- Condition 3

## Process
1. Step one
2. Step two
3. Step three

## Quality Criteria
- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3

## Examples
### Example 1: [Scenario]
Input: ...
Output: ...

### Example 2: [Scenario]
Input: ...
Output: ...

## Anti-Patterns
- Don't do X because Y
- Avoid Z when W

## References
- Related skill 1
- Related skill 2
```

---

## Rejected Skills

Skills that were evaluated but not promoted:

### Skill: [Name]
- **Rejected:** YYYY-MM-DD
- **Reason:** Too specific / Low repetition / Low score
- **Alternative:** Use existing skill X instead
