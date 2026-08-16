---
title: Fabric Tenancy-Wide Audit
description: A Jupyter notebook and SQL views for tenant-wide auditing of Microsoft Fabric and Power BI activity, showing who is viewing and interacting with content across the tenant.
url: https://github.com/Big-jpg/fabric-tenancy-wide-audit
category: governance-admin
type: template
tags: [governance, monitoring, audit, notebooks]
pricing: free
source: open-source
maintainer: community
author: Ross Farrell
language: SQL
status: preview
added: 2026-07-01
---

## What it does

Fabric Tenancy-Wide Audit is a package of SQL view definitions and a Jupyter notebook for auditing activity across an entire Microsoft Fabric and Power BI tenant. The notebook collects Power BI and Fabric activity events and semantic-model inventory into a lakehouse, and the numbered SQL views turn that raw data into analytical views showing who is viewing and interacting with content across the tenant. It fills a gap the platform itself does not cover, namely tenant-wide usage and engagement analytics.

## Why use it

Use it to see real adoption across your tenant: which reports and semantic models are actually used, by whom, and how often, so capacity admins and governance teams can decide based on real engagement rather than guesswork.

## Getting started

Run the audit notebook first to populate the source tables in your lakehouse, then execute the SQL view files in numbered order (or the consolidated `99_all_views_in_order.sql`) to create the analytical views. See the repository README for details.
