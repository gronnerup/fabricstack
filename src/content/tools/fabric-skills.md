---
title: Fabric Skills
description: Curated collection of AI Agent Skills that bring Microsoft Fabric expertise into Claude and Copilot, with per-workload troubleshooting, performance remediation, diagnostic scripts, and templates that load on demand.
url: https://github.com/PatrickGallucci/fabric-skills
docs_url: https://deepwiki.com/PatrickGallucci/fabric-skills
category: ai-mcp
type: library
tags: [ai, agentic, claude, copilot, community]
pricing: free
source: open-source
maintainer: community
author: Patrick Gallucci
language: Markdown
status: ga
added: 2026-06-18
---

## What it does

Fabric Skills is a curated collection of AI Agent Skills that bring Microsoft Fabric expertise directly into an AI coding assistant like Claude or GitHub Copilot. It follows the open Agent Skills specification with a progressive-loading architecture: when you ask about a Fabric problem, only the relevant skill loads into context, keeping conversations fast and focused. The repository contains 23 skills organized across nine Fabric workload areas (Data Agent, Lakehouse, Spark, and more), each aimed at structured troubleshooting, performance remediation, and operational guidance. Every skill bundles a `SKILL.md` with diagnostic checklists and troubleshooting matrices, a `references/` folder of deep-dive guides and failure-pattern catalogs, a `scripts/` folder of ready-to-run SQL, PowerShell, or Python diagnostics, and `templates/` for fill-in-the-blank notebooks and runbooks.

## Why use it

Use it to give your AI assistant grounded, Fabric-specific playbooks for diagnosing and fixing common workload problems, so you spend less time searching documentation and more time solving the issue in front of you. Because skills load on demand, you can install many without bloating every conversation.

## Getting started

Clone the repository and copy the skills you want into `~/.claude/skills/` (user-wide) or a project's `.claude/skills/` folder; you can install all skills at once or pick individual ones. After copying, the assistant discovers them automatically based on your prompts, with no further configuration. See the documentation for the full catalog of skills and the workload areas they cover. This is a community project, not a Microsoft product.
