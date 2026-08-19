# Auto-Generated Agents

Track when existing agents don't fit and a new agent should be created.

---

## Pending Agents

Agents that are being validated before promotion:

### Agent: [Name]
- **Status:** draft / testing / confirmed
- **Discovered:** YYYY-MM-DD
- **Trigger:** When this type of task appears
- **Validation count:** 0 / 3 (need 3 successful uses)
- **Average score:** 0.0

**Draft Identity:**
- Name: [Agent Name]
- Role: What it does
- Expertise: Skills needed

**Draft Capabilities:**
- [x] Can do X
- [x] Can do Y
- [ ] Cannot do Z

**Draft Constraints:**
- Must not [limitation]
- Requires approval for [action]

---

## Creation Criteria

An agent is created when:

| Criterion | Requirement |
|-----------|-------------|
| Gap | No existing agent handles this domain |
| Repetition | Task type appears 3+ times |
| Specialization | Requires deep domain knowledge |
| Isolation | Task benefits from independent execution |
| Complexity | Task takes > 5 minutes with context switching |

## Creation Process

```
┌─────────────────────────────────────────────────────────────┐
│                 Agent Creation Flow                         │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Task doesn't fit existing agents                           │
│         │                                                    │
│         ▼                                                    │
│  ┌──────────────┐                                            │
│  │   Analyze    │  What domain? What skills needed?         │
│  └──────┬───────┘                                            │
│         │                                                    │
│         ▼                                                    │
│  ┌──────────────┐                                            │
│  │ Check Agents │  Does similar agent exist?                │
│  └──────┬───────┘                                            │
│         │                                                    │
│    ┌────┴────┐                                               │
│    ▼         ▼                                               │
│   Yes        No                                              │
│    │         │                                               │
│    ▼         ▼                                               │
│  ┌───────┐  ┌───────┐                                        │
│  │Extend │  │Create │                                        │
│  │existing│ │draft  │                                        │
│  └───────┘  └───┬───┘                                        │
│                 │                                            │
│                 ▼                                            │
│          ┌──────────────┐                                    │
│          │  Directory   │  agents/<name>/                    │
│          └──────┬───────┘                                    │
│                 │                                            │
│                 ▼                                            │
│          ┌──────────────┐                                    │
│          │  Write       │  AGENT.md                          │
│          │  Identity    │                                    │
│          └──────┬───────┘                                    │
│                 │                                            │
│                 ▼                                            │
│          ┌──────────────┐                                    │
│          │  Init        │  memory/, skills/, experiences/    │
│          │  Structure   │                                    │
│          └──────┬───────┘                                    │
│                 │                                            │
│                 ▼                                            │
│          ┌──────────────┐                                    │
│          │  Define      │  Interactions, protocols           │
│          │  Protocol    │                                    │
│          └──────┬───────┘                                    │
│                 │                                            │
│                 ▼                                            │
│          ┌──────────────┐                                    │
│          │  Test        │  Use in 3+ real tasks              │
│          └──────┬───────┘                                    │
│                 │                                            │
│                 ▼                                            │
│          ┌──────────────┐                                    │
│          │  Promote     │  Move to agents/<name>/            │
│          └──────────────┘                                    │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## Agent Template

When creating, build this structure:

```
agents/<name>/
├── AGENT.md              # Identity, capabilities, constraints
├── memory/
│   ├── working.md        # Current session context
│   └── episodic.md       # Past experiences
├── skills/
│   └── <skill>.md        # Domain-specific skills
└── experiences/
    └── log.md            # Task history and outcomes
```

### AGENT.md Template

```markdown
# <Agent Name>

## Identity
- Name: <Agent Name>
- Role: <What it does>
- Expertise: <Core skills>
- Level: junior / mid / senior

## Capabilities
- [x] Can do X
- [x] Can do Y
- [x] Can do Z
- [ ] Cannot do A
- [ ] Cannot do B

## Interactions
- Receives from: <Who sends tasks to this agent>
- Sends to: <Who this agent sends results to>
- Collaborates with: <Other agents this works with>

## Constraints
- Must not <limitation>
- Requires approval for <action>
- Max concurrent tasks: <number>
- Timeout: <duration>

## Memory
- Working: Current task context
- Episodic: Past task outcomes
- Semantic: Domain-specific patterns
- Procedural: Domain-specific workflows

## Quality Criteria
- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3
```

---

## Promotion Criteria

An agent is promoted to `agents/` when:

| Criterion | Requirement |
|-----------|-------------|
| Repetition | Used 3+ times successfully |
| Score | Average score >= 30/33 |
| Independence | Can operate without main agent |
| Boundaries | Clear what it does and doesn't do |
| Memory | Has accumulated useful domain knowledge |

---

## Rejected Agents

Agents that were evaluated but not created:

### Agent: [Name]
- **Rejected:** YYYY-MM-DD
- **Reason:** Task too simple / Not enough repetition
- **Alternative:** Use existing agent X instead
