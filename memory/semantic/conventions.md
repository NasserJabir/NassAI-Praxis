---
version: "1.0.0"
created: "2026-08-15T08:00:00Z"
updated: "2026-08-20T16:00:00Z"
author: "benchmark-001"
classification: "internal"
security_scan: "passed"
confidence: "high"
---

<!-- SECURITY: Scanned against deny-list -->
# Project Conventions

## Laravel API

Use `tymon/jwt-auth` with the `auth:api` guard and the `/api/v1` route prefix. Controllers coordinate HTTP concerns, Form Requests validate input, repositories own database access, and models represent persistence.

## RBAC

Roles are `admin` and `user`. Admin-only operations use `role:admin`. Regular users may read products and manage their own orders; user listing, Categories CRUD, and admin order management require the admin role.

## Naming and Testing

PHP classes and Vue components use PascalCase, application variables use camelCase, and database tables and columns use snake_case. Every endpoint has feature coverage, and validation bugs receive regression tests.

## Frontend

Axios uses one service layer with bearer-token and 401 interceptors. Vue Router guards authentication and admin-only routes. Navigation is derived from the authenticated user’s role.

## Benchmark Learning

The Session 3 product-validation bypass must remain an explicit regression concern before new resources are added. Scenario B preserved these conventions across four sessions after loading semantic and working memory.

## Resolved Conflict Example

### [SUPERSEDED] Variables use snake_case everywhere

An earlier draft stated, “We use snake_case for variables.” That rule conflicted with the adopted convention that application variables and functions use camelCase while database columns use snake_case.

The earlier rule is **[SUPERSEDED]**. The winning rule is: use camelCase for application variables/functions and snake_case for database tables/columns. Resolution recorded in `memory/conflict-resolution.md` and `evolve/log.md`.
