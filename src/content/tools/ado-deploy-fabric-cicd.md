---
title: Deploy Microsoft Fabric items with fabric-cicd
description: Community Azure DevOps extension that deploys Fabric workspace items from a pipeline using Microsoft's open-source fabric-cicd library.
url: https://marketplace.visualstudio.com/items?itemName=ChantifiedLens.deploy-microsoft-fabric-items-fabric-cicd
docs_url: https://chantifiedlens.com/2026/03/09/simplify-microsoft-fabric-deployments-with-deploy-microsoft-fabric-items-with-fabric-cicd-an-azure-devops-extension/
category: devops-cicd
type: extension
tags: [cicd, azure-devops, deployment, automation, community]
pricing: free
source: proprietary
maintainer: community
author: Chantified Lens
status: preview
added: 2026-06-01
---

## What it does

This Azure DevOps extension adds a `DeployMicrosoftFabricItems` pipeline task that deploys Fabric workspace items (notebooks, lakehouses, data pipelines, semantic models, and more) to a target workspace using Microsoft's open-source `fabric-cicd` Python library. It wraps the library so teams can run configuration-based Fabric deployments from classic or YAML pipelines without writing the Python plumbing themselves.

## Why use it

Use it when you want `fabric-cicd`-based deployments in Azure DevOps but prefer a packaged task over maintaining your own Python step.

## Getting started

Install the extension from the Visual Studio Marketplace into your Azure DevOps organization, then add the `DeployMicrosoftFabricItems` task to your pipeline and point it at your repository directory and target workspace.
