---
version: "1.0.0"
created: "2026-08-20T00:00:00Z"
updated: "2026-08-20T00:00:00Z"
author: "Nasser Jabir"
---

# NassAI-Praxis in Five Minutes

## First Use in a Real Project

1. Open the existing project where you want to use Praxis. For a new project, copy the starter directory using [`template/README.md`](template/README.md); `template/` is not a GitHub Template repository.
2. Choose your coding-agent host and follow its **project-local** setup in [`INSTALL.md`](INSTALL.md#recommended-project-local-installation). Do not copy `memory/private/` into a public repository.
3. Start the coding agent from that project and ask: **“Read my Praxis context and tell me the active project conventions and their source files.”**
4. Confirm that the response identifies relevant Markdown knowledge, such as `memory/semantic/conventions.md`, rather than claiming that every file was automatically loaded.
5. Give the agent one real, bounded task. Observe whether it cites and uses the relevant context. Keep proposed memory writes subject to the deny-list and classification rules.

This is a first-use walkthrough, not a performance test or an adapter-validation experiment. Use [`docs/AGENT_TESTING.md`](docs/AGENT_TESTING.md) only when you intentionally want to test a host integration in a disposable project.

For deeper guidance, read [`docs/PROJECT_OVERVIEW.md`](docs/PROJECT_OVERVIEW.md), [`docs/VALIDATION_INDEX.md`](docs/VALIDATION_INDEX.md), [`FAQ.md`](FAQ.md), and [`CONTRIBUTING.md`](CONTRIBUTING.md).
