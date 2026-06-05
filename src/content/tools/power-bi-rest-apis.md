---
title: Power BI REST APIs
description: Official REST API surface for Power BI covering embedding, administration, governance, and content operations across workspaces, datasets, reports, and dashboards.
url: https://learn.microsoft.com/rest/api/power-bi/
docs_url: https://learn.microsoft.com/rest/api/power-bi/
category: platform-apis
type: api
tags: [official, automation, governance, deployment]
pricing: free
source: proprietary
maintainer: microsoft
author: Microsoft
language: HTTP
status: ga
added: 2026-06-01
---

## What it does

The Power BI REST APIs provide service endpoints for embedding, administration, governance, and content operations across workspaces, datasets, reports, dashboards, dataflows, capacities, gateways, and deployment pipelines. They authenticate with a Microsoft Entra ID app via MSAL, including service-principal support, and are distinct from the newer Fabric REST APIs, which target Fabric items and workloads.

## Why use it

Use the Power BI REST APIs for automation specific to Power BI, such as generating embed tokens, managing datasets and refreshes, administering tenants, and driving deployment pipelines. They are especially useful in scenarios not yet covered by the Fabric REST APIs.

## Getting started

Register an Entra ID app, acquire a token with MSAL (or use a service principal), then call endpoints under `https://api.powerbi.com/v1.0/myorg`. Requests are throttled and return HTTP 429 with a `Retry-After` header when limits are hit.
