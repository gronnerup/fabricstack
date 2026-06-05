---
title: Semantic Link Labs
description: Microsoft's open-source Python library extending Fabric's Semantic Link (sempy) with functions for Power BI, Fabric, Azure, and Microsoft Graph.
url: https://github.com/microsoft/semantic-link-labs
docs_url: https://semantic-link-labs.readthedocs.io/en/stable/
repo_url: https://github.com/microsoft/semantic-link-labs
category: semantic-modeling
type: library
tags: [official, semantic-modeling, automation, migration]
pricing: free
source: open-source
maintainer: microsoft
author: Microsoft
language: Python
status: preview
added: 2026-06-01
---

## What it does

Semantic Link Labs is a Python library that extends Microsoft Fabric's Semantic Link (`sempy`) with a large set of wrapper functions over the Power BI, Fabric, Azure, and Microsoft Graph APIs. It covers semantic-model management, Tabular Object Model access, Direct Lake operations, report analysis, Best Practice Analyzer, and more, and is designed for use inside Fabric notebooks (imported as `sempy_labs`).

## Why use it

Use it to automate semantic-model and tenant operations from notebooks (migration, documentation, optimization, and administration) with high-level functions instead of raw REST calls. It often provides early access to capabilities ahead of the base semantic link library.

## Getting started

```bash
pip install semantic-link-labs
```

```python
import sempy_labs
```
