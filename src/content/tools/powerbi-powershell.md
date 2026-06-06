---
title: Power BI PowerShell (MicrosoftPowerBIMgmt)
description: Microsoft's official PowerShell cmdlets for managing Power BI, covering workspaces, reports, datasets, capacities, and tenant administration.
url: https://github.com/microsoft/powerbi-powershell
docs_url: https://learn.microsoft.com/powershell/power-bi/overview?view=powerbi-ps
category: platform-apis
type: library
tags: [official, automation, powershell, governance]
pricing: free
source: open-source
maintainer: microsoft
author: Microsoft
language: PowerShell
status: ga
added: 2026-06-06
---

## What it does

Power BI PowerShell (the `MicrosoftPowerBIMgmt` module) is Microsoft's official set of PowerShell cmdlets for managing Power BI. It covers workspaces, reports, datasets, dashboards, tiles, imports, and capacities, and supports both individual and organization (tenant admin) scopes. When a cmdlet does not exist for a given operation, `Invoke-PowerBIRestMethod` reuses the authenticated session to call the Power BI REST API directly.

## Why use it

Use it to automate Power BI administration and content operations from PowerShell scripts and pipelines, from provisioning and managing workspaces to publishing and exporting reports, without writing raw REST calls by hand.

## Getting started

```powershell
Install-Module -Name MicrosoftPowerBIMgmt
Connect-PowerBIServiceAccount
```

You can install individual submodules (for example `MicrosoftPowerBIMgmt.Workspaces`) if you only need part of the surface. Requires Windows PowerShell 3.0 or later with .NET 4.7.1+, or PowerShell Core 6+.
