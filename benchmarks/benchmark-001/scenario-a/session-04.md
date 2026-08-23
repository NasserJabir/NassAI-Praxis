# Scenario A — Session 04

## User Prompt

Add a Categories resource with full CRUD, tests, auth, and role protection following the existing project patterns.

## Agent Context

> No Praxis loaded. No prior context. Starting from zero.

## Agent Execution

Added a Category model, migration, controller, and Vue page. Used a direct Eloquent query and copied a different API response convention because prior decisions were not available.

## Issues Observed

The new category work abandoned repositories, used a direct model query in the controller, returned a different JSON envelope, and exposed an Orders navigation link to every user. Naming also drifted between `product_name`/`unit_price` and the existing snake_case database fields.

The session also re-explained project structure and conventions that had already been discussed in the prior independent session. Test coverage declined because the agent did not have the previous testing decision available.

## Token Estimate

Context and correction estimate: 3850 tokens.

## Session Score

**3/10** for consistency with the previous session.
