---
title: FabricOps
description: Microsoft Fabric automation project demonstrating enterprise DevOps, infrastructure-as-code, and CI/CD workflows for data-platform delivery.
url: https://github.com/gronnerup/FabricOps
category: devops-cicd
type: framework
tags: [cicd, automation, dataops, iac, community]
pricing: free
source: open-source
maintainer: community
author: Peer Grønnerup
language: Python
status: preview
added: 2026-06-01
---

## What it does

FabricOps is a Microsoft Fabric automation project that demonstrates enterprise-grade DevOps practices for data-platform delivery: infrastructure-as-code, multi-environment workspace provisioning and synchronization, feature-based development workflows, semantic-model quality validation with Best Practice Analyzer rules, and cross-workspace deployments. It builds on `fabric-cicd`, the Fabric CLI, Tabular Editor, and Azure DevOps or GitHub, authenticating via service principals.

## Why use it

Use FabricOps as a reference implementation and boilerplate for stitching together a complete Fabric CI/CD pipeline (from provisioning to validation to promotion) rather than a supported product. It is well suited to teams designing their own DevOps approach who want a worked example to adapt.

## Getting started

Clone the repository, configure a service principal and environment settings, then run the locale setup script for your platform (`locale_setup_azuredevops.py` or `locale_setup_github.py`) followed by the provisioning pipeline. Requires a Fabric capacity and Fabric CLI 1.0.0 or later.
