---
title: Fabric SDK for Python (microsoft-fabric-api)
description: Microsoft's official Python SDK for the Microsoft Fabric data-plane REST APIs, for managing and interacting with Fabric resources in code.
url: https://pypi.org/project/microsoft-fabric-api/
docs_url: https://learn.microsoft.com/rest/api/fabric/articles/
category: platform-apis
type: sdk
tags: [official, automation]
pricing: free
source: proprietary
maintainer: microsoft
author: Microsoft
language: Python
status: preview
added: 2026-06-01
---

## What it does

The Microsoft Fabric SDK for Python (`microsoft-fabric-api`) is the official Python client for the Microsoft Fabric data-plane REST APIs. It gives developers programmatic access to manage and interact with Fabric resources such as workspaces and items, so you can build automation and integrations in Python. It is the Python counterpart to the .NET and Go Fabric SDKs.

## Why use it

Use it to script Fabric operations or build integrations in Python with a typed client over the Fabric REST APIs rather than hand-built HTTP calls.

## Getting started

The package is in preview, so install the prerelease explicitly:

```bash
pip install --pre microsoft-fabric-api
```

Requires Python 3.8 or higher. See the Fabric REST API documentation for the operations the client covers.
