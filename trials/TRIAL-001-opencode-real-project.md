---
version: "1.0.0"
date: "2026-08-25"
trial: "trial-001"
type: "real-project-usage"
host: "opencode 1.17.4"
framework_version: "v1.3.2 (later fixes through v1.4.0)"
project: "shu-portal (Next.js 15 frontend + Laravel 12 API, university portal)"
status: "observed"
---

# Trial 001 — First Real-Project Usage of the OpenCode Plugin

## Purpose

First natural-usage trial of the NassAI-Praxis OpenCode plugin (v1.3.2) on a
real project, replacing synthetic validation with observed behavior. Records
what worked, what failed, and what was changed as a result.

## Setup Observed

- Plugin installed via git package spec (`nassai-praxis@...#v1.x.x`) in the
  global `opencode.json`, per documented best practice.
- Project configured with a thin adapter: project-local `.opencode/` +
  `praxis.config.md` (project name/language), **no copied** skills/personas/
  agents. Master repository is the single source of truth; the plugin's
  `nassaiRoot` resolves there.
- Target project: real monorepo (Next.js 15 + Laravel 12, Arabic-first
  university portal).

## Observed Working (confirmed behaviors)

| Behavior | Evidence |
|---|---|
| Opt-in activation | Plain requests ran with zero Praxis context; "use praxis" armed it and the agent announced activation |
| Config resolution | Agent read project `praxis.config.md` and correctly reported project name + language (not template residue) |
| Memory loading | Agent loaded working/semantic memory and cited actual conventions (Laravel API, JWT, /api/v1, RBAC, naming rules) |
| Persona availability | Agent surfaced hassan (System Architect) as available on request without silently adopting it |
| Init notice | Agent correctly reported that no project-local memory directory existed yet |
| Single-source wiring | Conventions came from the master repo's semantic memory across a project boundary — shared-knowledge design confirmed working |

## Failures Found (and their resolutions)

1. **False-negative verification**: asking "do you have the plugin?" or
   "list your skills" always returned no — message injection is invisible to
   the agent's self-description, and Praxis skills are not native OpenCode
   skills. *Resolution:* INSTALL.md rewritten with a behavioral probe
   (four-memory-tiers question); dead `config.skills.paths` hook removed (v1.1.1).
2. **Stale template residue**: scaffolded `praxis.config.md` carried
   `project_name: "NassAI-Praxis"` into the target project. *Resolution:*
   corrected during setup; init tool updated to write real project metadata (v1.4.0).
3. **Cross-project memory leak**: because `nassaiRoot` pointed at the master
   repo, the agent read master-repo working memory ("Benchmark 001 Phase 1")
   inside shu-portal — context from an unrelated project. *Resolution:*
   plugin now resolves memory to `<project>/memory/` when present, with
   PROJECT-LOCAL/master labeling and an explicit no-mixing instruction (v1.4.0).
4. **Always-on injection friction**: injecting methodology into every request,
   including trivial ones, was rejected by the maintainer. *Resolution:*
   opt-in activation via invocation phrases; one-time inactive-state marker
   added so dormant state is visible (v1.3.0–v1.3.2).
5. **Environment blocker (non-framework)**: OpenCode workspace billing
   exhaustion produced model-call failures unrelated to Praxis; diagnosed via
   provider logs ("Insufficient balance").

## Unproven (injected but not yet observed)

- Persona proposal before task start when domain matches
- `[name — role]` disclosure label during persona work
- Post-task "Experience gained" learning report
- Whether agents comply consistently with these rules across models

These remain open E-ladder questions for subsequent trials.

## Classification

All items above are **observed** (real session evidence), except the four
unproven behaviors which are explicitly **hypothesis-stage**. No performance,
quality, or adoption claims are made.
