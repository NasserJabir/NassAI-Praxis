# Benchmark 001 Metrics

| Metric | Scenario A (No Praxis) | Scenario B (With Praxis) | Improvement |
|---|---:|---:|---:|
| Context Retention (re-explanations needed) | 8 | 0 | 100.0% fewer |
| Decision Consistency (pattern adherence %) | 50% | 100% | +100.0% relative |
| Error Recurrence (same bugs repeated) | 2 | 0 | 100.0% fewer |
| Task Completion Rate (no human intervention %) | 75% | 100% | +33.3% |
| Instruction Adherence (convention compliance %) | 52% | 100% | +92.3% |
| Token Efficiency (total tokens / task) | 4,200 | 2,900 | 31.0% fewer |
| Session Consistency Score (avg 1-10) | 4.5 | 9.75 | +5.25 points |

## Interpretation

The benchmark estimates are based on the controlled transcripts and code snapshots in this directory. “Improvement” is calculated as reduction for counts and token use, relative improvement for percentages, and absolute delta for the 1–10 score.

## Time Saved

The With-Praxis path avoided approximately eight repeated explanations and four rounds of convention reconstruction. At an estimated 8–12 minutes per explanation or correction, this represents roughly 64–96 minutes of developer time across the four sessions.

## Quality Improvement

Scenario B preserved the JWT contract, repository boundaries, role middleware, Form Request validation, feature-test expectations, and frontend route guards. The Session 3 validation bypass became a named regression concern and was checked before Categories were added.

## Cognitive Load

Scenario A required approximately eight user corrections or re-explanations. Scenario B required one confirmation of the benchmark task sequence and no correction to established conventions.
