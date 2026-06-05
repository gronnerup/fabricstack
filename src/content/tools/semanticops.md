---
title: SemanticOps
description: Community MCP server that lets AI assistants work with Power BI models, adding production controls like rollback, regression testing, and policy enforcement.
url: https://semanticops.dev
docs_url: https://semanticops.dev/getting-started
category: ai-mcp
type: mcp
tags: [ai, mcp, semantic-modeling, dax, community]
pricing: freemium
source: proprietary
maintainer: community
author: Maxim Anatsko
status: ga
added: 2026-06-01
---

## What it does

SemanticOps (formerly MCP Engine) is a Model Context Protocol server that lets AI assistants such as Claude interact with Power BI models programmatically, reading model structure, running DAX, and creating or modifying measures and relationships. On top of that it adds production controls for AI-driven model development, including rollback and snapshots, regression testing, policy enforcement, impact analysis, RLS and OLS security validation, data masking, and audit logging. It runs locally on Windows or macOS.

## Why use it

Use it when you want AI assistants to change Power BI models with guardrails, so AI-assisted edits can be reviewed, tested, and rolled back rather than applied blindly.

## Getting started

```bash
npx -y mcp-engine@latest
```

It works with Claude Code, Claude Desktop, VS Code, and other MCP clients (see semanticops.dev/getting-started). A free tier covers core model operations and DAX queries; the Pro tier (USD 349/year) adds rollback, the Test Runner, the policy engine, impact analysis, and masking, with custom Teams pricing above that. The product is proprietary, and the public GitHub repository holds the skills and license rather than the source.
