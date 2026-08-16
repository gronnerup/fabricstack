---
title: Fabric Archive Bot
description: Open-source PowerShell tool that automatically backs up Microsoft Fabric and Power BI tenant assets (reports, semantic models, notebooks, and Spark job definitions) across all workspaces.
url: https://github.com/JamesDBartlett3/Fabric-Archive-Bot
category: governance-admin
type: cli
tags: [backup, bcdr, cicd, dataops, powershell]
pricing: free
source: open-source
maintainer: community
author: James D. Bartlett III
language: PowerShell
status: preview
added: 2026-07-01
---

## What it does

Fabric Archive Bot is an open-source PowerShell tool that automatically backs up Microsoft Fabric and Power BI tenant assets across all workspaces, including reports, semantic models, notebooks, and Spark job definitions. It authenticates unattended with an Entra ID service principal, supports configurable retention policies, and can run on a schedule (for example via Windows Task Scheduler) for disaster-recovery, source-control, and governance scenarios. A major V2 release is in development.

## Why use it

Use it to keep automated, point-in-time backups of your Fabric and Power BI content for disaster recovery, change tracking, or governance, without wiring up the export logic yourself. It currently exports to local directories and processes every workspace, so plan runtimes accordingly on large tenants.

## Getting started

Clone the repository, configure the JSON settings and a service principal, then run the export script:

```powershell
.\Export-FabricItemsFromAllWorkspaces.ps1
```

A helper script sets up scheduled daily runs via Windows Task Scheduler. The tool is licensed under OSL-3.0, a copyleft license worth reviewing if that matters for your use.
