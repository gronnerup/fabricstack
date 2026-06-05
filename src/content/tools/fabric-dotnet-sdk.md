---
title: Fabric SDK for .NET (Microsoft.Fabric.Api)
description: Microsoft's official .NET SDK for the Microsoft Fabric data-plane REST APIs, for building apps that manage workspaces and items in C#.
url: https://www.nuget.org/packages/Microsoft.Fabric.Api
docs_url: https://learn.microsoft.com/rest/api/fabric/articles/
category: platform-apis
type: sdk
tags: [official, automation]
pricing: free
source: proprietary
maintainer: microsoft
author: Microsoft
language: C#
status: ga
added: 2026-06-01
---

## What it does

The Microsoft Fabric SDK for .NET (`Microsoft.Fabric.Api`) is the official .NET client library for the Microsoft Fabric data-plane REST APIs. It lets .NET applications work with Fabric programmatically, such as listing and managing workspaces and items, so you can build integrations and automation in C#. It targets .NET Standard 2.0 and runs across the modern .NET and .NET Framework lines.

## Why use it

Use it when you build Fabric automation or integrations in .NET and want a typed client over the Fabric REST APIs instead of hand-built HTTP calls. This is the data-plane Fabric SDK; managing Fabric capacities at the Azure Resource Manager level is handled by a separate ARM library.

## Getting started

```bash
dotnet add package Microsoft.Fabric.Api
```

See the Fabric REST API documentation for the operations the client wraps.
