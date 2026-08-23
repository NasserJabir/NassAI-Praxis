---
version: "1.0.0"
created: "2026-08-22T00:00:00Z"
updated: "2026-08-22T00:00:00Z"
author: "Nasser Jabir"
classification: "internal"
type: "portability-test"
---

# Praxis Portability Test

Portability has two levels. The same knowledge and same policies must remain available across agents. Passing Level 1 proves that an agent can consume the files. Passing Level 2 proves that it benefits from and follows the shared knowledge and policies.

## Level 1 — Compatibility

**Question:** Can the agent consume Praxis?

For each supported agent, start a fresh session in the same test project and confirm that its native entry point can reach `praxis.config.md`, semantic memory, working memory, relevant skills, personas, graph conventions, loop definitions, security policy, and evaluation guidance.

| Agent | Native entry point | Level 1 evidence |
|---|---|---|
| Claude Code | `.claude/CLAUDE.md` | `<session/link>` |
| Codex | `.codex/CODEX.md` | `<session/link>` |
| Cursor | `.cursorrules` / `.cursor/` | `<session/link>` |
| Gemini CLI | `.gemini/GEMINI.md` | `<session/link>` |
| Kimi | `.kimi/KIMI.md` | `<session/link>` |
| Windsurf | `.windsurf/WINDSURF.md` | `<session/link>` |
| OpenCode | `.opencode/OPENCODE.md` | `<session/link>` |
| Pi | `.pi/PI.md` | `<session/link>` |
| GitHub Copilot | `.github/copilot-instructions.md` | `<session/link>` |

## Level 2 — Behavior

**Question:** Does the agent actually follow Praxis?

Ask: “What are my project conventions?” Then ask the agent to implement a small endpoint and evaluate its work. Record whether it discovers and uses the same convention, security boundary, decision, skill, persona policy, and evaluation process. A file being readable is not behavioral evidence.

| Agent | Level 2 convention reused | Level 2 safe behavior | Level 2 evaluation evidence |
|---|---|---|---|
| Claude Code | pending | pending | pending |
| Codex | pending | pending | pending |
| Cursor | pending | pending | pending |
| Gemini CLI | pending | pending | pending |
| Kimi | pending | pending | pending |
| Windsurf | pending | pending | pending |
| OpenCode | pending | pending | pending |
| Pi | pending | pending | pending |
| GitHub Copilot | pending | pending | pending |

## Pass Criteria

Level 1 passes when native loading is demonstrated. Level 2 passes when the agent applies the shared project knowledge in behavior and produces comparable Markdown evidence. Tool syntax, response style, and context amount may differ; knowledge and policy must not drift.

No Level 2 result is claimed in this repository without actual fresh-agent sessions.
