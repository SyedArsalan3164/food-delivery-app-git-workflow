# Branching Strategy

## Branch types

| Branch | Purpose | Example |
|---|---|---|
| `main` | Production-ready code | `main` |
| `develop` | Integration of finished features | `develop` |
| `feature/*` | One feature per branch | `feature/order-tracking` |
| `release/*` | Stabilise before a release | `release/1.0.0` |
| `hotfix/*` | Urgent production fix | `hotfix/payment-timeout` |

## Workflow

1. Branch `feature/<name>` off `develop`.
2. Commit incrementally with descriptive messages.
3. Push the branch and open a Pull Request into `develop`.
4. CI (`.github/workflows/ci.yml`) must pass.
5. At least one teammate must approve the review.
6. Merge into `develop`. Delete the feature branch.
7. Periodically merge `develop` into `main` via a `release/*` branch and tag
   the release (e.g. `v1.0.0`).
8. Urgent production issues are fixed on a `hotfix/*` branch cut from `main`,
   then merged back into both `main` and `develop`.

## Conflict-resolution procedure

```bash
git checkout feature/payment-integration
git fetch origin
git merge origin/develop
# CONFLICT (content): Merge conflict in backend/src/api/orderController.js
git status
# manually edit the file, remove <<<<<<< ======= >>>>>>> markers
npm test
git add backend/src/api/orderController.js
git commit -m "Merge develop into feature/payment-integration, resolve conflict"
git push origin feature/payment-integration
```

This exact procedure was exercised on this repository — see the commit
history on `develop` for the real merge-conflict resolution commit.
