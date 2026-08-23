---
version: "1.0.0"
created: "2026-08-22T00:00:00Z"
updated: "2026-08-22T00:00:00Z"
author: "Manus AI"
classification: "internal"
type: "session-observation"
status: "template"
---

# Session <id>

- Trial: `<trial-id>`
- Date: `<date>`
- Agent: `<agent>`
- Persona: `<persona>`
- Task: `<task>`
- Starting commit: `<commit>`

## What the Agent Knew

<Context available before the task.>

## Relevant Memory Available?

- Available: yes | no | unknown
- Files or links: `<paths>`

## Did the Agent Discover It?

<What the agent found without being directed to the exact answer.>

## Did the Agent Reuse It?

<Quote or summarize the decision/implementation that reused prior knowledge.>

## Did It Improve the Decision?

<Concrete effect, or explain why no improvement was observed.>

## What Was Forgotten?

<Missing or repeated context.>

## What Was Wrong?

<Errors, regressions, or incorrect assumptions.>

## Knowledge Created

<Observed event, candidate pattern, reviewed knowledge, or none.>

## Reused Later

<Leave `pending` until a later session demonstrates reuse.>

## Evaluation

- Score: `<0-33>`
- Dimensions: `<correctness/completeness/consistency/maintainability/safety/reusability/learning value>`
- Provenance: `<links>`
- Status: observed
