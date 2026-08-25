---
name: nassai-praxis
description: "Activate the NassAI Praxis methodology: project memory (working/episodic/semantic/procedural), 10 specialist personas with disclosure rules, 59 skills with trigger-based loading, evidence-governed evolution. Triggers on: use praxis, use nassai-praxis, praxis mode, load praxis."
---

# NassAI Praxis

Praxis is already installed as a plugin. This skill is a thin activator.

## Steps

1. You should already see an `<EXTREMELY_IMPORTANT>` block from the
   nassai-praxis plugin in this conversation's context. Follow it — do not
   search for more Praxis files.
2. If no such block exists, the plugin is not loaded. Tell the user to check:
   `~/.config/opencode/opencode.json` → `plugin` array must include
   `nassai-praxis@git+https://github.com/NasserJabir/NassAI-Praxis.git`
   and OpenCode must be restarted.
