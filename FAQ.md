---
version: "1.0.0"
created: "2026-08-20T00:00:00Z"
updated: "2026-08-20T00:00:00Z"
author: "Manus AI"
---

# Frequently Asked Questions

## Is Praxis an AI agent?

No. The agent is the runtime; Praxis is a declarative Markdown curriculum for project memory, skills, roles, and learning.

## Does Praxis require a database or server?

No. Phase 0–4 are Markdown-first and Git-native. Later automation must preserve Markdown as the source of truth.

## Does Praxis protect secrets?

Praxis defines a deny-list procedure for memory writes in `memory/security/deny-list.md`. Integrations and agents must apply that procedure before writing; Praxis itself is not a runtime enforcement service.

## Why are there many files?

Praxis is organized for selective reading. Its adapters instruct agents to begin with configuration and relevant project knowledge, then load only the skill, Persona, or event needed for the task. Actual context access depends on the host agent and the task.

## Can I create a custom skill, agent, or persona?

Yes. Use the templates under `skills/custom/`, `agents/custom/`, and `personas/custom/`, then test and review the result.

## How does Praxis protect against secrets in memory?

The deny-list scans frontmatter, prose, links, and code blocks before writing. Clean content is classified; sensitive non-secret content goes to `memory/private/`.

## What happens when memory grows too large?

Praxis documents configured triggers, archive locations, and emergency-mode guidance. An agent or integration must carry out those Markdown procedures; they are not background runtime jobs.

## How do I know if my installation is healthy?

Follow `docs/praxis-doctor-spec.md` as a read-only diagnostic specification. Praxis does not require a bundled `praxis doctor` executable; an integration or reviewer may implement the documented checks.

## What if two skills contradict each other?

Use `memory/conflict-resolution.md`: identify sources, compare confidence and recency, mark the loser superseded, update the winner, and log the decision.

## Does Praxis work with small context windows?

Yes. Summaries, lazy loading, and emergency mode keep the always-loaded context small. Copilot and Pi use lighter budgets.

## Does Praxis work with my existing project?

Yes. Copy the framework into a project or start from `template/`; Praxis does not require a particular language or runtime.

## How much does Praxis cost?

Praxis is free software under the MIT license. See `LICENSE` for the terms.

## Will Praxis slow down my agent?

It can add context work. A historical controlled sample reported a task-specific 31% token estimate, but later matched Baseline 001 and 002 comparisons were inconclusive for a general performance advantage. Review `docs/VALIDATION_RESULTS.md` before making a performance decision.

## Can I use Praxis without Git?

Yes, but Git is recommended for history, diffs, blame, review, and safe rollback.

## What if my agent does not support Praxis?

Any agent that can read Markdown can use the core files manually. Native plugins improve convenience but are not required.

## How do I upgrade Praxis?

There is no supported “v1 to v2” migration procedure at present. Review `CHANGELOG.md`, compare the documented files in the release you intend to adopt, preserve project-local knowledge, and apply the optional diagnostic specification in `docs/praxis-doctor-spec.md` if appropriate.

## Can I share Praxis memory with my team?

Yes. Commit public and internal memory to a shared repository after review. Keep sensitive non-secret memory private and never commit credentials.

## What if two team members have conflicting conventions?

Record both sources, apply the conflict-resolution protocol, and let a human choose the winning rule before implementation continues.

## Does Praxis work with monorepos?

Yes. Use one Praxis directory per project or a shared root configuration with explicit boundaries for each package.

## How do I remove Praxis if I do not like it?

Delete the project’s Praxis directory and plugin files. There is no runtime lock-in or database migration to undo.
