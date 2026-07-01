---
title: Unified Data Platform Deployment (udp-cicd)
description: Declarative infrastructure-as-code deployment tool for Microsoft Fabric, distributed as a .NET global tool, that manages Fabric items, Entra identities, and Azure resources from a single YAML manifest across environments.
url: https://github.com/PatrickGallucci/udp-cicd
docs_url: https://patrickgallucci.github.io/udp-cicd/
category: devops-cicd
type: cli
tags: [iac, deployment, automation, mcp, dotnet, community]
pricing: free
source: open-source
maintainer: community
author: Patrick Gallucci
language: C#
status: preview
added: 2026-06-18
---

## What it does

Unified Data Platform Deployment (`udp-cicd`) is a declarative, infrastructure-as-code toolset that manages a Microsoft data estate from a single manifest. You define your Microsoft Fabric items (lakehouses, notebooks, pipelines, semantic models, Data Agents) together with the Microsoft Entra identities and Azure resources they depend on in one `udp.yml`, then validate, plan, and deploy with one command across dev, staging, and production. It aims to close the orchestration gap between the Fabric CLI, fabric-cicd, and Terraform/Bicep by describing what resources a project needs, how they depend on each other, how configuration varies by environment, and how to deploy them in the correct order idempotently. Built on .NET 9, it does automatic topological ordering of resources, tracks deployed state and detects portal drift, supports environment-specific targeting, covers 46 Fabric item types plus Entra groups/apps and 64 Azure service types, and can reverse-generate a `udp.yml` from an existing workspace. A companion MCP server exposes deployment tools to AI agents like Claude Code and GitHub Copilot.

## Why use it

Use it when a project spans more than just Fabric items, so that Fabric, Entra, and Azure resources are described, versioned, and deployed together as one dependency-aware project rather than through separate tools and manual steps. The plan and drift-detection workflow gives you a predictable, idempotent path to promote the same manifest across environments.

## Getting started

Install the CLI as a .NET global tool (`dotnet tool install --global udp-cicd`), and optionally the MCP companion (`udp-cicd-mcp`). Run `udp-cicd init --template medallion` to scaffold a project, then `validate`, `plan --target prod`, and `deploy --target prod`. You need the .NET 9 SDK, the Azure CLI, and an active Fabric capacity; `udp-cicd diag` checks the runtime, Azure CLI, and Fabric connectivity. udp-cicd is a community project in public preview, not a Microsoft product; see the documentation site for the full manifest reference and tested item types.
