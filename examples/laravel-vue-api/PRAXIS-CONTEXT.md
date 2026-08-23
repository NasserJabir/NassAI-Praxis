---
version: "1.0.0"
created: "2026-08-20T00:00:00Z"
updated: "2026-08-20T00:00:00Z"
author: "benchmark-001"
classification: "internal"
---

# Laravel + Vue API Project Conventions

## Authentication

Use `tymon/jwt-auth` with the `auth:api` guard. `AuthController` owns register, login, refresh, and logout. Protected routes use `auth:api`; authentication failures return a consistent JSON error envelope.

## Authorization

Roles are `admin` and `user`. `RoleMiddleware` checks the authenticated user's role. The admin-only user listing and order management routes use `role:admin`; regular users may read products and manage their own orders.

## Architecture

Controllers coordinate HTTP concerns, Form Request classes validate input, repositories own database access, and models represent persistence. Business decisions stay out of route closures. Resource controllers use plural REST endpoints under `/api/v1`.

## Naming

PHP classes and Vue components use PascalCase. PHP variables and JavaScript variables use camelCase. Database tables and columns use snake_case. API resource names and URL collections use plural kebab-case or nouns as defined by Laravel conventions.

## Testing

Every endpoint has feature coverage. Validation regressions receive a dedicated regression test. Tests use factories and seeded roles; no test relies on production credentials or external services.

## Frontend

Axios is configured in one service module with a bearer-token interceptor and 401 handling. Vue Router guards protected and admin-only routes. Navigation is derived from the authenticated user's role rather than duplicated per page.
