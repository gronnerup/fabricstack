---
title: Power BI .NET REST API Client (Microsoft.PowerBI.Api)
description: Microsoft's official .NET client library for the Power BI REST APIs, providing typed access to workspaces, reports, datasets, dashboards, and embed tokens.
url: https://www.nuget.org/packages/Microsoft.PowerBI.Api
docs_url: https://learn.microsoft.com/rest/api/power-bi/
repo_url: https://github.com/microsoft/PowerBI-CSharp
category: platform-apis
type: sdk
tags: [official, automation, embedding]
pricing: free
source: open-source
maintainer: microsoft
author: Microsoft
language: C#
status: ga
added: 2026-06-01
---

## What it does

`Microsoft.PowerBI.Api` is the official .NET client library for the Power BI public REST endpoints. It provides typed access to workspaces, reports, datasets, dashboards, imports, and embed-token generation, among others. It is commonly used alongside MSAL for authentication in service and Power BI Embedded scenarios, and targets .NET Standard 2.0 and .NET Framework 4.8+.

## Why use it

Use it to call the Power BI REST APIs from .NET with strongly typed models instead of hand-built HTTP requests, especially for embedding and administrative automation.

## Getting started

```bash
dotnet add package Microsoft.PowerBI.Api
```
