# Test Generation Skill

## Overview
Systematic approach to designing and generating comprehensive tests.

## Process

### Phase 1: Requirements Analysis
1. Understand the feature/module being tested
2. Identify success criteria and edge cases
3. Review existing tests for patterns
4. Define test strategy (unit/integration/e2e)

### Phase 2: Test Case Design
1. Write happy path test cases
2. Design edge case scenarios
3. Create error handling tests
4. Plan performance tests if needed

### Phase 3: Test Implementation
1. Set up test fixtures and mocks
2. Implement test cases
3. Add appropriate assertions
4. Ensure test isolation

### Phase 4: Coverage Analysis
1. Measure code coverage
2. Identify untested paths
3. Prioritize coverage gaps
4. Document coverage goals

### Phase 5: Validation
1. Run all tests
2. Verify test reliability (no flaky tests)
3. Validate test data
4. Document test results

## Test Types
- **Unit**: Individual function/method testing
- **Integration**: Component interaction testing
- **E2E**: Full workflow testing
- **Performance**: Load and stress testing
- **Security**: Vulnerability testing

## Quality Checklist
- [ ] Tests are independent and isolated
- [ ] Tests have clear, descriptive names
- [ ] Tests cover happy paths and edge cases
- [ ] Tests have appropriate assertions
- [ ] Tests are maintainable and readable
- [ ] Test data is realistic and sufficient
- [ ] Tests follow AAA pattern (Arrange/Act/Assert)

## Anti-Patterns
- Testing implementation details instead of behavior
- Creating flaky or non-deterministic tests
- Over-mocking, obscuring real behavior
- Writing tests that are too broad or too narrow
- Ignoring test maintenance and updates
