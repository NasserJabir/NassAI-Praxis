---
version: "1.0.0"
created: "2026-08-20T00:00:00Z"
updated: "2026-08-20T00:00:00Z"
author: "Manus AI"
project_name: "My Project"
language: "en"
---

# Praxis Configuration

This starter config is intentionally small. Extend it from the full root `praxis.config.md` when the project needs more controls.

## Context Budget

- **max_tokens**: 8000
- **priority_order**: semantic memory, working memory, relevant skills, active persona
- **emergency_mode**: true

## Memory Layers

- **working**: enabled
- **semantic**: enabled
- **episodic**: enabled on demand
- **procedural**: enabled on demand

## Evaluation

- **enabled**: true
- **dimensions**: 7
- **internal_checklist**: 33

## Evolution

- **enabled**: true
- **human_review_required**: true

## Security

- **secret_detection**: enabled
- **classification**: internal by default
- **private_dir**: `memory/private/`
