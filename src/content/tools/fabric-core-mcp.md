---
title: Fabric Core MCP Server
description: Microsoft's cloud-hosted remote MCP server that exposes Fabric's REST APIs as typed tools for AI agents, with Entra ID auth and audit logging.
url: https://learn.microsoft.com/rest/api/fabric/articles/mcp-servers/core-remote/overview-core-mcp-server
docs_url: https://learn.microsoft.com/rest/api/fabric/articles/mcp-servers/core-remote/get-started-core
category: ai-mcp
type: mcp
tags: [official, ai, mcp, automation]
pricing: free
source: proprietary
maintainer: microsoft
author: Microsoft
status: preview
added: 2026-06-01
---

## What it does

The Fabric Core MCP Server is a Microsoft-hosted, remote Model Context Protocol endpoint that exposes Fabric's public REST APIs as typed MCP tools. There is no local install: any MCP host that supports Streamable HTTP connects to the endpoint and authenticates with Microsoft Entra ID via browser-based OAuth. It covers workspace management, item CRUD, permission and role management, folder organization, OneLake Catalog search, and capacity information, all respecting your Fabric RBAC and audit logging.

## Why use it

Use the Core MCP server to let AI agents (Copilot, Claude, and other MCP hosts) perform real, authenticated operations against your Fabric tenant without writing API plumbing or installing anything locally.

## Getting started

In VS Code, run **MCP: Add Server → HTTP** and enter:

```
https://api.fabric.microsoft.com/v1/mcp/core
```

Sign in with Entra ID when prompted (auth scope `https://api.fabric.microsoft.com/.default`).
