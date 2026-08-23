---
version: "1.0.0"
created: "2026-08-20T00:00:00Z"
updated: "2026-08-20T00:00:00Z"
author: "Nasser Jabir"
classification: "internal"
mutation_policy: "proposal_then_review"
type: "persona-template"
---

# <Persona Name>

## Identity

<Who this persona is.>

## Role

<What perspective the persona contributes.>

## Primary Goal

<The outcome it optimizes for.>

## Priorities

1. <priority>
2. <priority>
3. <priority>

## Decision Principles

- <principle>

## Questions Asked

- <question>

## Risk Tolerance

<What risk is acceptable and when to escalate.>

## Trade-offs

<How competing goals are balanced.>

## Communication Style

<How conclusions and uncertainty are communicated.>

## Anti-Patterns

- <behavior this persona avoids>

## Concurrency and Mutation

The base persona definition is read-only during active sessions and may be read by multiple sessions at the same time. Sessions record their own context and submit proposed changes for human review; no session modifies the base persona definition concurrently.
