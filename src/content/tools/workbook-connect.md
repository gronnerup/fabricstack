---
title: Workbook Connect
description: Windows Excel add-in that loads database tables into a worksheet and writes inserts, updates, and deletes back to Fabric SQL Database, Fabric Warehouse, SQL Server, and Azure SQL.
url: https://www.workbookconnect.com
docs_url: https://www.workbookconnect.com/guide
category: databases
type: extension
tags: [excel, data-entry, master-data, validation, write-back]
pricing: freemium
source: proprietary
maintainer: vendor
author: Plainsight
language: C#
status: ga
added: 2026-09-25
---

## What it does

Workbook Connect is a Windows Excel add-in from Plainsight that connects to a table in Fabric SQL Database, Fabric Warehouse, SQL Server, Azure SQL, Databricks SQL Warehouse, or PostgreSQL, loads the rows into an Excel table, and writes changes back as generated `INSERT`, `UPDATE`, and `DELETE` statements. It creates nothing server-side and honours the signed-in login's database permissions. Editable and read-only columns are distinguished in the sheet, a status column shows what each row will do on the next commit, and validation rules run before any write. Foreign keys surface as Excel dropdowns, column types are enforced, and optimistic concurrency detects rows changed by someone else since they were loaded.

On SQL Server and Fabric SQL Database, a commit runs as a single transaction that rolls back entirely on failure. On Fabric Warehouse, a failure part-way through can leave earlier rows written, which the user guide calls out.

## Why use it

Use it when business users need to maintain master data, mappings, budgets, or other reference tables that feed Fabric models, without a custom data-entry app or ad-hoc SQL. Configurators define which columns are editable and which validation rules apply; users then work in the familiar Excel grid and commit when ready. Authentication supports Microsoft Entra ID with MFA, service principals, managed identities, Windows integrated, and SQL logins, so existing database permissions carry over.

## Getting started

Download the signed installer from the website (an MSI is available for enterprise deployment). It requires Windows 10 or later, desktop Excel (Microsoft 365, 2019, or 2021 and later), .NET Framework 4.7.2, and the VSTO runtime; the installer checks these. Once installed, a Workbook Connect ribbon tab appears in Excel: add a connection, pick a table, edit, and commit.

The free tier has no expiry and covers connecting, editing, validation, and committing with fair-use limits. The Pro plan (EUR 8 per user per month) adds role management, validation-rule authoring, custom branding, and priority support. The user guide is at https://www.workbookconnect.com/guide.
