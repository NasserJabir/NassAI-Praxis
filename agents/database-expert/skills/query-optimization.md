# Query Optimization Skill

## Process
1. Identify slow query (logs, APM)
2. Run `EXPLAIN ANALYZE`
3. Check for sequential scans on large tables
4. Verify index usage
5. Check for N+1 patterns
6. Review JOIN strategies

## Checklist
- [ ] EXPLAIN ANALYZE run before optimizing
- [ ] Indexes exist for WHERE, JOIN, ORDER BY columns
- [ ] Composite indexes follow leftmost prefix rule
- [ ] No SELECT * in production queries
- [ ] Pagination implemented (cursor-based preferred)
- [ ] Connection pooling configured

## Index Strategy
- B-tree: equality and range queries
- GIN: full-text search, JSONB, arrays
- Partial indexes: filter common queries
- Covering indexes: avoid table lookups

## Red Flags
- Seq Scan on large tables
- Nested loops with large datasets
- Missing indexes on JOIN columns
- Sorting in memory (no index support)
