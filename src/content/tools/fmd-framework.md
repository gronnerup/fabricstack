---
title: FMD Framework
description: Metadata-driven accelerator for governed, repeatable data integration on Microsoft Fabric, implementing the medallion lakehouse pattern.
url: https://erwindekreuk.com/fmd-framework/
repo_url: https://github.com/edkreuk/FMD_FRAMEWORK
docs_url: https://github.com/edkreuk/FMD_FRAMEWORK/wiki
category: data-engineering
type: framework
tags: [automation, dataops, migration, community]
pricing: free
source: open-source
maintainer: community
author: Erwin de Kreuk
language: Python
status: preview
added: 2026-06-01
---

## What it does

FMD (Fabric Metadata-Driven) Framework is an accelerator for building governed, repeatable data integration on Microsoft Fabric using the medallion (landing → bronze → silver → gold) lakehouse pattern. Instead of hand-coding each pipeline, it drives ingestion, transformation, and orchestration from configuration and metadata tables, with built-in audit and logging. It supports many source types including SQL Server, ADLS, SFTP, Oracle, and APIs.

## Why use it

Use FMD when you want a metadata-first foundation for a Fabric lakehouse rather than building bespoke ingestion for every source. Onboarding a new source becomes a metadata entry rather than new code.

## Getting started

Clone the repository and follow the deployment guide in the wiki. Provisioning is CLI-first, using the Fabric CLI.
