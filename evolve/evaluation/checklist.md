---
version: "1.0.0"
created: "2026-08-20T00:00:00Z"
updated: "2026-08-20T00:00:00Z"
author: "Manus AI"
classification: "internal"
checklist_points: "33"
---

# Internal Evaluation Checklist

Run this 33-point checklist after each significant task.

## Code Quality — 8 points

- [ ] The change is readable on first inspection.
- [ ] The implementation is appropriately simple.
- [ ] Existing conventions are followed.
- [ ] No dead or unrelated content was introduced.
- [ ] Names communicate intent.
- [ ] Boundaries and responsibilities are clear.
- [ ] Error paths are considered.
- [ ] The diff is narrowly scoped.

## Testing — 5 points

- [ ] Expected behavior is defined before verification.
- [ ] Relevant tests or checks were run.
- [ ] Edge cases are covered.
- [ ] Failure paths are considered.
- [ ] Results are reported honestly.

## Security — 5 points

- [ ] No secrets were added.
- [ ] External or untrusted input is treated safely.
- [ ] Access and trust boundaries are considered.
- [ ] Error output does not expose sensitive information.
- [ ] Memory writes passed the deny-list and classification rules.

## Documentation — 4 points

- [ ] User-facing behavior is documented.
- [ ] Important decisions are recorded.
- [ ] Setup or workflow instructions remain accurate.
- [ ] The changelog is updated when appropriate.

## Performance — 3 points

- [ ] The change respects its resource or context budget.
- [ ] No unnecessary work or loading was introduced.
- [ ] A measured bottleneck is addressed when performance is in scope.

## Maintainability — 4 points

- [ ] The structure is easy for a human to extend.
- [ ] Repetition is intentional or abstracted appropriately.
- [ ] Future failure modes are visible.
- [ ] Handoffs contain enough context to continue safely.

## Consistency — 4 points

- [ ] Paths and names match the canonical schema.
- [ ] Frontmatter fields are valid and complete.
- [ ] Cross-references point to canonical files.
- [ ] The result is consistent with the technical specification.

**Score:** ____ / 33
**Evidence and follow-up:**
