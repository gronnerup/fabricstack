---
title: Microsoft IQ Solution Accelerator
description: Ready-to-deploy Microsoft solution accelerator built on Microsoft Fabric, Microsoft Foundry, and Microsoft 365 Copilot, unifying Fabric IQ, Foundry IQ, and Work IQ for disruption detection, analysis, and response.
url: https://github.com/microsoft/microsoft-iq-solution-accelerator
docs_url: https://github.com/microsoft/microsoft-iq-solution-accelerator/blob/main/docs/DeploymentGuide.md
category: ai-mcp
type: template
tags: [official, ai, accelerator, fabric-iq, foundry-iq, work-iq]
pricing: free
source: open-source
maintainer: microsoft
author: Microsoft
language: Python
status: preview
added: 2026-06-18
---

## What it does

The Microsoft IQ Solution Accelerator is an AI-powered enterprise intelligence accelerator that unifies enterprise data, business knowledge, and execution workflows into a shared context. It connects unified data, semantic models, and ontologies in Fabric IQ, enterprise knowledge and retrieval in Foundry IQ, and work context in Work IQ to identify signals, assess impact, and recommend responses. The reference scenario is supply chain disruption: teams assess risk and inventory, evaluate sourcing options, and coordinate actions to protect availability. Built on Microsoft 365 Copilot, Microsoft Foundry, and Microsoft Fabric, it ships a Copilot Studio agent and response workflow, a Foundry chat agent for supplier contracts and policies, and a Fabric Ontology Data Agent that answers questions about customers, products, inventory, suppliers, and demand forecasts. It deploys as an azd template with Bicep infrastructure, synthetic sample data, and a documented data generation process.

## Why use it

Use it as a starting point for building a shared intelligence layer across Fabric, Foundry, and Copilot, rather than wiring the data, knowledge, and workflow components together from scratch. The architecture is designed to be adapted from the bundled supply chain scenario to other business use cases.

## Getting started

Follow the deployment guide in the repository. You need an Azure subscription with Contributor and RBAC permissions, plus access to the Microsoft 365 and Copilot licenses listed in the prerequisites; run `azd up` to deploy and `azd down` to tear it down and avoid ongoing costs. Some capabilities, including MCP server integration, are in preview, so the accelerator is best suited for evaluation, experimentation, and demonstration. It is a Microsoft solution accelerator provided as-is, not an officially supported product.
