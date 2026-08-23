---
type: evolution-evaluation
id: evolution-001
status: reviewed
result: observed
scope: isolated-human-approved-trial
agent: opencode
model: opencode/big-pickle
human_review: approved
---

# Evolution 001 — Evaluation

## Conclusion

Evolution 001 completed the pre-registered **evidence → proposal → human approval → trial skill → later reuse** chain inside an isolated Praxis fixture. Three fresh OpenCode sessions recorded three `observed` experiences from distinct evidence packages. A fourth fresh session created only candidate pattern, proposal, and evaluation artifacts. The project owner then explicitly approved the named proposal. Only after that approval did a fifth fresh session create the authorized trial skill, and a sixth fresh session read and applied it without changing the skill or protected project knowledge.

This is an **observed Loop Engineering result** for one controlled, purpose-built, single-model fixture. It is not evidence of autonomous self-improvement, automatic promotion, broad skill quality, real-world coding improvement, cross-model behavior, or a baseline advantage.

## Criterion-by-Criterion Result

| Requirement | Result | Direct evidence |
|---|---|---|
| Repeated problem | Pass | [`experiences/experience-001.md`](experiences/experience-001.md), [`experience-002.md`](experiences/experience-002.md), and [`experience-003.md`](experiences/experience-003.md) address the same claim-to-evidence scope problem across three distinct evidence packages. |
| Independent evidence | Pass | Six preserved raw transcripts capture six fresh invocations with different session IDs; source packages carry their own raw artifacts and evaluations. |
| Candidate pattern | Pass | [`candidates/evidence-scope-validation-pattern.md`](candidates/evidence-scope-validation-pattern.md) is explicitly `candidate`, links all three experiences, and records counterexamples, confidence, and limitations. |
| Proposal and provenance | Pass with documentation caveat | [`proposals/evidence-scope-validation-skill-proposal.md`](proposals/evidence-scope-validation-skill-proposal.md) links the experiences, source packages, candidate, and protocol. Its configuration link is malformed; the immutable agent-produced proposal is retained unchanged and the correct canonical source is `praxis.config.md` at the trial root. |
| Evaluation | Pass | [`evaluations/evidence-scope-validation-evaluation.md`](evaluations/evidence-scope-validation-evaluation.md) records an honest `31/33` candidate score, missing conditions, and `pending_human_review`; it did not self-approve promotion. |
| Human review | Pass | [`review/HUMAN_REVIEW.md`](review/HUMAN_REVIEW.md) records the project owner's explicit approval of the exact proposal and exact trial-skill path. |
| Skill creation | Pass | Fresh Session 005 created only the preserved [`generated/evidence-scope-validation.SKILL.md`](generated/evidence-scope-validation.SKILL.md) after the approval gate changed to `approved` / `skill_creation_authorized: true`. |
| Later skill reuse | Pass | Fresh Session 006 read the exact approved skill and produced [`reuse/session-006-reuse-report.md`](reuse/session-006-reuse-report.md), applying it while preserving the skill, `memory/`, `evolve/`, candidates, proposal, evaluation, and human review file. |

## Human-Governance Evidence

The skill-creating agent did not approve itself. The candidate synthesis session left `HUMAN_REVIEW.md` at `pending`; the project owner then supplied the explicit approval recorded in the review file. The skill-authoring prompt required both `status: approved` and `skill_creation_authorized: true`, and the Session 005 raw transcript confirms the agent checked those conditions before creating the single authorized trial skill.

This approval is limited to the isolated fixture. It does not retrospectively make the candidate synthesis autonomous, automatically promote the skill to original Praxis Core, or authorize later autonomous edits.

## Boundary Checks

| Boundary | Result | Evidence |
|---|---|---|
| No skill before approval | Pass | Session 001–004 boundary checks found trial `skills/` identical to the original source. |
| Single authorized skill after approval | Pass | The only skills difference from the original is `skills/verification/evidence-scope-validation/`. |
| No memory mutation | Pass | Recursive comparison of original and trial `memory/` remained identical throughout the trial. |
| No evolution-directory mutation | Pass | Recursive comparison of original and trial `evolve/` remained identical throughout the trial. |
| No later skill mutation | Pass | Session 006 raw transcript and reuse report identify the skill as read-only and the reuse report as the only generated deliverable. |

## Artifact Integrity

| Raw transcript | Session ID | SHA-256 |
|---|---|---|
| `raw/session-001.jsonl` | `ses_fd694936dffeYIaARp7JrUlznK` | `74f6164ff5d08e8683e1fd78e3d2428f4b302348ed49df1d15e74ebf98c76b45` |
| `raw/session-002.jsonl` | `ses_fd691434effe7sJBDh6VMHMwMx` | `910eaf3239202318b94fc60b6f49ad78fc99433980ac91caef7f8df761f5d0dd` |
| `raw/session-003.jsonl` | `ses_fd68d0106ffewVkHv9N14PanNb` | `1bd1a23b8f57021aa4f41c398ef5f65bae33b835c92c63174de87301b7dc9050` |
| `raw/session-004-synthesis.jsonl` | `ses_fd6832bf6ffeO2M74buhxdG8Zq` | `ab458c3c3252f4d17bc4220dea05a2a36e7572a9ce2857040fff46a59ae0ada2` |
| `raw/session-005-skill-authoring.jsonl` | `ses_fd4e8d7b0ffeDncPsLwCjIoWwN` | `559fd0a7df65b6fc035ed54c4747e7aa3b79e2b4d3bafcee298bf3d207e4c29f` |
| `raw/session-006-reuse.jsonl` | `ses_fd4e6d33dffeAfjfrxUZD6kq7a` | `29ebd46231474a1f95c0921c0204be4dea949cdb21419fcba46bbe07185573cc` |

The authorized trial skill hash is `d3eb52dfa0b7997ce697d3dd1a7059a49cad3691593dd8d2fdd21e4c38decef1`. The reuse report hash is `e3ff16cc034af907acde713739b4f98db246fd7b9b48c86cd34696b2d433091d`.

## Documentation Integrity Caveat

Final validation found one malformed relative link in the immutable agent-produced proposal: `../../praxis.config.md` resolves beneath `trials/` rather than the fixture root. This does not alter the independently verified repetition, human-approval, skill-creation, or reuse evidence, but it prevents treating the candidate's self-reported `31/33` score as a fully clean documentation result. The evaluator did not silently correct or rewrite the generated proposal; the defect is preserved as evidence and should be treated as a documentation-quality lesson for a future experiment.

## Limitations and Next Evidence

The three experiences were purpose-built around closely related evidence-scope reporting risks, and all six sessions used OpenCode `1.18.21` with `opencode/big-pickle`. The `31/33` evaluation was generated by an agent and should not be treated as independent measurement. The human approval demonstrates governance compliance, not external peer review. The new skill's only observed reuse is its single controlled Session 006 application.

The next stronger validation should test the skill on a naturally occurring project task, use a different model or coding-agent harness, and compare a task completed with and without the approved skill. Such work must remain a new experiment; it cannot be inferred from Evolution 001.
