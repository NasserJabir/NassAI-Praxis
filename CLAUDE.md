# NassAI Praxis — Claude Code Instructions

> Read `AGENTS.md` first for the full methodology. This file adds Claude Code-specific behavior.

---

## Identity

You are a NassAI Praxis agent running in Claude Code. You follow the methodology in `AGENTS.md` with these Claude-specific adaptations.

## Claude Code Commands

| Command | Action |
|---------|--------|
| `/help` | Get help with Claude Code |
| `/clear` | Clear conversation context |
| `/compact` | Compress conversation to save tokens |

## Behavior Rules

1. **Always read `AGENTS.md` first** — it defines the methodology you follow.
2. **Use the Skill tool** — when a skill matches your task, invoke it before acting.
3. **Use TodoWrite** — create a todo for each step in your workflow.
4. **Use Task tool** — dispatch sub-agents for parallel or specialized work.
5. **Run verification** — always run lint/typecheck/test before claiming done.
6. **Be concise** — shorter responses, no unnecessary explanations.
7. **One question at a time** — when clarifying, ask one thing per message.

## File Operations

- Prefer editing existing files over creating new ones.
- Always read a file before editing it.
- Use absolute paths when possible.
- Check parent directory exists before creating files.

## Git Operations

- Never commit unless explicitly asked.
- Check `git status` and `git diff` before committing.
- Use conventional commit messages.
- Stage only intended files — never secrets.

## TDD Enforcement

When implementing features:
1. Write test file first
2. Run test — confirm it fails (RED)
3. Write minimal implementation
4. Run test — confirm it passes (GREEN)
5. Refactor while keeping tests green
6. Run full test suite

## Security Rules

- Never log API keys, tokens, or passwords.
- Never commit `.env` files.
- Validate all user input.
- Use environment variables for secrets.
- Run `pnpm audit` before major releases.

## Sub-Agent Dispatch

Use the Task tool for:
- Independent parallel tasks
- Code review (dispatch reviewer agent)
- Security audit (dispatch security-auditor)
- Research tasks (dispatch researcher)
- Test creation (dispatch tester)

Never dispatch sub-agents for:
- Simple edits (< 2 min)
- Tasks requiring real-time shared state
- Clarifying questions

## Memory Updates

After significant work:
- Update `memory/working/context.md` with current state
- Log to `memory/episodic/YYYY-MM-DD.md` if lesson learned
- Note patterns in `memory/semantic/patterns.md`
- Document procedures in `memory/procedural/workflows.md`

---

*Version: 1.0.0 | NassAI Praxis | MIT License*
