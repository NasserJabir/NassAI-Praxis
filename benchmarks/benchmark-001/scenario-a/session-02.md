# Scenario A — Session 02

## User Prompt

Add RBAC with admin and user roles, protect existing routes, add an admin-only user listing endpoint, and update auth tests.

## Agent Context

> No Praxis loaded. No prior context. Starting from zero.

## Agent Execution

Added a role column and a middleware variant, then edited the existing routes without seeing the first session transcript. Added an admin listing route but did not add a negative authorization test.

## Issues Observed

The agent recreated a roles table but did not preserve the previous middleware contract. User listing was placed behind `auth:api` without a reliable admin check, and tests covered only a happy-path login.

The session also re-explained project structure and conventions that had already been discussed in the prior independent session. Test coverage declined because the agent did not have the previous testing decision available.

## Token Estimate

Context and correction estimate: 4350 tokens.

## Session Score

**5/10** for consistency with the previous session.
