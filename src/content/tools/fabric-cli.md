---
title: Fabric CLI
description: Official Microsoft command-line interface for managing Microsoft Fabric resources, with a file-system-inspired way to navigate and script workspaces and items.
url: https://github.com/microsoft/fabric-cli
docs_url: https://microsoft.github.io/fabric-cli/
category: platform-apis
type: cli
tags: [official, automation, cicd, deployment]
pricing: free
source: open-source
maintainer: microsoft
author: Microsoft
language: Python
status: ga
added: 2026-06-01
---

## What it does

Fabric CLI (`fab`) is the official command-line tool for interacting with Microsoft Fabric. It exposes workspaces and items through a file-system-inspired interface (you navigate, list, create, update, and delete resources much as you would files and folders), and it scripts cleanly into shell-based workflows and CI/CD pipelines.

It authenticates as an interactive user, a service principal (secret or certificate), or a managed identity, making it equally suited to local exploration and unattended automation.

## Why use it

Reach for Fabric CLI when you want a shell-native way to inspect or modify Fabric workspaces, whether in CI/CD jobs, ad-hoc scripts, or interactive sessions. The `fab deploy` command publishes items from a local folder using a YAML configuration (it uses the `fabric-cicd` library under the hood), so you can deploy a lakehouse, notebook, or SQL database without writing any Python.

## Getting started

Requires Python 3.10 or higher.

```bash
pip install ms-fabric-cli
fab auth login
fab --version
```

Run `help` inside the CLI to list available commands, or append `--help` to any command to see its flags.
