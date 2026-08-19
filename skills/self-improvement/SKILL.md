---
name: self-improvement
description: Build loops where the harness itself is the optimization target.
---

# Self-Improvement

## Description
Create feedback loops that improve the agent system itself. Track performance, identify failure patterns, and automatically adjust strategies, prompts, and configurations.

## When to Activate
- Agent system has been running and producing results
- Identifying repeated failure patterns
- Optimizing agent performance
- Reducing human intervention needs
- Building adaptive systems

## Process

### Step 1: Establish Baselines
Define what "good" looks like:
- Task completion rate
- Time to completion
- Error frequency
- Human intervention required
- Output quality metrics

### Step 2: Collect Feedback
Gather data on agent performance:
- Success/failure logs
- Human corrections and overrides
- Time spent on tasks
- Quality of outputs
- Common error patterns

### Step 3: Analyze Patterns
Identify improvement opportunities:
- What tasks fail most often?
- Where do agents need human help?
- What prompts produce best results?
- Which patterns lead to success?

### Step 4: Generate Improvements
Create targeted improvements:
- **Prompt refinement**: Based on failure analysis
- **Process changes**: Based on bottleneck identification
- **Tool updates**: Based on usage patterns
- **Rules additions**: Based on repeated mistakes

### Step 5: Test and Deploy
- Test improvements on similar tasks
- Measure impact against baseline
- Deploy if improvement is significant
- Monitor for unintended consequences

### Step 6: Iterate
- Continue collecting feedback
- Refine improvements based on results
- Retire improvements that don't help
- Scale what works

## Improvement Categories

### Prompt Optimization
- Track which prompts produce best results
- A/B test prompt variations
- Remove ambiguous instructions
- Add concrete examples

### Process Optimization
- Identify bottlenecks in workflows
- Parallelize where possible
- Automate repetitive decisions
- Simplify unnecessary steps

### Tool Optimization
- Track tool usage patterns
- Update tool descriptions based on usage
- Add new tools for repeated manual work
- Remove unused tools

## Quality Criteria
- Improvements are measurable (before/after comparison)
- Changes are reversible if they don't help
- No single change breaks existing functionality
- System gets measurably better over time
- Human intervention decreases over time

## Examples

### Feedback Loop
```
Agent completes task → Human reviews → Correction logged
→ Pattern detected: Agent struggles with X
→ Prompt updated: "When handling X, always do Y"
→ Next task: Agent handles X correctly
→ Improvement confirmed
```

### Metric Tracking
```json
{
  "metric": "task_completion_rate",
  "baseline": 0.72,
  "current": 0.89,
  "improvements": [
    {"change": "Added error handling rules", "impact": "+0.08"},
    {"change": "Refined prompt for X", "impact": "+0.05"},
    {"change": "Added new tool for Y", "impact": "+0.04"}
  ]
}
```
