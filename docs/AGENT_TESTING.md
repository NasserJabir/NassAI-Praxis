---
version: "1.0.0"
created: "2026-08-20T00:00:00Z"
updated: "2026-08-20T00:00:00Z"
author: "Nasser Jabir"
---

# Agent Integration Testing Protocol

## Five-Minute Test

The test must run in a disposable project with a copy or supported symlink of the Praxis core. The evaluator should record the agent, model, host version, context budget, loaded files, and final result. Do not use real credentials or private project data.

1. Start the agent in the test project.
2. Ask: **“What are my project conventions?”**
3. Verify the agent reads `memory/semantic/conventions.md` or the approved summary.
4. Ask: **“Add a new API endpoint.”**
5. Verify the agent loads `skills/technical/api-design/`.
6. Ask: **“Evaluate your work.”**
7. Verify the agent writes a security-scanned evaluation to `evolve/refine/patterns.md`.

## Claude Code

**Native entry point:** `.claude/CLAUDE.md`. **Context profile:** 200K; **Praxis budget:** 8K.

Within five minutes, start the agent in a disposable test project containing `praxis.config.md` and the standard memory directories. Ask, “What are my project conventions?” Verify that it names `memory/semantic/conventions.md`. Ask, “Add a new API endpoint.” Verify that it loads `skills/technical/api-design/`. Ask, “Evaluate your work.” Verify that it evaluates the seven dimensions and writes a non-secret result to `evolve/refine/patterns.md`.

**Pass:** all three prompts produce the expected file references and the final write passes security classification. **Fail:** the agent ignores the native entry point, loads unrelated private memory, skips the API-design skill, or writes without the deny-list scan.

## Cursor

**Native entry point:** `.cursor/CURSOR.md`. **Context profile:** 128K; **Praxis budget:** 8K.

Within five minutes, start the agent in a disposable test project containing `praxis.config.md` and the standard memory directories. Ask, “What are my project conventions?” Verify that it names `memory/semantic/conventions.md`. Ask, “Add a new API endpoint.” Verify that it loads `skills/technical/api-design/`. Ask, “Evaluate your work.” Verify that it evaluates the seven dimensions and writes a non-secret result to `evolve/refine/patterns.md`.

**Pass:** all three prompts produce the expected file references and the final write passes security classification. **Fail:** the agent ignores the native entry point, loads unrelated private memory, skips the API-design skill, or writes without the deny-list scan.

## GitHub Copilot

**Native entry point:** `.copilot/copilot-instructions.md`. **Context profile:** 8K; **Praxis budget:** 2K.

Within five minutes, start the agent in a disposable test project containing `praxis.config.md` and the standard memory directories. Ask, “What are my project conventions?” Verify that it names `memory/semantic/conventions.md`. Ask, “Add a new API endpoint.” Verify that it loads `skills/technical/api-design/`. Ask, “Evaluate your work.” Verify that it evaluates the seven dimensions and writes a non-secret result to `evolve/refine/patterns.md`.

**Pass:** all three prompts produce the expected file references and the final write passes security classification. **Fail:** the agent ignores the native entry point, loads unrelated private memory, skips the API-design skill, or writes without the deny-list scan.

## Kimi

**Native entry point:** `.kimi/KIMI.md`. **Context profile:** 200K+; **Praxis budget:** 10K.

Within five minutes, start the agent in a disposable test project containing `praxis.config.md` and the standard memory directories. Ask, “What are my project conventions?” Verify that it names `memory/semantic/conventions.md`. Ask, “Add a new API endpoint.” Verify that it loads `skills/technical/api-design/`. Ask, “Evaluate your work.” Verify that it evaluates the seven dimensions and writes a non-secret result to `evolve/refine/patterns.md`.

**Pass:** all three prompts produce the expected file references and the final write passes security classification. **Fail:** the agent ignores the native entry point, loads unrelated private memory, skips the API-design skill, or writes without the deny-list scan.

## Codex CLI

**Native entry point:** `.codex/CODEX.md`. **Context profile:** 128K; **Praxis budget:** 8K.

Within five minutes, start the agent in a disposable test project containing `praxis.config.md` and the standard memory directories. Ask, “What are my project conventions?” Verify that it names `memory/semantic/conventions.md`. Ask, “Add a new API endpoint.” Verify that it loads `skills/technical/api-design/`. Ask, “Evaluate your work.” Verify that it evaluates the seven dimensions and writes a non-secret result to `evolve/refine/patterns.md`.

**Pass:** all three prompts produce the expected file references and the final write passes security classification. **Fail:** the agent ignores the native entry point, loads unrelated private memory, skips the API-design skill, or writes without the deny-list scan.

## Gemini CLI

**Native entry point:** `.gemini/GEMINI.md`. **Context profile:** 1M+; **Praxis budget:** 15K.

Within five minutes, start the agent in a disposable test project containing `praxis.config.md` and the standard memory directories. Ask, “What are my project conventions?” Verify that it names `memory/semantic/conventions.md`. Ask, “Add a new API endpoint.” Verify that it loads `skills/technical/api-design/`. Ask, “Evaluate your work.” Verify that it evaluates the seven dimensions and writes a non-secret result to `evolve/refine/patterns.md`.

**Pass:** all three prompts produce the expected file references and the final write passes security classification. **Fail:** the agent ignores the native entry point, loads unrelated private memory, skips the API-design skill, or writes without the deny-list scan.

## OpenCode

**Native entry point:** `.opencode/OPENCODE.md`. **Context profile:** model-dependent; **Praxis budget:** 5K–10K.

Within five minutes, start the agent in a disposable test project containing `praxis.config.md` and the standard memory directories. Ask, “What are my project conventions?” Verify that it names `memory/semantic/conventions.md`. Ask, “Add a new API endpoint.” Verify that it loads `skills/technical/api-design/`. Ask, “Evaluate your work.” Verify that it evaluates the seven dimensions and writes a non-secret result to `evolve/refine/patterns.md`.

**Pass:** all three prompts produce the expected file references and the final write passes security classification. **Fail:** the agent ignores the native entry point, loads unrelated private memory, skips the API-design skill, or writes without the deny-list scan.

## Pi

**Native entry point:** `.pi/PI.md`. **Context profile:** lightweight; **Praxis budget:** 3K.

Within five minutes, start the agent in a disposable test project containing `praxis.config.md` and the standard memory directories. Ask, “What are my project conventions?” Verify that it names `memory/semantic/conventions.md`. Ask, “Add a new API endpoint.” Verify that it loads `skills/technical/api-design/`. Ask, “Evaluate your work.” Verify that it evaluates the seven dimensions and writes a non-secret result to `evolve/refine/patterns.md`.

**Pass:** all three prompts produce the expected file references and the final write passes security classification. **Fail:** the agent ignores the native entry point, loads unrelated private memory, skips the API-design skill, or writes without the deny-list scan.

## Windsurf

**Native entry point:** `.windsurf/WINDSURF.md`. **Context profile:** 128K; **Praxis budget:** 8K.

Within five minutes, start the agent in a disposable test project containing `praxis.config.md` and the standard memory directories. Ask, “What are my project conventions?” Verify that it names `memory/semantic/conventions.md`. Ask, “Add a new API endpoint.” Verify that it loads `skills/technical/api-design/`. Ask, “Evaluate your work.” Verify that it evaluates the seven dimensions and writes a non-secret result to `evolve/refine/patterns.md`.

**Pass:** all three prompts produce the expected file references and the final write passes security classification. **Fail:** the agent ignores the native entry point, loads unrelated private memory, skips the API-design skill, or writes without the deny-list scan.

## Overall Pass Criteria

An agent passes when it loads the correct startup files, respects lazy loading, selects the relevant API-design skill, applies the security write gate, and records the evaluation without secrets. A warning may be recorded for a host limitation described in the compatibility matrix; a critical failure is any secret-bearing write, ignored security scan, or contradiction of explicit project conventions.
