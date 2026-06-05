---
title: VertiPaq Analyzer
description: Open-source tooling to inspect the storage structures of a tabular model, including table and column sizes, cardinality, relationships, and memory.
url: https://www.sqlbi.com/tools/vertipaq-analyzer/
repo_url: https://github.com/sql-bi/VertiPaq-Analyzer
category: dax-performance
type: library
tags: [dax, semantic-modeling, performance]
pricing: free
source: open-source
maintainer: vendor
author: SQLBI
language: C#
status: ga
added: 2026-06-01
---

## What it does

VertiPaq Analyzer inspects the storage structures of a Power BI or Analysis Services Tabular model: tables, columns, relationships, measures, partitions, sizes, cardinality, segments, and resident vs pageable memory. It exists in three forms: a free Excel template that reads VPAX files, the open-source MIT-licensed .NET libraries (the `Dax.Vpax` NuGet packages) that produce and read the VPAX format, and an integration embedded in DAX Studio's View Metrics feature.

## Why use it

Use it to understand exactly where a model spends memory (which columns are expensive, where cardinality is high) to guide model size optimization. The VPAX format also makes model metadata portable across tools.

## Getting started

The easiest path is DAX Studio: open a model and choose **Advanced → View Metrics**. Alternatively, export a VPAX from DAX Studio and open it in the Excel template at sqlbi.com, or reference the `Dax.Vpax` NuGet packages from the GitHub repository.
