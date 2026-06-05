---
title: PBIR Tools
description: CLI toolset for automating Power BI reports in the PBIR (enhanced report) format; browse, edit, validate, and publish reports from the terminal.
url: https://github.com/maxanatsko/pbir.tools
docs_url: https://github.com/maxanatsko/pbir.tools/blob/main/getting-started.md
category: reporting-embedding
type: cli
tags: [pbir, automation, ai, agentic, community]
pricing: free
source: proprietary
maintainer: community
author: Kurt Buhler & Maxim Anatsko
language: Python
status: preview
added: 2026-06-01
---

## What it does

PBIR Tools (CLI package `pbir-cli`) is a command-line toolset for automating Power BI reports stored in the PBIR (Power BI Enhanced Report) folder format. From the terminal you can browse, edit, validate, and publish PBIR reports: adding visuals, applying bulk formatting, running health checks, and deploying to Microsoft Fabric. It is "built for humans, optimized for agents," with plugins that integrate it into AI coding agents such as Claude Code and GitHub Copilot.

## Why use it

Use it to bring scriptable, repeatable editing to report files that are otherwise tedious to change by hand, and to let AI agents safely operate on report definitions.

## Getting started

```bash
uv tool install pbir-cli   # or: pip install pbir-cli
```

Native macOS and Windows installers are also available on GitHub Releases. The project is in beta and uses a custom non-commercial license, so review the LICENSE before commercial use.
