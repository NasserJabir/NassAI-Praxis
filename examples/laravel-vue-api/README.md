# Laravel + Vue API Benchmark Demo

This demo is the controlled application used by NassAI-Praxis Benchmark 001. It models a Laravel API with JWT authentication, role-based authorization, Users, Products, Orders, and Categories, plus a Vue 3 client.

## Layout

- `scenario-a/` contains the independent-session implementation. It intentionally records realistic drift caused by starting each session without persistent context.
- `scenario-b/` contains the memory-augmented implementation. It follows the conventions in `PRAXIS-CONTEXT.md` and keeps per-session Praxis memory snapshots under `scenario-b/praxis-memory/`.
- `PRAXIS-CONTEXT.md` is the convention seed used to update project semantic memory before Scenario B.

## Setup

Each scenario is self-contained. For the backend, run `composer install`, copy `.env.example` to `.env`, configure a database, run `php artisan key:generate`, `php artisan jwt:secret`, `php artisan migrate --seed`, and then `php artisan serve`. For the Vue client, run `npm install` and `npm run dev` from the scenario's `frontend/` directory.

The benchmark records controlled agent behavior and code artifacts; it does not claim that the measured values generalize to every project or model.
