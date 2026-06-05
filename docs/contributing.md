# Contributing to fabricstack

Thanks for helping grow the catalog. There are three ways to contribute:
submitting a new tool, editing an existing entry, and improving the site itself.

## Submitting a tool

1. Check the [inclusion criteria](./inclusion-criteria.md); submissions that
   don't meet them are declined.
2. Open the **Submit a tool** issue form:
   <https://github.com/gronnerup/fabricstack/issues/new?template=submit-tool.yml>
3. Fill in the fields (they map directly to the entry's frontmatter) and submit.
4. The maintainer reviews it. If approved, a pull request adds
   `src/content/tools/{slug}.md` with the `added` date filled in and merges it;
   the site deploys within about a minute. If declined, the issue is closed with
   a comment referencing the criterion that wasn't met.

## Editing an existing entry

Every tool's detail page has a **Suggest edit** link that opens GitHub's editor
for that file. Make your change and open a pull request. Marking a tool
deprecated is just a frontmatter change: set `status: deprecated`.

### Entry format

Each entry is a markdown file at `src/content/tools/{slug}.md` with YAML
frontmatter validated at build time (see `src/content/config.ts`). Required
fields: `title`, `description`, `url`, `category`, `type`, `pricing`, `source`,
`maintainer`, `author`, `added`. Optional: `docs_url`, `repo_url`, `tags`,
`language`, `status`. The markdown body below the frontmatter is the long-form
description (typically 100–500 words). See `tag-conventions.md` for tags.

## Working on the site

```bash
npm install
npm run dev        # local dev server at http://localhost:4321
npm run build      # production build (favicons + OG image + Pagefind index)
npm run preview    # serve the production build locally
npx astro check    # type-check
```

- **Stack:** Astro 5 + Tailwind CSS 3, content collections + Zod, Pagefind.
- Favicons and the OG image are generated at build time by scripts in
  `scripts/` (run automatically via the `prebuild` hook) and committed.
- Please run `npm run build` and `npx astro check` before opening a PR.

## Code of conduct

By participating you agree to the [Code of Conduct](./code-of-conduct.md).

## Licensing

Site code is MIT licensed. Catalog content (`src/content/tools/`) is licensed
CC BY 4.0. By contributing an entry you agree to license it under CC BY 4.0.
