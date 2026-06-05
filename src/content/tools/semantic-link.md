---
title: Semantic Link (SemPy)
description: Microsoft's Python library bridging Power BI semantic models and the Fabric data science experience, exposing models and DAX to pandas in notebooks.
url: https://learn.microsoft.com/fabric/data-science/semantic-link-overview
docs_url: https://learn.microsoft.com/python/api/semantic-link-sempy/
category: data-science-ml
type: library
tags: [official, semantic-modeling, automation]
pricing: free
source: proprietary
maintainer: microsoft
author: Microsoft
language: Python
status: ga
added: 2026-06-01
---

## What it does

Semantic Link (SemPy) is Microsoft's Python library that bridges Power BI semantic models and the Fabric data science experience. It lets data scientists read models, evaluate DAX and measures, and propagate semantic metadata into pandas DataFrames inside notebooks. It also exposes a `FabricRestClient` and admin and data-access helpers, and is pre-installed in the Fabric Spark runtime.

## Why use it

Use it to work with semantic models programmatically from notebooks, combining governed Power BI measures with the Python data-science ecosystem. The community-maintained `semantic-link-labs` library builds an extensive set of higher-level functions on top of it.

## Getting started

```bash
pip install semantic-link
```

It is pre-installed in Fabric notebooks, where you can import `sempy`.
