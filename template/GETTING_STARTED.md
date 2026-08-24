---
version: "1.0.0"
created: "2026-08-20T00:00:00Z"
updated: "2026-08-20T00:00:00Z"
author: "Nasser Jabir"
---

# Get Started with Praxis in Five Minutes

1. From the project that contains this starter, install the coding-agent adapter and shared Praxis core through the recommended **project-local** route in [`INSTALL.md`](../INSTALL.md#recommended-project-local-installation).
2. Start a new agent session in this project and ask: **“Read my Praxis context and tell me the active project conventions and their source files.”**
3. Confirm that the response identifies [`memory/semantic/conventions.md`](memory/semantic/conventions.md) and distinguishes its starter placeholders from project-specific decisions you still need to define.
4. Give the agent one real, bounded task in the project. Observe whether it cites relevant context before it acts; a host may need an explicit request to read a relevant file.
5. Use [`memory/working/current.md`](memory/working/current.md) to record active work when appropriate. Create reusable Skills or evaluation records only through the documented evidence and human-review path; this starter does not prepopulate a trial Skill or an evaluation-pattern file.

This is a first-use walkthrough, not the formal adapter-validation protocol. Use [`../docs/AGENT_TESTING.md`](../docs/AGENT_TESTING.md) only for deliberate testing in a disposable project.

Never put credentials in memory. If the agent proposes a memory write, it must pass the deny-list and classification rules first.
