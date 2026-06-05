---
title: pbi-tools
description: Community command-line tool that brings source control to Power BI by extracting .pbix files into a diff-able folder structure and compiling them back.
url: https://pbi.tools
docs_url: https://pbi.tools/
repo_url: https://github.com/pbi-tools/pbi-tools
category: reporting-embedding
type: cli
tags: [pbix, cicd, automation, community]
pricing: free
source: open-source
maintainer: community
author: Mathias Thierbach
language: C#
status: ga
added: 2026-06-01
---

## What it does

pbi-tools is a command-line tool that brings source-control workflows to Power BI. It extracts `.pbix` files into a human-readable, diff-able folder structure and compiles them back, working alongside Power BI Desktop to enable branching, merging, and CI/CD for Power BI projects.

## Why use it

Use it to put Power BI reports and models under meaningful version control, reviewing changes as diffs and automating builds, particularly for projects that predate or sit outside the native PBIP format. Note that pbi-tools is licensed under AGPL-3.0, a strong copyleft license worth reviewing if compliance matters for your use.

## Getting started

Download the release from the GitHub releases page; it ships as a portable CLI. See https://pbi.tools/cli/ for command reference.
