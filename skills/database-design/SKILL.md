---
name: database-design
description: PostgreSQL schema design, indexing strategies, migration patterns, and connection pooling for production workloads.
triggers:
  - "schema, migration, index, or query design"
tokens: ~1130
---

# Database Design

## Description
Practical guidance for designing, migrating, and operating PostgreSQL databases in production: normalized schema design, index selection, migration safety, and connection pool tuning. Derived from vasilyu1983/ai-agents-public.

## When to Activate
- Designing new database schemas or tables
- Writing or reviewing SQL migrations
- Optimizing slow queries or adding indexes
- Configuring connection pooling (PgBouncer, pgpool)
- Implementing multi-tenant data isolation
- Reviewing database changes for production safety

## Process

### 1. Schema Design
- Normalize to 3NF by default; denormalize only with measured justification
- Use appropriate data types: `timestamptz` over `timestamp`, `text` over `varchar(n)` unless length is a true constraint
- Define `NOT NULL` constraints; use `DEFAULT` values intentionally
- Add `CHECK` constraints for domain rules at the database level
- Use `UUID` v7 (time-ordered) for distributed primary keys; `BIGSERIAL` for single-node
- Create junction tables for many-to-many relationships with explicit foreign keys
- Always define `ON DELETE` / `ON UPDATE` actions for foreign keys

### 2. Indexing Strategy
- Index columns used in `WHERE`, `JOIN`, and `ORDER BY` clauses
- Prefer composite indexes with leading-column selectivity (most selective first)
- Use partial indexes for common filtered queries
- Use covering indexes (INCLUDE) to avoid heap lookups for read-heavy paths
- Avoid over-indexing: each index slows writes and consumes storage
- Monitor `pg_stat_user_indexes` to find unused indexes; drop them

### 3. Migration Safety
- Never deploy a migration that drops a column AND removes its code references simultaneously
- Use expand-and-contract pattern: add new column → backfill → deploy code → drop old column
- Write reversible migrations (up/down) for all schema changes
- Test migrations on a production-representative dataset before deploying
- Lock tables explicitly only when necessary; prefer `ALTER TABLE ... ADD COLUMN` without locks
- Use `NOT VALID` + `VALIDATE CONSTRAINT` for large constraint additions

### 4. Connection Pooling
- Use PgBouncer in transaction mode for stateless application pools
- Pool size: `connections = (cpu_cores * 2) + effective_spindle_count` (rule of thumb)
- Set `idle_in_transaction_session_timeout` to prevent abandoned transactions
- Monitor `pg_stat_activity` for connection leaks
- Use `SET LOCAL` for per-transaction settings; avoid `SET` which leaks across transactions

### 5. Query Optimization
- Use `EXPLAIN (ANALYZE, BUFFERS)` to inspect query plans
- Avoid `SELECT *`; specify columns explicitly
- Use `LIMIT` for pagination; avoid `OFFSET` for large offsets (use keyset pagination)
- Replace correlated subqueries with `JOIN` or lateral joins
- Batch inserts with `INSERT ... VALUES (...), (...), ...` or `COPY`

## Quality Criteria
- All tables have primary keys and explicit foreign key constraints
- No missing indexes on foreign keys (joins are covered)
- Migrations are reversible and tested on representative data
- Connection pool is configured and monitored
- No `SELECT *` in production query paths
- Slow query log is monitored; queries > 100ms are investigated

## References
- [vasilyu1983/ai-agents-public — Database Design](https://github.com/vasilyu1983/ai-agents-public)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [PgBouncer Documentation](https://www.pgbouncer.org/config.html)
- [Use The Index, Luke](https://use-the-index-luke.com/)
- [PostgreSQL Wiki — Performance Optimization](https://wiki.postgresql.org/wiki/Performance_Optimization)

## Examples

### Expand-and-Contract Migration
```sql
-- Step 1: Add new column (expand)
ALTER TABLE users ADD COLUMN email_normalized text;

-- Step 2: Backfill
UPDATE users SET email_normalized = lower(trim(email)) WHERE email_normalized IS NULL;

-- Step 3: Deploy code that writes to both columns

-- Step 4: Add NOT NULL after backfill completes
ALTER TABLE users ALTER COLUMN email_normalized SET NOT NULL;

-- Step 5: Drop old column in a later release (contract)
-- ALTER TABLE users DROP COLUMN email;
```

### Composite Index for Keyset Pagination
```sql
-- Supports: SELECT * FROM orders WHERE created_at > $1 ORDER BY created_at, id LIMIT 50
CREATE INDEX idx_orders_created_id ON orders (created_at, id);
```
