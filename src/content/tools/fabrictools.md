---
title: FabricTools
description: Community PowerShell module for automating administrative tasks across Microsoft Fabric and Power BI, from workspace and capacity management to tenant settings.
url: https://github.com/dataplat/FabricTools
category: governance-admin
type: library
tags: [automation, governance, powershell, community]
pricing: free
source: open-source
maintainer: community
author: dataplat (Data Platform Community)
language: PowerShell
status: preview
added: 2026-06-06
---

## What it does

FabricTools is a community PowerShell module for doing more with Microsoft Fabric and Power BI from the command line and in scripts. It wraps common administrative operations as cmdlets, covering workspace and dataset management, assigning workspaces to capacities, reading tenant settings, handling authentication tokens, and suspending or resuming capacities. It also ships backward-compatible aliases for legacy Power BI cmdlets.

## Why use it

Use it to automate Fabric and Power BI administration and fold those operations into PowerShell-based workflows and pipelines instead of clicking through the portal. It is maintained by the dataplat community, with contributors including Tiago Balabuch, Ioana Bouariu, Frank Geisler, Kamil Nowinski, Jess Pomfret, and Rob Sewell.

## Getting started

```powershell
Install-Module FabricTools
```

The module is in public preview, so the maintainers advise against using it in production environments for now.
