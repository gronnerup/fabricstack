---
title: Fabric Apps React Webapp Starter
description: React starter template for building Microsoft Fabric Apps that embed in the Fabric portal and read a Power BI semantic model's metadata via DAX.
url: https://github.com/Big-jpg/fabric-apps-react-webapp-starter
docs_url: https://github.com/Big-jpg/fabric-apps-react-webapp-starter/blob/main/Architecture.md
category: ide-extensibility
type: template
tags: [react, fabric-apps, rayfin, extensibility]
pricing: free
source: open-source
maintainer: community
author: Ross Farrell
language: TypeScript
status: preview
added: 2026-06-10
---

## What it does

Fabric Apps React Webapp Starter is a configurable React starter template for building Microsoft Fabric Apps, single-page apps that embed in the Fabric portal as an iframe. It connects to a configured Power BI semantic model through the Fabric embedded query bridge and renders live metadata via DAX, shipping with a small example that lists the model's tables (total, visible, hidden, and category counts). It is built on React 19, TypeScript, Tailwind CSS, and Microsoft's rayfin-client and fabric-app-data libraries.

## Why use it

Use it as a scaffold to start building your own Fabric App, with semantic-model connectivity, configuration, and a working DAX query example already wired up, instead of setting up the embedding and query bridge from scratch.

## Getting started

Use the repository as a GitHub template (or clone it), set your semantic model alias in `app.integration.json`, and run the React app. See `Architecture.md` for how the pieces fit together. Note that Fabric Apps and the `rayfin-client` library are early/preview Microsoft technology.
