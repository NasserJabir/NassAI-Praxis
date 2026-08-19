# Task Evaluation Checklist

Run this checklist after every significant task. Record results in `memory/episodic/`.

---

## 1. Code Quality

- [ ] Code is clean and readable on first read
- [ ] No unnecessary complexity or over-engineering
- [ ] Follows existing project conventions
- [ ] No dead code or unused imports
- [ ] Functions are small and focused (< 30 lines ideal)
- [ ] File is focused (< 300 lines ideal)

**Score:** ___ / 6
**Notes:** ___

---

## 2. Testing

- [ ] Tests were written before implementation (TDD)
- [ ] All tests pass
- [ ] Edge cases are covered
- [ ] Error paths are tested
- [ ] No flaky tests introduced
- [ ] Test names describe behavior, not implementation

**Score:** ___ / 6
**Notes:** ___

---

## 3. Security

- [ ] No hardcoded secrets or API keys
- [ ] All external input is validated
- [ ] Error messages don't leak internals
- [ ] Dependencies are up to date
- [ ] No SQL injection, XSS, or CSRF vulnerabilities
- [ ] Least privilege applied

**Score:** ___ / 6
**Notes:** ___

---

## 4. Documentation

- [ ] Code is self-documenting (clear names, small functions)
- [ ] Complex logic has inline explanation of "why"
- [ ] Public APIs have JSDoc/TSDoc
- [ ] README updated if setup changed
- [ ] CHANGELOG updated if user-facing

**Score:** ___ / 5
**Notes:** ___

---

## 5. Memory & Learning

- [ ] Working memory updated with current state
- [ ] Lessons learned captured in episodic memory
- [ ] New patterns noted in semantic memory
- [ ] New procedures documented in procedural memory
- [ ] Relevant patterns extracted for skill generation

**Score:** ___ / 5
**Notes:** ___

---

## 6. Process Adherence

- [ ] Brainstormed before coding
- [ ] Wrote a plan before implementing
- [ ] Used TDD workflow
- [ ] Self-reviewed before committing
- [ ] Commits are atomic and well-described

**Score:** ___ / 5
**Notes:** ___

---

## Summary

| Category | Score | Max |
|----------|-------|-----|
| Code Quality | | 6 |
| Testing | | 6 |
| Security | | 6 |
| Documentation | | 5 |
| Memory & Learning | | 5 |
| Process Adherence | | 5 |
| **Total** | | **33** |

**Overall Rating:**
- 30-33: Excellent — extract patterns for skill generation
- 25-29: Good — note improvements in refine/
- 20-24: Acceptable — identify gaps to fix
- Below 20: Needs work — review methodology adherence

---

## Extraction Criteria

After scoring, determine if patterns should be extracted:

| Condition | Action |
|-----------|--------|
| Score >= 30 AND procedure repeated 3+ times | Create new skill in `evolve/skills-gen/` |
| Score >= 25 AND approach worked well | Log in `evolve/refine/patterns.md` as successful pattern |
| Score < 25 OR something failed | Log in `evolve/refine/patterns.md` as anti-pattern |
| New agent capability discovered | Create in `evolve/agents-gen/` |
