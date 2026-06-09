---
title: ModelViz
description: Web app that parses Power BI and Microsoft Fabric semantic model archives and renders interactive ERD, star schema, lineage, and RLS diagrams.
url: https://modelviz-alpha.vercel.app/
repo_url: https://github.com/Big-jpg/modelviz
category: semantic-modeling
type: web-app
tags: [tmdl, lineage, visualization, community]
pricing: free
source: source-available
maintainer: community
author: Ross Farrell
language: TypeScript
status: preview
added: 2026-06-09
---

## What it does

ModelViz is a web application for visualizing Power BI and Microsoft Fabric semantic models. You upload an exported `.SemanticModel` `.zip` archive and it parses the TMDL in the browser, then renders interactive diagrams for relationships (ERD), star-schema structure, data-source lineage, and RLS roles, alongside a model summary of tables, measures, columns, and relationships. It detects storage modes (Import, DirectQuery, Direct Lake, and composite) and includes an obfuscation toggle for sharing without exposing sensitive names.

## Why use it

Use it to quickly understand or document a semantic model's structure, lineage, and security without opening it in a full modeling tool, and to share readable diagrams with others.

## Getting started

Open the app at https://modelviz-alpha.vercel.app/ and upload an exported `.SemanticModel` `.zip` (the archive Power BI and Fabric produce, containing `model.tmdl`, `relationships.tmdl`, and table definitions). The project is in alpha; see the GitHub repository for source and notes.
