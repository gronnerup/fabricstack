---
title: "FUAM: Fabric Unified Admin Monitoring"
description: Microsoft solution accelerator for holistic, near-real-time monitoring of a Fabric tenant, covering activities, inventory, capacity, and usage, with Power BI reports.
url: https://github.com/microsoft/fabric-toolbox/tree/main/monitoring/fabric-unified-admin-monitoring
docs_url: https://github.com/microsoft/fabric-toolbox/blob/main/monitoring/fabric-unified-admin-monitoring/media/documentation/FUAM_Architecture.md
category: governance-admin
type: template
tags: [official, monitoring, governance, dataops]
pricing: free
source: open-source
maintainer: microsoft
author: Microsoft Fabric CAT
language: Python
status: preview
added: 2026-06-01
---

## What it does

FUAM (Fabric Unified Admin Monitoring) is a Microsoft solution accelerator for holistic, near-real-time monitoring of a Fabric tenant. It collects tenant settings, activities, workspace and capacity inventory, and usage via the Fabric REST APIs and the Microsoft 365 audit log, lands the data in a lakehouse (raw plus Delta Parquet), and ships Power BI reports over the SQL endpoint and Direct Lake. It is modular and extensible.

## Why use it

Use FUAM when you need a ready-made, deployable monitoring layer across your Fabric estate rather than building tenant telemetry from scratch. It is a solution accelerator built by the Fabric Customer Advisory Team, not a supported Microsoft product, so there is no official support.

## Getting started

In a Fabric workspace, run the deployment notebook `scripts/Deploy_FUAM.ipynb` and follow `how-to/How_to_deploy_FUAM.md` in the repository.
