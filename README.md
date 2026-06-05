<p align="center">
  <img src="public/favicon.svg" alt="fabricstack logo" width="88" height="88" />
</p>

<h1 align="center">fabricstack</h1>

<p align="center">
  <strong>The catalog of tools for Microsoft Fabric developers.</strong><br />
  🌐 <a href="https://fabricstack.dev">fabricstack.dev</a>
</p>

A curated, neutral catalog of tools, libraries, frameworks, SDKs, CLIs, MCP
servers, IDE extensions, templates, and services for working with **Microsoft
Fabric** and **Power BI**.

The site doesn't rank, rate, or recommend. Inclusion is curated against
published [criteria](docs/inclusion-criteria.md): tools that meet them are in,
tools that don't, aren't. Each tool keeps its own license, shown on its page.

---

## Contributing

There are two ways to get a tool into the catalog. Both start by checking the
**[inclusion criteria](docs/inclusion-criteria.md)**: in short, it must be a
*tool* (not a blog post, course, or tutorial), publicly accessible, and useful
for Microsoft Fabric and/or Power BI development.

### Option 1: Submit an issue (easiest)

Open a **[tool submission issue](../../issues/new?template=submit-tool.yml)**.
The form captures every field below; the maintainer reviews it and, if
approved, opens the pull request for you.

### Option 2: Open a pull request

Add one markdown file at `src/content/tools/{slug}.md` (the `slug` becomes the
URL, e.g. `dax-studio.md` → `/tools/dax-studio`). Use the template below.

Found an error in an existing entry? Every tool page has a **Suggest edit**
link that opens GitHub's editor for that file; or edit it directly and open a
PR. To deprecate a tool, set `status: deprecated`.

See **[docs/contributing.md](docs/contributing.md)** for the full guide and
**[docs/tag-conventions.md](docs/tag-conventions.md)** for tagging.

---

## Tool entry template

Copy this into `src/content/tools/{slug}.md` and fill it in. Frontmatter is
validated at build time; a missing required field or an unknown enum value
fails the build.

```markdown
---
title: Example Tool                 # Display name. Required.
description: One or two sentences shown on cards. Required.
url: https://example.com            # Primary link (homepage or repo). Required.
docs_url: https://example.com/docs  # Optional.
repo_url: https://github.com/org/example  # Optional, if different from url.
category: platform-apis             # One value, see list below. Required.
type: cli                           # One value, see list below. Required.
tags: [official, automation]        # 0–6 lowercase, hyphenated tags. Optional.
pricing: free                       # free | freemium | paid. Required.
source: open-source                 # open-source | source-available | proprietary. Required.
maintainer: microsoft               # microsoft | community | vendor. Required.
author: Example Org                 # Person/org behind it. Required.
language: Python                    # Primary language. Optional.
status: ga                          # preview | ga | deprecated. Optional, defaults to ga.
added: 2026-06-01                   # YYYY-MM-DD. Set by the maintainer at merge.
---

## What it does

One short paragraph expanding on the description.

## Why use it

Concrete scenarios and use cases.

## Getting started

Install command, quickstart, or a pointer to the docs.
```

Aim for **100–500 words** in the body, keep code blocks under ~20 lines, and
write in a neutral, factual reference voice (no "we love this tool"). If you're
submitting via PR, you can leave `added` for the maintainer to set at merge.

### Field reference

| Field | Allowed values |
|---|---|
| **category** | `platform-apis` · `devops-cicd` · `ai-mcp` · `semantic-modeling` · `dax-performance` · `reporting-embedding` · `ide-extensibility` · `data-engineering` · `data-science-ml` · `data-warehouse` · `real-time-intelligence` · `databases` · `data-factory-integration` · `governance-admin` |
| **type** | `cli` · `sdk` · `api` · `mcp` · `library` · `framework` · `extension` · `desktop-app` · `web-app` · `template` · `service` |
| **pricing** | `free` · `freemium` · `paid` |
| **source** | `open-source` (OSI license) · `source-available` (visible, non-OSI) · `proprietary` (closed) |
| **maintainer** | `microsoft` · `community` · `vendor` |
| **status** | `preview` · `ga` · `deprecated` |

A tool belongs to exactly **one** category: pick the discipline it primarily
serves, or the Fabric workload it targets. The schema is the source of truth:
[`src/content/config.ts`](src/content/config.ts).

---

## Local development

Requires Node.js 20.3+ (or 18.20.8+ / 22+).

```bash
npm install
npm run dev        # dev server at http://localhost:4321
npm run build      # production build → dist/ (favicons + OG image + Pagefind index)
npm run preview    # serve the production build locally
npx astro check    # type-check
```

Built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com),
content collections validated with [Zod](https://zod.dev), client-side search via
[Pagefind](https://pagefind.app). Tool favicons and the social card are generated
at build time by scripts in [`scripts/`](scripts/). Please run `npm run build`
and `npx astro check` before opening a PR.

### Repo layout

```
src/content/tools/   # one markdown file per catalog entry
src/content/config.ts# Zod schema + controlled vocabularies
src/pages/           # routes (home, browse, tool/category pages, etc.)
src/components/       # ToolCard, Badge, FilterSidebar, Logo, …
docs/                # contributing, inclusion criteria, tag conventions, CoC
scripts/             # build-time favicon + OG-image generation
```

---

## Code of conduct

By participating you agree to the [Code of Conduct](docs/code-of-conduct.md).

## License

- **Site code:** [MIT](LICENSE)
- **Catalog content** (`src/content/tools/`): CC&nbsp;BY&nbsp;4.0, licensed so that by contributing an entry you agree to license it under CC BY 4.0.
- Each listed tool is governed by its own license, shown on its detail page.
