---
title: Fabric Data Agent Python SDK
description: Microsoft's preview Python SDK for programmatically creating, updating, and consuming Fabric Data Agents, including conversational interactions and evaluation.
url: https://pypi.org/project/fabric-data-agent-sdk/
docs_url: https://learn.microsoft.com/fabric/data-science/fabric-data-agent-sdk
category: ai-mcp
type: sdk
tags: [official, ai, automation]
pricing: free
source: proprietary
maintainer: microsoft
author: Microsoft
language: Python
status: preview
added: 2026-06-01
---

## What it does

The Fabric Data Agent Python SDK is a code-first SDK for working with Fabric Data Agents. It exposes a management plane for the artifact lifecycle (create, update, delete) and a data plane (built on the OpenAI Assistants API) for conversational interactions, including programmatic evaluation of agents. It is designed to run inside Microsoft Fabric notebooks.

## Why use it

Use it to build, configure, and test Fabric Data Agents in code rather than only through the portal. For example, you can version agent definitions or run automated quality evaluations.

## Prerequisites

This is the important caveat: the SDK is designed to work **exclusively within Microsoft Fabric notebooks** and is not supported for local execution. You also need:

- Python 3.10–3.12.
- A Microsoft Fabric capacity and workspace to host the notebook and the data agent.

## Getting started

Install it from within a Fabric notebook:

```python
%pip install fabric-data-agent-sdk
```

Sample notebooks are available in the [fabric-samples repository](https://github.com/microsoft/fabric-samples/tree/main/docs-samples/data-science/data-agent-sdk).
