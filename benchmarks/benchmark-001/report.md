# Benchmark 001 Report — NassAI-Praxis

## Executive Summary

Benchmark 001 compares four independent implementation sessions without Praxis against four memory-augmented sessions with Praxis on the same Laravel API and Vue 3 feature sequence. Both paths implement authentication, RBAC, a validation bug fix, and Categories CRUD.

The Without-Praxis path produced realistic context loss: route and response drift, repeated clarification, direct database access after a repository decision, weak regression coverage, and an unguarded admin navigation path. The With-Praxis path loaded semantic memory, working memory, and relevant skills before each session, then persisted updates after each session.

In this controlled benchmark, Praxis reduced repeated context explanations by 100%, reduced repeated bugs by 100%, raised estimated convention adherence from 52% to 100%, and raised the average session consistency score from 4.5/10 to 9.75/10. These are benchmark observations, not universal performance claims.

## Methodology

The same four user prompts were applied to two controlled paths. Scenario A started every session with no prior context. Scenario B loaded `praxis.config.md`, semantic memory, working memory, and the relevant API-design, database-design, TDD, and security skills. Each path produced an independent code artifact under `examples/laravel-vue-api/`, a transcript for every session, and explicit observations about conventions, tests, security, and correction cost.

The project conventions were seeded in `examples/laravel-vue-api/PRAXIS-CONTEXT.md` and reflected in Scenario B’s semantic memory. Session snapshots under `scenario-b/praxis-memory/` prove that working, semantic, episodic, and refine records were updated after each session.

## Scenario A Analysis

Scenario A repeatedly rebuilt context. Session 1 used inconsistent authentication response names, Session 2 added RBAC without preserving the middleware contract, Session 3 left the product endpoint open to mass-assignment and weak validation, and Session 4 abandoned repository boundaries while exposing an admin navigation link to every user.

> “The new category work abandoned repositories, used a direct model query in the controller, returned a different JSON envelope, and exposed an Orders navigation link to every user.”

See [Scenario A Session 01](scenario-a/session-01.md), [Session 02](scenario-a/session-02.md), [Session 03](scenario-a/session-03.md), and [Session 04](scenario-a/session-04.md).

## Scenario B Analysis

Scenario B loaded the same compact context before each task. The API prefix, JWT guard, repository boundary, Form Request validation, role middleware, feature-test expectations, and Axios route-guard behavior remained stable. The Session 3 validation bypass was recorded as an episodic incident and referenced before the Categories feature was accepted in Session 4.

> “In Session 4, the Session 3 validation incident was explicitly checked through the episodic-memory reference before the new feature was accepted.”

See [Scenario B Session 01](scenario-b/session-01.md), [Session 02](scenario-b/session-02.md), [Session 03](scenario-b/session-03.md), and [Session 04](scenario-b/session-04.md).

## Metrics Dashboard

| Metric | Scenario A (No Praxis) | Scenario B (With Praxis) | Improvement |
|---|---:|---:|---:|
| Context Retention | 8 re-explanations | 0 | 100.0% fewer |
| Decision Consistency | 50% | 100% | +100.0% relative |
| Error Recurrence | 2 | 0 | 100.0% fewer |
| Task Completion Rate | 75% | 100% | +33.3% |
| Instruction Adherence | 52% | 100% | +92.3% |
| Token Efficiency | 4,200/task | 2,900/task | 31.0% fewer |
| Session Consistency Score | 4.5/10 | 9.75/10 | +5.25 |

The detailed calculations and interpretation are in [metrics.md](metrics.md).

## Key Findings

- Praxis eliminated repeated project-structure and convention explanations in the controlled sequence.
- Semantic memory preserved JWT, REST, naming, repository, and testing decisions across all four With-Praxis sessions.
- Episodic memory turned the Session 3 validation bypass into an explicit prevention check for Session 4.
- Scenario B preserved RBAC and frontend route-guard behavior when adding a new resource.
- The memory load cost was offset by fewer corrections and a lower total estimated token cost per task.

## Before/After Comparison

### Authentication contract

**Scenario A — inconsistent session output:**

```php
return response()->json(['access_token' => $token]);
```

**Scenario B — stable contract:**

```php
return response()->json([
    'data' => ['token' => $token, 'type' => 'bearer'],
]);
```

### Product validation

**Scenario A — validation bypass remains possible:**

```php
return Product::query()->create($request->all());
```

**Scenario B — validated data crosses the controller boundary:**

```php
public function store(StoreProductRequest $request): JsonResponse
{
    return response()->json([
        'data' => $this->products->create($request->validated()),
    ], 201);
}
```

## Conclusion

In this controlled four-session benchmark, **Praxis reduces context loss, repeated corrections, and recurring security mistakes while improving convention adherence, test continuity, and cross-session consistency**. The result supports the framework’s central hypothesis: a compact, human-readable curriculum can make an existing agent more consistent without replacing the agent runtime.

## Raw Transcripts

| Scenario | Sessions |
|---|---|
| Without Praxis | [01](scenario-a/session-01.md), [02](scenario-a/session-02.md), [03](scenario-a/session-03.md), [04](scenario-a/session-04.md) |
| With Praxis | [01](scenario-b/session-01.md), [02](scenario-b/session-02.md), [03](scenario-b/session-03.md), [04](scenario-b/session-04.md) |
