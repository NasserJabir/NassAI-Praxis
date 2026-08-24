---
version: "1.0.0"
created: "2026-08-20T00:00:00Z"
updated: "2026-08-20T00:00:00Z"
author: "Nasser Jabir"
---

# NassAI-Praxis Project Starter

This directory is a smaller Markdown starter for a new project. It provides safe placeholder structure for project Memory, custom Skills, Agents, and Personas. It is **not** currently configured as a GitHub Template repository.

## Copy the Starter into a New Project

```bash
git clone https://github.com/NasserJabir/NassAI-Praxis.git /tmp/nassai-praxis
mkdir my-project
cp -R /tmp/nassai-praxis/template/. my-project/
cd my-project
git init
git add . && git commit -m "chore: initialize Praxis project"
rm -rf /tmp/nassai-praxis
```

Then choose your coding-agent host and follow the **project-local** route in the main repository’s [`INSTALL.md`](../INSTALL.md#recommended-project-local-installation). The project-local route adds the host adapter and shared Praxis Markdown core to this project.

For the first useful result, follow [`GETTING_STARTED.md`](GETTING_STARTED.md). Read the full documentation at [NassAI-Praxis](https://github.com/NasserJabir/NassAI-Praxis).
