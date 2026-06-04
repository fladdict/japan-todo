# AGENTS.md

## Mission

This repository is a public knowledge base for urgent structural issues Japan should solve without delay. Treat it as a long-lived civic knowledge asset, not as a disposable website.

## Language

- Public-facing content must be written in Japanese.
- Commit messages, code comments, and internal notes may be Japanese or English.
- Prefer clear, neutral, evidence-based wording.

## Editing rules

- Keep changes small and reviewable.
- Do not change page structure, content schema, routing, or category taxonomy unless explicitly requested.
- Every factual claim that may change over time must include a source.
- Do not invent statistics, quotes, laws, policies, organizations, or case studies.
- Separate facts, interpretations, proposals, and trade-offs.
- Preserve the standard issue-card headings.
- When adding a new issue, place it under `src/content/issues/<category>/<slug>.mdx`.
- When adding a new category, update `src/data/categories.ts` and related routes.
- Before finalizing, run:
  - `npm run check`
  - `npm run build`

## Content quality bar

A useful issue page should answer:

1. What is the problem?
2. Why has it been postponed?
3. Who is affected?
4. What happens if Japan does nothing?
5. What should government do?
6. What should companies do?
7. What should local governments and NPOs do?
8. What can individuals do?
9. What examples already exist?
10. What are the key data sources?
11. What are the trade-offs?
12. What should the desired state be in 10 years?

## Safe AI editing prompts

Good prompt:

> Update `src/content/issues/population/low-birthrate.mdx`. Add a short section under "企業がやること" about flexible work, male parental leave, and career continuity. Keep the existing headings. Add sources for time-sensitive claims.

Bad prompt:

> Make the site better and add lots of data.
