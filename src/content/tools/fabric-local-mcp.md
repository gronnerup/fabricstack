---
title: Fabric Local MCP Server
description: Microsoft's open-source local MCP server that gives AI agents Fabric API docs, OneLake file operations, and item creation from your machine.
url: https://github.com/microsoft/mcp/tree/main/servers/Fabric.Mcp.Server
docs_url: https://learn.microsoft.com/rest/api/fabric/articles/mcp-servers/pro-dev-local/get-started-local
repo_url: https://github.com/microsoft/mcp
category: ai-mcp
type: mcp
tags: [official, ai, mcp, automation]
pricing: free
source: open-source
maintainer: microsoft
author: Microsoft
language: C#
status: ga
added: 2026-06-01
---

## What it does

The Fabric Local MCP Server is an open-source, development-focused Model Context Protocol server that runs as a local subprocess. It gives AI agents offline access to Fabric API documentation and best practices, OneLake file operations (browse, read, write, and manage directories; query table schemas), and core Fabric item creation integrated with the local file system. It is part of Microsoft's MIT-licensed `microsoft/mcp` monorepo and is distributed on npm as `@microsoft/fabric-mcp`.

## Why use it

Use the local server for pro-dev workflows where an agent needs grounded Fabric API knowledge and direct OneLake access on your machine. It complements the hosted Core MCP server, which handles full item CRUD, permissions, and folder management.

## Getting started

The recommended path is the "Fabric MCP Server" VS Code extension with GitHub Copilot Chat. Alternatively, with Node.js 20 LTS or later:

```bash
npx -y @microsoft/fabric-mcp@latest server start --mode all
```

Run `az login` first for OneLake operations.
