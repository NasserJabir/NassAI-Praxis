# Scenario A — Session 03

## User Prompt

Fix the product validation bug and ensure it never happens again. Add a regression test.

## Agent Context

> No Praxis loaded. No prior context. Starting from zero.

## Agent Execution

Changed the product endpoint to check that `name` exists, but continued using a generic Request and mass assignment. Added a test for a valid product only.

## Issues Observed

The agent fixed the reported symptom in the transcript but left `ProductController::store()` using `$request->all()`. The validation test only asserted that the request shape was accepted, so the negative-price defect remained possible.

The session also re-explained project structure and conventions that had already been discussed in the prior independent session. Test coverage declined because the agent did not have the previous testing decision available.

## Token Estimate

Context and correction estimate: 4100 tokens.

## Session Score

**4/10** for consistency with the previous session.
