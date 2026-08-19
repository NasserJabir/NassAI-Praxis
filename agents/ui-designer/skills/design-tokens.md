# Design Tokens Skill

## Token Categories
1. **Color** — brand, neutral, semantic (success, warning, error)
2. **Typography** — font family, size scale, line height, weight
3. **Spacing** — consistent scale (4px base: 4, 8, 12, 16, 24, 32, 48, 64)
4. **Border** — radius, width, color
5. **Shadow** — elevation levels (sm, md, lg)
6. **Motion** — duration, easing curves

## Checklist
- [ ] Tokens defined in a single source of truth
- [ ] Semantic names (not raw values): `color-bg-primary` not `#ffffff`
- [ ] Dark mode variants planned
- [ ] Spacing scale is consistent (multiples of base)
- [ ] Typography scale has clear hierarchy
- [ ] Tokens exported for all platforms (CSS, JS, iOS, Android)

## Naming Convention
```
category-variant-property
e.g., color-bg-primary, spacing-md, radius-lg
```
