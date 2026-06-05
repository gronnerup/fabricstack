---
title: pbi-cli
description: Community CLI that gives Claude Code token-efficient "skills" to read and write Power BI semantic models and PBIR report files directly, with no MCP server.
url: https://github.com/MinaSaad1/pbi-cli
repo_url: https://github.com/MinaSaad1/pbi-cli
category: ai-mcp
type: cli
tags: [ai, agentic, dax, pbir, community]
pricing: free
source: open-source
maintainer: community
author: Mina Saad
language: Python
status: ga
added: 2026-06-01
---

## What it does

pbi-cli gives AI coding agents (primarily Claude Code) token-efficient "skills" to read and write Power BI semantic models and PBIR report files directly, with no MCP server and sub-second execution. It works across two layers: the semantic model (via .NET TOM/ADOMD against a running Power BI Desktop instance) and the report layer (via PBIR file manipulation). It supports DAX execution, visual CRUD, and a REPL, and installs a set of Power BI skills into Claude Code. It bundles the Microsoft Analysis Services libraries to avoid dependency hunting.

## Why use it

Use it to let an AI coding agent operate on Power BI models and reports quickly and locally, without standing up an MCP server.

## Getting started

```bash
pipx install pbi-cli-tool
pbi-cli skills install
pbi connect
```

Requires Windows, Python 3.10 or later, and a running Power BI Desktop instance.
