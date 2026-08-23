# Scenario A — Session 01

## User Prompt

Implement JWT login/register with token refresh, protected-route middleware, and feature tests for authentication endpoints.

## Agent Context

> No Praxis loaded. No prior context. Starting from zero.

## Agent Execution

Created an AuthController and JWT endpoints from scratch, then added a protected group. Asked for the expected token response and selected a different envelope for registration. Added one happy-path feature test.

## Issues Observed

The session introduced `/login` and `/register` without the `/api/v1/auth/` convention. The agent asked again which database and response shape to use, and used `access_token` during registration but `token` during login.

The session also re-explained project structure and conventions that had already been discussed in the prior independent session. Test coverage declined because the agent did not have the previous testing decision available.

## Token Estimate

Context and correction estimate: 4600 tokens.

## Session Score

**6/10** for consistency with the previous session.
