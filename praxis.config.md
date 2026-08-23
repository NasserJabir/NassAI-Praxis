---
version: "1.0.0"
project_name: "NassAI-Praxis"
language: "en"
created: "2026-08-20T00:00:00Z"
updated: "2026-08-20T00:00:00Z"
author: "Manus AI"
---

# Praxis Configuration

NassAI-Praxis is a markdown-only, agent-agnostic project operating system. The agent is the runtime; this repository is the curriculum and source of truth.

## Context Budget

- **max_tokens**: 8000
- **priority_order**:
  1. semantic_memory
  2. working_memory
  3. relevant_skills
  4. active_persona
- **archive_threshold**: 5000
- **summary_trigger**: 3000

## Memory Layers

- **working**: enabled
- **semantic**: enabled
- **episodic**: enabled (on-demand)
- **procedural**: enabled (on-demand)

## Evaluation

- **enabled**: true
- **user_dimensions**: 7
- **internal_checklist**: 33
- **auto_promote**: false
- **threshold_score**: 30

## Evolution

- **enabled**: true
- **repetition_threshold**: 3
- **skill_generation**: pending_human_review
- **agent_generation**: pending_human_review

## Security

- **secret_detection**: enabled
- **deny_list**:
  - api_key
  - password
  - token
  - secret
  - private_key
  - credential
- **sensitive_classification**: enabled
- **encryption_at_rest**: false
- **memory_write_policy**: reject matches, classify clean content, log every write

## Personas

- **default**: hassan
- **allow_custom**: true

## Agents

- **default_orchestrator**: orchestrator
- **max_concurrent**: 3


## memory_classification

- **auto_classify**: true
- **default_classification**: "internal"
- **private_dir**: "memory/private/"
- **retention_policy**: archive after 90 days; review sensitive memory after 30 days; delete after approved expiry

## token_budget

- **max_tokens**: 8000
- **priority_order**: [semantic_memory, working_memory, relevant_skills, active_persona, episodic_memory, procedural_memory]
- **archive_threshold**: 5000
- **summary_trigger**: 3000
- **emergency_mode**: true
- **emergency_behavior**: when approaching the limit, load only semantic memory and working memory

### context_window

- **claude-code**: 200000
- **cursor**: 128000
- **copilot**: 8000
- **gemini-cli**: 1000000

## Graph Engineering

- **enabled**: true
- **entity_vocabulary**: 13 first-class entities in `graph/entities.md`
- **relationship_vocabulary**: controlled verbs in `graph/relationships.md`
- **metadata_optional**: true
- **integrity_validation**: read_only_non_destructive

## Loop Engineering

- **execution_loop**: enabled
- **learning_loop**: enabled
- **evolution_loop**: enabled
- **human_review_required**: true
- **repetition_threshold**: 3
- **minimum_score**: 30

## Memory Policy

- **working**: true
- **episodic**: true
- **semantic**: true
- **procedural**: true

## Security Policy

- **prevent_secret_memory**: true
- **memory_write_gate**: `memory/security/scan-procedure.md`

## Persona Policy

- **read_concurrently**: true
- **base_definition**: read_only_during_sessions
- **shared_updates**: proposal_then_human_review
- **runtime_enforcement**: none
- **session_records**: `sessions/`

## Architecture Boundary

- **source_of_truth**: Markdown
- **runtime_execution**: outside_praxis_core
- **graph_layer**: declarative_documentation_only
- **loop_layer**: agent_methodology_only
- **mandatory_cli**: false
- **mandatory_database**: false
- **mandatory_external_service**: false
- **architecture_freeze**: true
