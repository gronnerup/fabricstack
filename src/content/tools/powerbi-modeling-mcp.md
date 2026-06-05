---
title: Power BI Modeling MCP Server
description: Microsoft's official MCP server for Power BI semantic modeling, letting AI agents create and edit tables, measures, and relationships and validate DAX.
url: https://github.com/microsoft/powerbi-modeling-mcp
docs_url: https://learn.microsoft.com/power-bi/developer/mcp/
repo_url: https://github.com/microsoft/powerbi-modeling-mcp
category: ai-mcp
type: mcp
tags: [official, ai, mcp, semantic-modeling, dax, tmdl]
pricing: free
source: open-source
maintainer: microsoft
author: Microsoft
language: TypeScript
status: preview
added: 2026-06-01
---

## What it does

The Power BI Modeling MCP Server is Microsoft's official Model Context Protocol server for semantic modeling. Running locally, it lets AI agents create and modify tables, columns, measures, and relationships through natural language, run and validate DAX, apply modeling best practices in bulk, and refactor at scale. It acts on models in Power BI Desktop, Fabric workspaces, or Power BI Project (PBIP/TMDL) files, so changes flow through existing source control.

## Why use it

Use it to bring AI assistance to semantic-model development while keeping the model in a real, validated state. It handles the modeling layer only (not report pages or diagram layouts).

## Getting started

The recommended path is the VS Code extension (`analysis-services.powerbi-modeling-mcp`, https://aka.ms/powerbi-modeling-mcp-vscode) with GitHub Copilot. Manual start:

```bash
npx -y @microsoft/powerbi-modeling-mcp@latest --start
```
