---
title: Fabric Jumpstart
description: Curated, tested Microsoft Fabric solution accelerators (data, notebooks, pipelines, and reports) that install into your workspace with a single command.
url: https://jumpstart.fabric.microsoft.com/
docs_url: https://jumpstart.fabric.microsoft.com/getting-started/
repo_url: https://github.com/microsoft/fabric-jumpstart
category: data-engineering
type: template
tags: [official, automation, notebooks]
pricing: free
source: open-source
maintainer: microsoft
author: Microsoft
language: Python
status: preview
added: 2026-06-09
---

## What it does

Fabric Jumpstart provides high-quality, tested solution accelerators for Microsoft Fabric. Each Jumpstart is a self-contained, curated solution (data, notebooks, pipelines, reports, and supporting assets) that installs directly into your workspace with a single command. Data is bundled or generated for you, and post-install notebooks walk you through any manual configuration.

## Why use it

Use it to stand up a complete, working Fabric scenario in minutes, whether for a demo, a proof of concept, or a starting point you then adapt, instead of assembling the pieces by hand.

## Getting started

Install the package, then install a Jumpstart from a Fabric notebook:

```python
pip install fabric-jumpstart
```

```python
jumpstart.install("spark-structured-streaming")
```

Browse the available Jumpstarts and the getting-started guide at jumpstart.fabric.microsoft.com.
