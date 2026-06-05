---
title: Microsoft Fabric Extension for Azure DevOps
description: Official Microsoft Azure DevOps extension that adds the FabricCLITask, provisioning the Fabric CLI into pipelines for workspace and deployment automation.
url: https://github.com/microsoft/ms-fabric-azure-devops-extensions
category: devops-cicd
type: extension
tags: [official, cicd, azure-devops, automation, deployment]
pricing: free
source: open-source
maintainer: microsoft
author: Microsoft
language: JavaScript
status: preview
added: 2026-06-01
---

## What it does

The Microsoft Fabric Extension for Azure DevOps adds the `FabricCLITask@0` pipeline task, which automatically provisions the Fabric CLI (`fab`) into an Azure DevOps job. From there you can script Fabric operations: workspace provisioning and management, item deployment (notebooks, lakehouses, semantic models, pipelines), Git integration with Azure DevOps repositories, and triggering deployment pipelines. The task supports multiple scripting hosts, including PowerShell, PowerShell Core, Bash, and Batch, and can pin a specific Fabric CLI version.

## Why use it

Use it to run Fabric CLI automation in Azure DevOps without manually installing and authenticating the CLI on the agent. The task handles provisioning so your pipeline can focus on the Fabric commands themselves.

## Getting started

Install the extension from the Visual Studio Marketplace into your Azure DevOps organization, then add the `FabricCLITask@0` task to your YAML or classic pipeline and supply the Fabric CLI commands to run. See the repository for task inputs and examples.
