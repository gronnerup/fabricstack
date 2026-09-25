---
title: duckrun
description: Python library that runs SQL in DuckDB and reads and writes Delta Lake tables on OneLake, locally, or in cloud object storage, with a dbt adapter that materializes models as Delta tables.
url: https://github.com/djouallah/duckrun
docs_url: https://djouallah.github.io/duckrun/
category: data-engineering
type: library
tags: [duckdb, delta, dbt, onelake, notebooks, community]
pricing: free
source: open-source
maintainer: community
author: Mimoune Djouallah
language: Python
status: ga
added: 2026-09-25
---

## What it does

duckrun is a thin Python layer that combines DuckDB as the query engine with delta-rs for reading and writing Delta Lake tables. It works against a local path, OneLake, S3, GCS, or ADLS, and is designed to run inside a Microsoft Fabric notebook or on a developer machine. The library exposes two ways of working: a `connect()` helper for querying and writing Delta tables straight from SQL in a notebook, and a dbt adapter built on dbt-duckdb that materializes `table` and `incremental` models as Delta tables in a Lakehouse.

Writes are opt-in (`read_only=False`) and every write is snapshot-pinned, so concurrent writers fail loudly rather than silently interleaving. Plain DML such as `INSERT`, `UPDATE`, `DELETE`, and `MERGE` routes to delta-rs, and Delta time travel is available through `delta_scan()` with a version parameter.

## Why use it

Use it when you want a lightweight, single-process SQL engine over Lakehouse Delta tables without starting a Spark session, for example for exploration, small to medium transformations, or local development against OneLake. Multiple Lakehouses and Warehouses can be attached to one connection and joined by three-part name, which makes it practical for cross-Lakehouse queries and for Bronze, Silver, and Gold medallion layouts. The dbt adapter lets a dbt project target one or more Fabric Lakehouses as write roots.

## Getting started

Install from PyPI. In a Fabric notebook, upgrade and restart the kernel, since duckrun needs a newer DuckDB than the bundled build:

```python
!pip install duckrun --upgrade
notebookutils.session.restartPython()
```

Then connect to a Lakehouse and query it:

```python
import duckrun

conn = duckrun.connect("abfss://<workspace_id>@onelake.dfs.fabric.microsoft.com/<lakehouse_id>/Tables/dbo")
conn.sql("SHOW TABLES").show()
```

For the dbt adapter, install the extra with `pip install "duckrun[dbt]"` and point a profile of type `duckrun` at a Lakehouse `Tables` path. Requires Python 3.11 or later. Licensed under MIT; the author notes it is a personal project not affiliated with any employer or vendor.
