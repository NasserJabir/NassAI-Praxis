---
version: "1.0.0"
author: "NassAI-Praxis maintainers"
classification: "public"
type: "maintainer-checklist"
---

# Maintainer Publication Checklist

Use this checklist before a public distribution update or release.

- [ ] README describes the declarative Markdown-first boundary without promising an agent runtime or automatic context retrieval.
- [ ] All public performance language agrees with [`VALIDATION_RESULTS.md`](VALIDATION_RESULTS.md).
- [ ] `INSTALL.md` uses the current default branch and distinguishes recommended project-local setup from any legacy global setup.
- [ ] `LICENSE`, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `SECURITY.md`, `SUPPORT.md`, and `GOVERNANCE.md` are present and linked from the project entry points.
- [ ] GitHub issue forms and pull request template collect reproducible, non-sensitive information.
- [ ] `CHANGELOG.md` and `docs/RELEASE_PROCESS.md` are current before a versioned release.
- [ ] Repository description, topics, homepage, and community-health profile have been reviewed by a maintainer.
- [ ] No Core architecture change has been introduced without evidence and an explicit human decision.
