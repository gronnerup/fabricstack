---
title: Fabric Studio
description: Community VS Code extension for managing a Microsoft Fabric tenant by browsing workspaces and items, editing items, and running REST calls from the editor.
url: https://marketplace.visualstudio.com/items?itemName=GerhardBrueckl.fabricstudio
repo_url: https://github.com/gbrueckl/FabricStudio
category: ide-extensibility
type: extension
tags: [vscode, automation, community, deployment]
pricing: free
source: open-source
maintainer: community
author: Gerhard Brückl
language: TypeScript
status: ga
added: 2026-06-01
---

## What it does

Fabric Studio is a Visual Studio Code extension that manages a Microsoft Fabric tenant through the Fabric REST API. It surfaces workspaces and items in a tree browser, and via a custom file-system provider it lets you create and modify Fabric items directly in the editor. It also exposes deployment pipelines and an interface for running arbitrary REST calls.

## Why use it

Use Fabric Studio when you want to inspect and manipulate Fabric resources without leaving VS Code. It is useful for developers already working in the editor who prefer a graphical browser over the command line. It runs in both desktop VS Code and the browser (vscode.dev).

## Getting started

Install from the VS Code Extensions view (search "Fabric Studio") or install the publisher ID `GerhardBrueckl.fabricstudio` from the Marketplace, then connect to your tenant.
