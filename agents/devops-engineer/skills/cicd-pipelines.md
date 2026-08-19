# CI/CD Pipelines Skill

## Pipeline Stages
1. **Lint** — code style, formatting
2. **Test** — unit, integration, e2e
3. **Build** — compile, bundle, optimize
4. **Scan** — security, dependency audit
5. **Deploy** — staging, then production
6. **Verify** — smoke tests, health checks

## Checklist
- [ ] Pipeline runs on every PR
- [ ] Tests block merge on failure
- [ ] Build artifacts are versioned and immutable
- [ ] Secrets managed via vault/env (never in code)
- [ ] Rollback strategy tested
- [ ] Deploy requires approval for production
- [ ] Notifications on failure

## Best Practices
- Cache dependencies between runs
- Parallelize independent stages
- Use matrix builds for multi-platform
- Keep pipelines under 10 minutes
- Artifacts signed and verified
