# Beyond TULIP
Teologi fra Eirik Storesletten

## Publishing
The site is published to GitHub Pages through the workflow in [.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml). Any push to the main branch triggers a fresh deployment of the static site to the gh-pages branch.

## Recommended workflow
- Treat `main` as the protected production branch.
- Do not edit or commit directly on `gh-pages`; it is deployment output managed by GitHub Pages.
- Create a short-lived branch for each change, open a pull request into `main`, and merge only after review or a final self-check.
- Prefer squash merges so each content change lands in `main` as one clean commit.
- Pull requests are validated by `.github/workflows/pr-guardrails.yml` before merge.

See [CONTRIBUTING.md](CONTRIBUTING.md) for the pull request checklist and branch naming guide.

## Quick start
1. Create a feature branch from `main`.
2. Commit and push your changes to that branch.
3. Open a pull request to `main`.
4. Merge after requirements are met.
