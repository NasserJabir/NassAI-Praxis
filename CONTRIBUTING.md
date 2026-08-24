---
version: "1.0.0"
created: "2026-08-20T00:00:00Z"
updated: "2026-08-20T00:00:00Z"
author: "Nasser Jabir"
---

# Contributing to NassAI-Praxis

NassAI-Praxis is Git-native and human-reviewed. Keep Markdown as the source of truth, preserve security and lazy-loading rules, and explain the evidence behind every new convention.

## Ways to Contribute

1. **New Skill:** Follow `skills/template/`, keep the skill under 500 lines, and include realistic examples and boundaries.
2. **New Agent:** Follow `agents/template/`, define capabilities and limitations clearly, and document handoffs.
3. **New Persona:** Follow `personas/template/`, including communication style, technical preferences, and usage boundaries.
4. **New Agent Plugin:** Follow [`docs/PLUGIN_ARCHITECTURE.md`](docs/PLUGIN_ARCHITECTURE.md) and test with the real agent.
5. **Documentation:** Fix typos, improve clarity, add examples, or translate content while preserving technical meaning.

## Skill Contribution Workflow

1. Fork the repository and create a focused branch.
2. Create `skills/<category>/<your-skill>/`.
3. Write `SKILL.md` with frontmatter, Purpose, activation rules, procedure, examples, boundaries, and memory template.
4. Test the skill with at least one supported agent and run the security and quality checks.
5. Submit a pull request describing the problem, the design, and test evidence.

## Agent Contribution Workflow

1. Fork the repository and choose a unique agent name and domain.
2. Create `agents/<your-agent>/` from the agent template.
3. Define identity, capabilities, limitations, memory rules, handoff protocol, and evaluation criteria.
4. Check overlap with existing agents and add an explicit boundary or handoff.
5. Submit a pull request with examples, validation output, and any required documentation updates.

## Quality Checklist

- [ ] File has valid frontmatter.
- [ ] Skill files are under 500 lines.
- [ ] Examples are realistic and use placeholders rather than credentials.
- [ ] Activation and boundaries are defined.
- [ ] No secrets or fake credentials are present.
- [ ] Memory writes reference the deny-list and classification policy.
- [ ] `git diff --check` passes.
- [ ] Relevant agent testing evidence is attached.

## Review Process

A pull request should explain what changed, why it adds value, which quality gates were run, and how security was considered. Reviewers check template compliance, clarity, boundaries, non-overlap, links, and evidence. Documentation changes require one approval; skills and agents require two approvals. Security-sensitive changes may require additional review.

## Community

Use [GitHub Issues](https://github.com/NasserJabir/NassAI-Praxis/issues) for public questions, bounded improvement ideas, and documentation or installation problems. Search existing documentation and issues first, then choose the relevant issue form. A proposal for a Skill, Knowledge pattern, or architecture-adjacent change should explain the user problem, available evidence, trade-offs, and how it respects the Architecture Freeze; opening an issue does not authorize a Core change.

Show-and-tell examples are welcome in an issue when they contain no private memory, credentials, or sensitive project data. Follow [`SUPPORT.md`](SUPPORT.md) for routing questions and [`SECURITY.md`](SECURITY.md) rather than public issues for vulnerabilities.
