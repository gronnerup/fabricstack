---
title: ALM Toolkit
description: Free, open-source tool to manage Microsoft Power BI datasets, with database compare, code merging, deployment, and source-control integration.
url: https://github.com/microsoft/Analysis-Services/tree/master/AlmToolkit
category: semantic-modeling
type: desktop-app
tags: [deployment, semantic-modeling, automation]
pricing: free
source: open-source
maintainer: microsoft
author: Christian Wade
language: C#
status: ga
added: 2026-06-01
---

## What it does

ALM Toolkit is a free, open-source tool to manage Microsoft Power BI datasets. It handles database compare, code merging, easy deployment, source-control integration, reusing definitions, and moving from self-service to corporate BI. In practice, it compares two models (or a model and a file) and selectively merges and deploys the metadata differences across workspaces and environments. It is based on the source code of BISM Normalizer, which provides similar features for Analysis Services Tabular models.

## Why use it

Use it to deploy only the changes between two models. For example, you can promote measure and structure updates from development to production without overwriting data or unrelated objects.

## Getting started

Download the latest release from the GitHub repository at https://github.com/microsoft/Analysis-Services/tree/master/AlmToolkit. It integrates with Power BI Desktop as an external tool.
