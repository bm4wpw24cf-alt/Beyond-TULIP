# Contributing to Beyond TULIP

## Branch strategy
- `main`: production branch protected by pull request rules.
- `gh-pages`: deployment output only. Do not edit this branch manually.

Create a short-lived branch for each change:
- `content/<topic>` for new or revised articles
- `fix/<topic>` for bug fixes
- `design/<topic>` for layout or navigation changes

Examples:
- `content/why-god-saves`
- `fix/mobile-menu`
- `design/footer-portals`

## Pull request workflow
1. Branch from `main`.
2. Make the smallest change set that solves one problem.
3. Open a pull request back into `main`.
4. Let the PR guardrails workflow finish and fix any reported issues.
5. Review the diff carefully before merging.
6. Use **Squash and merge** to keep history clean.
7. Delete the branch after merge.

## Pre-merge checklist
- New pages are linked from the right hub page, card, or footer.
- Navigation works on desktop and mobile.
- Added articles are discoverable from the relevant listing page.
- File names and links are consistent.
- No conflict markers or backup-only edits are included by mistake.
- The GitHub Pages deploy workflow is expected to run from `main` after merge.

## Automated checks
Pull requests into `main` run the workflow in `.github/workflows/pr-guardrails.yml`.
It currently blocks merge conflict markers and accidental edits to backup files such as `.bak` and `.bak2`.

## Emergency changes
If you must push directly to `main`, keep it to urgent production fixes only and verify the deploy immediately after the push.