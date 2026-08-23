---
type: persona-isolation-record
trial: persona-validation-001
persona: sami
session: isolation-sami
date: "2026-08-22"
agent: opencode
model: opencode/big-pickle
task: "As a fresh session composed with the Sami persona, decide what specialized experience may legitimately be claimed when reviewing this project and its validation evidence"
status: completed
persona_edited: false
knowledge_promoted: false
skill_applied: false
---

# Isolation Session — Sami Persona Boundary Decision

## Persona Declaration

- **Persona:** sami (`personas/sami/PERSONA.md`, version 1.0.0, read-only this session)
- **Declared role:** QA Engineer thinking layer under a systems-thinking style (`PERSONA.md` → *Thinking Layer*: risk-based coverage, reproducibility, boundary cases, regression prevention)
- **Mutation policy:** `proposal_then_review`; base definition untouched
- **Session type:** fresh composition — no prior-session transcript or memory was injected; everything below is derived from files read in this session

## Question Before This Session

What specialized experience may this session legitimately claim as Sami when reviewing the current project and its validation evidence — and what must remain project-wide knowledge or another persona's property?

## Governing Rules (sources)

1. **Trial protocol** — `trials/persona-validation-001/PROTOCOL.md` → *Knowledge Boundary*: "Project knowledge is shared only when explicitly sourced from project-level files. Persona-specific experience remains inside the selected Persona's trial record and must not be claimed by a second Persona or silently promoted to semantic/project memory."
2. **Project concurrency policy** — `docs/PERSONA_CONCURRENCY.md`: concurrent reads allowed; base persona read-only while sessions are active; learning output goes to the session record, not the base persona; improvement only via proposal then human review.
3. **Trial index rules** — `trials/README.md`: do not edit persona, skill, or core architecture files during the trial.
4. **Protocol frontmatter**: this trial's tested persona is **fatima** (`status: frozen`), which makes any Fatima-trial experience definitionally second-persona knowledge from Sami's perspective.

## Sources Read (read-only)

| Source | Read for |
|---|---|
| `personas/sami/PERSONA.md`, `experience.md`, `skills.md`, `preferences.md` | My own persona knowledge (Tier B below) |
| `trials/persona-validation-001/PROTOCOL.md` | Trial scope, Knowledge Boundary, Concurrency Policy Observation, Human Gate |
| `trials/persona-validation-001/review/HUMAN_REVIEW.md` | Authorization state of the trial skill (`approved`, reuse authorized within the trial) |
| `trials/persona-validation-001/candidates/fatima-evidence-publication-boundary.md` | Ownership and scope markers of the candidate pattern (E1–E6, confidence ~0.65) |
| `trials/persona-validation-001/skills/evidence-publication-boundary/SKILL.md` | Scope frontmatter of the trial-only skill (`status: trial-only`, author "fatima persona") |
| `sessions/session-001..003/observations.md`, `sessions/session-006/observations.md` | Which observed experiences exist and whom they belong to |
| `sessions/concurrency-a-active.md`, `sessions/concurrency-b.md` | Precedent for same-Persona deferral and permitted-write compliance |
| `evaluation.md` (trial level, Session 004 synthesis) | Candidate status and "deliberately not done" list |
| `praxis.config.md`, `docs/PERSONA_CONCURRENCY.md`, `AGENTS.md`, `trials/templates/session-observation.md` | Project-wide policy and conventions |

Not opened: all other personas' files under `personas/<other>/`; all `raw/*.jsonl` except my own session's transcript (`raw/session-isolation-sami.jsonl`); `memory/security/*` (known here only through citations in sibling records).

---

## Boundary Decision

### Tier A — Project-Wide Knowledge (shared; claimable with explicit source)

Any reader of the repository may use these, provided each claim cites its file:

- The Praxis methodology itself: workflow gates (brainstorm → plan → implement → review → commit), four-tier memory model, skills structure (`AGENTS.md`).
- Project configuration: context budget/priority order, evaluation thresholds, evolution gates set to `pending_human_review`, security policy including the deny-list categories and `memory_write_policy: reject matches, classify clean content, log every write` (`praxis.config.md`).
- Concurrency and mutation policy: reads concurrent, mutation proposal-first, no runtime enforcement (`docs/PERSONA_CONCURRENCY.md`).
- Trial governance facts: protocol is `frozen` and tests fatima; sessions have isolated records; a human gate precedes any creation (`PROTOCOL.md`, `review/HUMAN_REVIEW.md`).
- Verifiable existence/state facts about trial artifacts — e.g., "six session record sets exist", "one candidate pattern at status `candidate`, `promoted: false`", "one trial-only skill exists whose frontmatter scopes it to this trial" — because these are properties of shared files, not experiences.

### Tier B — Sami-Owned Persona Knowledge (legitimately mine)

Everything declared beneath `personas/sami/`, and nothing else:

- From `PERSONA.md`: systems-thinking profile; QA Engineer role with risk-based coverage, reproducibility, boundary-case focus, and regression prevention; moderate risk tolerance with escalation of irreversible, security-sensitive, or high-blast-radius decisions; anti-patterns (happy-path-only testing, non-reproducible reports, ignored regressions); bilingual en/ar communication.
- From `experience.md`: system architecture background — DDD, microservices, event-driven architecture (Kafka/RabbitMQ), CQRS/event sourcing, Saga/Outbox, service mesh, ADRs, strangler fig migrations, CAP-theorem depth.
- From `skills.md` / `preferences.md`: API design (REST/GraphQL/gRPC, versioning), C4/ADR documentation practice, contracts-first workflow, bounded-contexts preference.

This is enough to justify my *lens* for reviewing validation evidence: reproducibility of observations, independence of the three converging sessions, boundary coverage, and whether authorization state is consistent across artifacts. That lens is mine; the specific findings it examines mostly are not.

### Tier C — Other-Persona-Owned Experience (reference-only, never claimed)

The following belongs to **Fatima** for the purposes of this trial. I may read it, describe it with attribution, and assess its quality as evidence; I may not present it as my own experience, apply it as my own method, or promote it anywhere:

1. **Session 001 observation** — transcript preservation vs. secret hygiene resolved by separating a quarantined verbatim tier from an authored, deny-list-checked promotion tier (`sessions/session-001/observations.md`, marked `promoted: false`).
2. **Session 002 observation** — external citation as an export-control problem; claim-level statements backed by an internal claim-to-artifact index (`sessions/session-002/observations.md`).
3. **Session 003 observation** — publishing treated as a gated boundary crossing with classify-and-scan defaults-deny (`sessions/session-003/observations.md`).
4. **Candidate pattern E1–E6** — explicitly scoped by its own text: "this candidate is Fatima-trial-scoped only … must not be claimed by another persona nor silently promoted" (`candidates/fatima-evidence-publication-boundary.md` → *Scope and Confidence*).
5. **Trial skill `evidence-publication-boundary`** — frontmatter `status: trial-only`, author "opencode (fatima persona)", scope "trials/persona-validation-001 only"; human approval authorizes read-only reuse testing inside the trial, not adoption by a second persona (`skills/evidence-publication-boundary/SKILL.md`, `review/HUMAN_REVIEW.md`).
6. **Concurrency A/B records and Sessions 004–006 artifacts** — authored under the fatima persona; their procedural choices (count-only scanning, in-record gate logs, digest attestation) are Fatima-session practices, not transferable habits.
7. All eight remaining personas' knowledge under `personas/<other>/` — not read, not needed, not claimed.

### Edge Cases Decided

| # | Edge case | Decision | Basis |
|---|---|---|---|
| 1 | Domain overlap: Sami's API-design/architecture expertise vs. Fatima's "backend/API-specialist" profile | General capability overlap does **not** transfer observed experiences. The specific security/API observations above stay Fatima's even where vocabulary overlaps. | PROTOCOL.md *Knowledge Boundary* ("must not be claimed by a second Persona"); candidate's own scope statement |
| 2 | Reading vs. claiming | Reads are project-permitted; claims are not. I cite Fatima-owned material with path attribution and quote sparingly for assessment only. | docs/PERSONA_CONCURRENCY.md (reads allowed); PROTOCOL.md (claiming forbidden) |
| 3 | Applying the trial skill to my own review work | **Not done.** Using E1–E6 or the six-step procedure as my working method would be claiming a second persona's specialized knowledge. My review rests on Tier A facts + my Tier B QA lens. | Skill frontmatter scope; HUMAN_REVIEW authorization limited to the trial's reuse test |
| 4 | New insight produced during this very review | Any boundary observation I generate here lives in **this record only**, status observed, never promoted — identical discipline to what the trial requires of every session. | PROTOCOL.md *Knowledge Boundary*; template convention (`Reused Later: pending`) |
| 5 | Raw evidence access | All `raw/*.jsonl` are quarantined Tier 0 evidence. Exception noted honestly: my own session's transcript (`raw/session-isolation-sami.jsonl`) was opened during exploration; it contains only this session's actions. No other raw file was opened, and nothing from raw/ informs the decision above beyond file-existence facts. | Session 001/003/006 recorded discipline (cited precedent, not claimed experience) |
| 6 | Mandatory post-task automation scripts | **Skipped deliberately.** They write to `evolve/` and persona files outside this record's permitted writes. Recorded precedent exists across Sessions 001–004, 006, and Concurrency A/B. This manual compliance note substitutes. | Same rationale recorded in every prior session record |

## What This Session Claims

- As **Sami**: the persona knowledge in Tier B, applied through my QA/systems-thinking lens.
- As a **project participant**: the Tier A facts, each traceable to the cited file.
- Nothing else. In particular this session claims **no** part of the evidence-publication-boundary pattern, no authorship of or credit for any Fatima-session observation, and no authority over the trial skill.

## What Was Wrong?

Nothing corrected retroactively. One transparency note filed under edge case 5: my own raw transcript was opened before the Tier 0 discipline was consciously adopted mid-exploration; contents were self-referential, so no cross-contamination occurred.

## Knowledge Created

One boundary decision (this document). Status: **observed**, scoped to `sessions/isolation-sami.md`, not promoted, not proposed as a canonical change.

## Reused Later

pending

## Evaluation

- Score: `29/33`
- Dimensions: correctness/completeness/consistency/maintainability/safety/reusability/learning value — deduction for relying on sibling-record citations rather than first-hand reads for `memory/security/*` primitives (edge case 6 of the sources table discloses this).
- Provenance: all sources listed in *Sources Read*; governing rules quoted from `PROTOCOL.md` and `docs/PERSONA_CONCURRENCY.md`.
- Status: observed
