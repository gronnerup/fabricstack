# Tag conventions

Tags handle the long-tail, multi-axis filtering that the single `category` and
`type` fields can't. They are an open vocabulary, but consistency keeps the
catalog filterable, so please follow these conventions.

## Rules

- **Lowercase, hyphen-separated:** `github-actions`, not `GitHub Actions`.
- **Maximum 6 tags** per entry.
- Prefer an existing tag over inventing a near-duplicate. If you propose a new
  tag, the maintainer decides whether to adopt it or fold it into an existing
  one.

## Conventional tags (non-exhaustive)

**Topic:** `cicd`, `iac`, `automation`, `monitoring`, `governance`,
`deployment`, `testing`, `documentation`, `migration`

**Tech:** `terraform`, `bicep`, `github-actions`, `azure-devops`, `vscode`,
`tmdl`, `dax`, `kql`, `spark`, `delta`, `parquet`, `pbix`, `pbir`

**Discipline:** `semantic-modeling`, `dataops`, `mlops`, `finops`

**Style:** `ai`, `mcp`, `llm`, `agentic`, `official`, `community`, `embedding`

## Notes

- Don't duplicate the `category` or `type` as a tag (e.g. an entry of type
  `cli` doesn't need a `cli` tag).
- Use `official` for Microsoft-published tools, `community` for individual or
  community projects; these complement, not replace, the `maintainer` field.

This list is pruned and expanded as the catalog grows.
