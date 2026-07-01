---
title: PQM.guide
description: Community-driven Power Query M language reference documenting 661 M functions with syntax, examples, and best practices, plus an interactive M formatter, a REST API, and an MCP server for AI assistants.
url: https://pqm.guide
repo_url: https://github.com/kyleamueller/PQM.guide
category: semantic-modeling
type: web-app
tags: [power-query, mcp, ai, reference, formatting, community]
pricing: free
source: open-source
maintainer: community
author: Kyle A. Mueller
language: TypeScript
status: ga
added: 2026-06-18
---

## What it does

PQM.guide is a community-driven reference for the Power Query M language, in the spirit of DAX.guide for M. It documents 661 M functions across 26 categories with syntax references, parameters, visual output examples, and best practices, alongside 22 concept guides covering M fundamentals (lazy evaluation, query folding, the type system, and more) and 18 practical pattern recipes graded from beginner to advanced. Beyond the reference site, it exposes machine-readable endpoints: a REST API for functions, concepts, patterns, fuzzy search, and sample tables; an `llms.txt` index for LLM crawlers; an interactive Format M endpoint that formats or validates M snippets; and an MCP server so AI assistants like Claude and Cursor can query M documentation directly over Streamable HTTP.

## Why use it

Use it as a fast, searchable reference while writing Power Query M, whether in Power BI, Fabric dataflows, or elsewhere, and to give AI coding assistants grounded, up-to-date M documentation through the MCP server. The interactive formatter and validator help clean up and check M snippets without leaving the browser.

## Getting started

Browse the reference at pqm.guide, or start with the curated learning path at `/learn`. To connect an AI assistant, add the MCP server (`https://pqm.guide/api/mcp`) to your client, for example via `npx mcp-remote` in `claude_desktop_config.json`. The site and its content are open source under the MIT license, and contributions (most content is MDX) are welcome through the repository.
