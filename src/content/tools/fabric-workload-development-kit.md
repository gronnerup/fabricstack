---
title: Microsoft Fabric Workload Development Kit
description: Framework and toolset for building custom Fabric workloads that embed a partner or ISV application directly into the Fabric UI and workspace experience.
url: https://github.com/microsoft/Microsoft-Fabric-workload-development-sample
docs_url: https://learn.microsoft.com/fabric/workload-development-kit/development-kit-overview
category: ide-extensibility
type: framework
tags: [official, extensibility]
pricing: free
source: source-available
maintainer: microsoft
author: Microsoft
language: TypeScript
status: ga
added: 2026-06-01
---

## What it does

The Microsoft Fabric Workload Development Kit is a framework and toolset (tools, interfaces, and an SDK) for building custom "workloads" that embed a partner or ISV application directly into the Microsoft Fabric UI and workspace experience. Workloads integrate with OneLake, Fabric scheduling, and Entra ID authentication, and can be published to the Fabric Workload Hub for discovery and monetization. It is delivered as a framework plus a sample repository implementing a workload in .NET and TypeScript.

## Why use it

Use it to extend Fabric itself, surfacing your own application as a first-class workload inside the Fabric experience rather than as a separate product.

## Getting started

Clone the sample repository and follow the getting-started guides on Microsoft Learn:

```bash
git clone https://github.com/microsoft/Microsoft-Fabric-workload-development-sample
```

The kit reached general availability in 2026; the Extensibility Toolkit is its modern successor and is worth reviewing for new projects.
