# Contributing

1. Never commit directly to `main` or `develop`.
2. Create a branch named `feature/<short-description>`, `release/<version>`,
   or `hotfix/<short-description>` as appropriate.
3. Keep commits focused and use descriptive messages
   (e.g. `git commit -m "Add order-tracking endpoint"`).
4. Open a Pull Request into `develop` (or `main` for a hotfix).
5. Ensure all CI checks pass before requesting review.
6. At least one approving review is required before merge.
7. Resolve conflicts locally following `docs/branching-strategy.md`, re-run
   tests, then push the resolution — do not force-push over a shared branch.
