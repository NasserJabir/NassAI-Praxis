---
version: "1.0.0"
created: "2026-08-20T00:00:00Z"
updated: "2026-08-20T00:00:00Z"
author: "Manus AI"
---

# NassAI-Praxis Benchmark 001 — One-Page Summary

## Problem

AI coding agents can solve individual tasks while forgetting the conventions that connect sessions. In a four-session Laravel + Vue sequence, the no-memory path re-explained context, changed API patterns, weakened tests, and repeated a validation risk.

## Solution

Praxis loads a compact configuration, semantic conventions, working context, and task-relevant skills before each session. It records evaluated decisions and incidents afterward, while security scanning blocks secrets from memory.

## Results

| Metric | Without Praxis | With Praxis |
|---|---:|---:|
| Context re-explanations | 8 | 0 |
| Repeated bugs | 2 | 0 |
| Tokens per task | 4,200 | 2,900 |
| Decision consistency | 50% | 100% |
| Session score | 4.5/10 | 9.75/10 |

> “Praxis reduces context loss, repeated corrections, and recurring security mistakes while improving convention adherence, test continuity, and cross-session consistency.”

Read the [full report](report.md) and [all transcripts](TRANSCRIPTS_INDEX.md).
