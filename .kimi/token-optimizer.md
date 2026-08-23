---
version: "1.0.0"
created: "2026-08-20T00:00:00Z"
updated: "2026-08-20T00:00:00Z"
author: "Manus AI"
agent: "kimi"
---

# Kimi Token Optimizer

## Context Allocation

- **Host context:** 200K+
- **Praxis budget:** 10K
- **Always load:** `praxis.config.md`, semantic conventions or summary, and working memory.
- **Load on demand:** one relevant skill, active persona, episodic events, and procedural workflows.

## Rules

1. Load `.summary.md` files before full originals.
2. Estimate loaded tokens using each skill’s `estimated_tokens` metadata and record the estimate in `memory/token-usage-log.md`.
3. Trigger summarization at 3,000 tokens and archive at 5,000 tokens as specified in `praxis.config.md`.
4. Enter emergency mode when approaching the Praxis budget; load only semantic and working memory plus the single most relevant skill.
5. Never trade away the security scan or classification metadata to save tokens.
