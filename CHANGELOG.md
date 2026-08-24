# Changelog

All notable changes to NassAI-Praxis are documented here. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and releases follow Semantic Versioning where applicable.

## [1.2.0] - 2026-08-25

### Added

- **Persona discovery protocol** in the OpenCode plugin bootstrap: the injected context now includes a persona-to-task matching table (10 personas with roles and trigger domains) and rules for proposing persona adoption — propose when a task strongly matches, always user-approved, prefer project-local personas over package defaults.
- **First-use initialization notice**: when OpenCode runs in a project without a Praxis layer (`praxis.config.md` / `.praxis` missing), the plugin appends a one-time notice telling the agent the project is uninitialized and how it can be initialized with `praxis-init.js`. The notice never auto-writes to the user's repository; initialization remains an explicit user action.

### Rationale

Both additions address findings from first real-world usage: agents had no decision rule for reaching for personas, and un-initialized projects failed the startup protocol silently with no indication that Praxis was only partially active.

## [1.1.1] - 2026-08-25

### Fixed

- Removed the OpenCode plugin's `config.skills.paths` hook: it targeted a config field that does not exist in the `@opencode-ai/plugin` API (verified against v1.4.2 typings), so it was dead code. Praxis skills are injected as methodology context, not registered as native OpenCode skills.
- Rewrote the OpenCode INSTALL.md verification section: asking "do you have the plugin?" or "list your skills" always produces a false negative because message injection is invisible to the agent's self-description. Replaced with a behavioral probe (the four memory tiers) that can only be answered from injected context.

### Verified

- Observed end-to-end on opencode 1.17.4: behavioral probe returned all four memory tiers correctly from injected bootstrap context.

## [1.1.0] - 2026-08-24

Phase 5: skill discovery, optional tooling, and CI.

### Added

- Added `PRAXIS.md`, a generated index of all 59 skills with trigger conditions ("Load when...") and approximate token costs so agents load context selectively instead of scanning directories.
- Added `scripts/praxis-build.js`: normalizes YAML frontmatter (name, description, triggers, tokens) across every `SKILL.md` and regenerates the `PRAXIS.md` index; idempotent, with a `--check` mode for CI.
- Added `scripts/praxis-validate.js`: structural validation covering frontmatter schema, placeholder descriptions, broken internal links, and index coverage.
- Added `scripts/praxis-init.js`: optional scaffolder that detects a target repository's stack and generates starter `CLAUDE.md` / `AGENTS.md` files with recommended skills and working memory. Never overwrites existing files; reports `CREATED / SKIPPED / FAILED` per path.
- Added GitHub Actions CI (`.github/workflows/ci.yml`) running build idempotency check and validation on push and pull requests.

### Changed

- Updated the Claude Code (`.claude/CLAUDE.md`) and OpenCode (`.opencode/OPENCODE.md`) adapters: startup protocols now begin at `PRAXIS.md`, with explicit skill-loading rules and an **advisory** context budget (~8K tokens by default, adjustable per host/model/context window).
- Updated both READMEs to document skill discovery, the scaffolding tool, and the tooling boundary.

### Architecture

- Documented the Core vs Optional Tooling boundary in [`GOVERNANCE.md`](GOVERNANCE.md): Praxis Core remains Markdown-first and runtime-independent; scripts are optional developer tooling, and nothing in Core requires their presence at task time. `SKILL.md` files remain canonical; `PRAXIS.md` is derived output.
- Fixed a CommonJS compatibility regression (`type: "module"`) that broke the pre-existing automation scripts under Node.js.

### Fixed

- Resolved the Windows-incompatible case collision in `evidence/persona-validation-001/` (`EVALUATION.md` vs `evaluation.md`) by renaming the synthesis record to `evaluation-synthesis.md` and updating all documentation links.

## [1.0.0-phase5] - 2026-08-22

### Added

- Added the Markdown-native Graph Engineering model, controlled relationship vocabulary, traversal patterns, optional metadata, and non-destructive integrity guidance.
- Added explicit Execution, Learning, and Evolution Loops with a composable lifecycle and evidence-based promotion gate.
- Added memory graph mapping, persona reasoning layers, agent/persona/skill composition guidance, and an end-to-end product-search example.

### Changed

- Extended `praxis.config.md` with graph, loop, memory, security, and evolution controls while preserving existing defaults.
- Connected planning, TDD, debugging, review, and verification skills to the Execution and Learning Loops.
- Updated the unified project overview and documentation index to include the graph-and-loop layer.

### Fixed

- Replaced vague self-learning language with explicit, auditable loop stages and stop conditions.
- Made Persona reasoning characteristics distinct from Agent role and Skill procedure.
- Clarified that graph validation is read-only and that existing files remain backward-compatible without mandatory metadata.

### Security

- Preserved the existing deny-list and memory-write gate; graph metadata cannot override classification or retention policy.
- Added explicit guidance that secrets, credentials, tokens, and sensitive personal information must never be persisted.

## [1.0.0-phase7] - 2026-08-22

### Added

- Added the one-page architecture boundary and architecture-freeze change gate.
- Added the Praxis Validation Protocol with baseline/Praxis comparison measurements and evidence rules.
- Added the four-session `examples/todo-api/` Markdown demo covering graph relationships, execution, learning, evolution, and provenance.
- Added explicit Knowledge Status and graph provenance conventions.
- Added the cross-agent Portability Test protocol.

### Changed

- Clarified in the root documentation and configuration that Praxis does not execute agents and has no mandatory CLI, runtime, database, queue, or service.
- Converted persona concurrency from an exclusive lock concept to concurrent read-only use with human-reviewed base mutations.

## [1.0.0-phase8] - 2026-08-22

### Added

- Added a real-project trial protocol and session observation template without fabricating external evidence.
- Added Benchmark 002 as an empty, evidence-first measurement instrument for Praxis utility.
- Added memory utility and deliberate forgetting tests to measure whether project knowledge is discovered, reused, and decision-improving.
- Added two-level portability validation: Level 1 compatibility and Level 2 behavior.
- Added project continuity positioning and explicit release-readiness boundaries.

### Changed

- Strengthened the architecture freeze: future work must come from real project evidence before new features are considered.
- Clarified that Praxis Core has no mandatory CLI, runtime, database, service, queue, or daemon.

## [Unreleased]

### Added

- Added audited continuity, cross-harness, evolution, Persona, and matched-baseline evidence packages with explicit observed, inconclusive, and not-run boundaries.
- Added an isolated Field Service Work Orders dogfooding project and session records that distinguish artifact creation, behavioral verification, closure, context access, and infrastructure interruption.
- Added external-readiness review, publication checklist, release process, security policy, support guide, governance guide, citation metadata, issue forms, pull request template, and Code of Conduct.

### Changed

- Reframed root documentation, FAQ, installation, and launch copy so public claims agree with the canonical validation record rather than presenting historical task-specific metrics as general performance results.
- Clarified that Persona reading may be concurrent, canonical Persona changes require proposal and human review, and context discovery/use must be observed rather than presumed.
- Established project-local agent setup as the recommended installation path and aligned the OpenCode raw-install reference with the repository default branch.

### Fixed

- Prevented locally installed nested `node_modules` dependencies from being included in the public repository.
- Corrected outdated migration and mandatory-CLI wording in public documentation.

## [1.0.0-phase4] - 2026-08-20

### Added

- Added a GitHub project template with starter configuration, memory, and customization directories.
- Added a five-minute getting-started guide, ecosystem landing page, case study, one-pager, and transcript index.
- Added launch thread, blog draft, Hacker News post, and expanded FAQ content.

### Changed

- Polished the English and Arabic READMEs for discovery and adoption.
- Reworked the contributing guide into actionable skill, agent, persona, plugin, and documentation workflows.
- Consolidated the history into a complete Phase 0–4 release narrative.

### Fixed

- Closed the onboarding gap between cloning Praxis and running the first agent session.
- Added explicit links between benchmark evidence, installation, documentation, and contribution paths.
- Added concise sharing formats for the benchmark and project positioning.

### Security

- Template ignores private memory, logs, pending evolution queues, and environment files by default.
- Ecosystem examples use placeholders and do not store credentials.
- Community guidance continues to require deny-list scans before memory writes.

## [1.0.0-phase3] - 2026-08-20

### Added

- Added nine agent plugin directories with four integration files each.
- Added compatibility matrix, plugin architecture, and agent testing protocol.
- Added native entry points and installation prompts for supported agents.

### Changed

- Documented host-specific memory bridges and token optimizers.
- Added context-window profiles for Claude Code, Cursor, Copilot, Kimi, Codex, Gemini, OpenCode, Pi, and Windsurf.
- Extended installation guidance for project-local plugins.

### Fixed

- Closed the gap between the framework core and native agent instruction environments.
- Added security references to plugin loaders and memory bridges.
- Added OpenCode frontmatter to its installation documentation.

## [1.0.0-phase2] - 2026-08-20

### Added

- Added deny-list patterns, scan procedure, security audit template, and mandatory memory-write security gate.
- Added classification, lifecycle, retention, token management, summarization, and `praxis doctor` specifications.
- Added consistency rules, conflict resolution, and evolution evidence.

### Changed

- Updated security, planning, debugging, and subagent-management skills.
- Added per-agent context windows and emergency-mode behavior.
- Expanded FAQ and positioning around production hardening.

### Fixed

- Prevented unsafe memory writes from bypassing classification.
- Made superseded convention conflicts explicit and reviewable.
- Added diagnostics for missing, stale, oversized, and contradictory Praxis files.

### Security

- Secrets are rejected before memory persistence and never echoed in audit records.
- Sensitive non-secret content is routed to ignored private memory.
- Security scans cover summaries and generated memory content.

## [1.0.0-phase1] - 2026-08-18

### Added

- Added Laravel + Vue benchmark scenarios with four sessions each.
- Added transcripts, code artifacts, metrics, and the benchmark report.
- Added per-session Scenario B Praxis memory snapshots.

### Changed

- Seeded semantic memory with API, repository, testing, JWT, and RBAC conventions.
- Added benchmark links and controlled comparison language.
- Added validation artifacts for PHP, Composer, JavaScript, metrics, and report structure.

### Fixed

- Captured the product-validation regression as an episodic memory event.
- Preserved the same API and testing patterns when adding Categories.
- Documented inconsistencies rather than hiding them in the no-memory scenario.

## [1.0.0-phase0] - 2026-08-15

### Added

- Established the Markdown foundation with configuration, memory, skills, agents, personas, and evolution.
- Added 29 skills, 12 agents, 10 personas, security classification, and per-agent documentation.
- Added README, Arabic README, installation, positioning, contribution, FAQ, changelog, and license files.

### Changed

- Standardized frontmatter, canonical directories, lazy-loading priorities, and human-reviewed evolution.
- Added Git-native memory archives and private-memory boundaries.
- Added agent-agnostic integration placeholders.

### Fixed

- Replaced an incomplete repository baseline with canonical Phase 0 paths and templates.
- Added classification metadata to legacy memory files.
- Added validation records for foundation structure and security constraints.

### Security

- Established the deny-list principle and private-memory ignore boundary.
- Documented that secrets must never be memorized.
- Added classification tags to memory templates.

## [1.0.0] - YYYY-MM-DD

### Added

- Planned stable release after ecosystem feedback and final release review.

### Changed

- Planned stabilization of interfaces and documentation.

### Fixed

- Planned fixes discovered by community testing.
