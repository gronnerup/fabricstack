---
title: Fab Inspector
description: Community CLI and desktop app for deterministic, rules-based testing of Microsoft Fabric and Power BI artifacts using declarative JSON rules, locally, in CI/CD, or against live workspaces.
url: https://github.com/NatVanG/fab-inspector
docs_url: https://github.com/NatVanG/fab-inspector/blob/main/docs/intro.md
category: devops-cicd
type: cli
tags: [testing, cicd, pbir, governance, community]
pricing: free
source: open-source
maintainer: community
author: Nat Van Gulck
language: C#
status: ga
added: 2026-06-18
---

## What it does

Fab Inspector validates Microsoft Fabric and Power BI artifacts against declarative JSON rules, giving you deterministic, repeatable checks instead of one-off manual review. The same rules run in three places: locally against checked-out item definitions, in CI/CD pipelines (with Azure DevOps or GitHub log formats), and against published Fabric workspace items using interactive or service authentication. Beyond artifact structure, it can validate tenant and capacity configuration against governance policies through API operators, and run DAX query and T-SQL query operators as rule conditions to enforce data quality, semantic model correctness, and lakehouse health. Power BI report testing uses the enhanced metadata format (PBIR); PBIX is not supported, so point it at PBIP or `{my-report}.Report` folders. Results can be written as Console, JSON, HTML, ADO, or GitHub output. It ships both a CLI and a cross-platform Avalonia desktop GUI, and includes a base rules file focused on report visual quality checks that you can copy and customize.

## Why use it

Use it to turn Fabric and Power BI quality standards into automated, deterministic gates, catching report, model, data, and tenant issues before they ship, and running the exact same rule set on a developer's machine and in the pipeline.

## Getting started

Download the CLI or GUI binaries from the repository's releases, or pull the published Docker image. In the CLI, point `-fabricitem` at a local Fabric item folder (or `-fabricworkspace` at a workspace GUID with `-authmethod`), pass a rules file via `-rules`, and choose `-formats`. The Avalonia desktop app offers the same without the command line. See the docs for the rules guide, operator references, and CI/CD tutorials. Fab Inspector is a community project and is not supported by Microsoft.
