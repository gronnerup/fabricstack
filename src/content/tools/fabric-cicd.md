---
title: fabric-cicd
description: Python library for deploying Microsoft Fabric items from source control into workspaces, designed for scripted CI/CD pipelines.
url: https://github.com/microsoft/fabric-cicd
docs_url: https://microsoft.github.io/fabric-cicd/
category: devops-cicd
type: library
tags: [official, cicd, deployment, automation, dataops]
pricing: free
source: open-source
maintainer: microsoft
author: Microsoft
language: Python
status: ga
added: 2026-06-01
---

## What it does

fabric-cicd is a Python library that publishes Microsoft Fabric items (notebooks, data pipelines, semantic models, reports, lakehouses, environments, and more) from a source-controlled repository directory into a target workspace. You point it at a folder and a workspace, and it figures out what to create, update, or remove so the workspace matches your repo.

It supports parameterization so the same source deploys cleanly across environments (dev, test, prod), substituting connection strings, workspace IDs, and other values per stage.

## Why use it

Use fabric-cicd when you want code-first, repeatable deployments of Fabric content as part of a CI/CD pipeline, whether GitHub Actions, Azure DevOps, or any runner that can execute Python. Because it's a library rather than a black-box task, you script the deployment logic yourself and keep full control over what gets published and when. The Fabric CLI's `fab deploy` command builds on this same library.

## Getting started

```bash
pip install fabric-cicd
```

```python
from fabric_cicd import FabricWorkspace, publish_all_items

workspace = FabricWorkspace(
    workspace_id="<your-workspace-id>",
    repository_directory="./fabric_items",
    item_type_in_scope=["Notebook", "DataPipeline"],
)
publish_all_items(workspace)
```

See the documentation for authentication options and parameterization.
