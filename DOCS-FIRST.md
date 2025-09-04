# Documentation-First Development Protocol

## Principle

**Documentation must be updated BEFORE any code changes**, following the same discipline as Test-Driven Development (TDD) but for documentation.

## Process

### 1. Documentation-First Workflow

```
1. Update README.md/docs → 2. Update code → 3. Verify consistency
```

**Never**: Code first, document later
**Always**: Document the intended state, then implement to match

### 2. Critical Documentation Files

| File            | Purpose                            | Update Trigger            |
| --------------- | ---------------------------------- | ------------------------- |
| `README.md`     | Architecture overview, API changes | Any structural change     |
| `DEPLOYMENT.md` | Build config, env vars             | Build/deploy changes      |
| `CLAUDE.md`     | AI assistant guidance              | Project structure changes |

### 3. Change Verification Checklist

Before any commit:

- [ ] Documentation reflects new architecture
- [ ] No references to removed components/features
- [ ] File paths and directory structure accurate
- [ ] Environment variables documented correctly
- [ ] Build process instructions current

### 4. Documentation Debt Prevention

**Red Flags** (immediate fix required):

- Code references in docs that don't exist
- Wrong file/directory paths in instructions
- Outdated dependency information
- Invalid configuration examples

**Yellow Flags** (fix in next iteration):

- Missing feature documentation
- Incomplete setup instructions
- Performance metrics not updated

## Implementation

### Pre-commit Hook

```bash
# Add to .git/hooks/pre-commit
npm run build  # Verify docs match code
npm test       # Ensure examples work
```

### Code Review Requirements

- Reviewer must verify documentation consistency
- PR description must link to updated docs
- No merge until docs are current

## Recovery from Documentation Debt

When documentation drift is discovered:

1. **Stop all feature work**
2. **Fix documentation first**
3. **Verify with testing**
4. **Resume development**

This prevents compound documentation debt that makes systems unmaintainable.
