---
title: Fabric REST APIs
description: Official REST API surface for Microsoft Fabric, covering workspace, item, capacity, and admin operations for automation and integration.
url: https://learn.microsoft.com/rest/api/fabric/articles/using-fabric-apis
docs_url: https://learn.microsoft.com/rest/api/fabric/articles/
category: platform-apis
type: api
tags: [official, automation, deployment, governance]
pricing: free
source: proprietary
maintainer: microsoft
author: Microsoft
language: HTTP
status: ga
added: 2026-06-01
---

## What it does

The Fabric REST APIs are the official HTTP interface to Microsoft Fabric. They cover the full platform surface (creating and managing workspaces and items, running and monitoring jobs, managing capacities, OneLake, Git integration, deployment pipelines, and tenant-level admin operations) and are the foundation that the Fabric CLI, SDKs, and `fabric-cicd` are built on.

Requests authenticate with a Microsoft Entra ID bearer token, as either a user or a service principal, and follow standard REST conventions with JSON payloads and long-running-operation polling for asynchronous work.

## Why use it

Use the REST APIs directly when you need integration that the higher-level tools don't yet cover, when you're building your own tooling or platform on top of Fabric, or when you want fine-grained control over each call. Anything you can do in the Fabric portal is ultimately a REST call, so the API is the most complete and durable automation surface.

## Getting started

Acquire a token for the `https://api.fabric.microsoft.com` resource, then call an endpoint:

```http
GET https://api.fabric.microsoft.com/v1/workspaces
Authorization: Bearer <entra-id-token>
```

Browse the full endpoint reference and per-workload operation lists in the documentation.
