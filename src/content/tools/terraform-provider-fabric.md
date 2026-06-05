---
title: Terraform Provider for Microsoft Fabric
description: Microsoft's official Terraform provider for managing Microsoft Fabric resources (workspaces, capacities, and items) declaratively as infrastructure-as-code.
url: https://registry.terraform.io/providers/microsoft/fabric/latest
docs_url: https://registry.terraform.io/providers/microsoft/fabric/latest/docs
repo_url: https://github.com/microsoft/terraform-provider-fabric
category: devops-cicd
type: library
tags: [official, iac, terraform, automation, deployment]
pricing: free
source: open-source
maintainer: microsoft
author: Microsoft
language: Go
status: ga
added: 2026-06-01
---

## What it does

The Terraform Provider for Microsoft Fabric lets you manage Fabric resources (workspaces, capacities, environments, and other items) declaratively with HashiCorp Terraform. It is published by Microsoft on the official Terraform Registry under the `microsoft` namespace.

## Why use it

Use it when you manage Fabric as infrastructure-as-code alongside the rest of your Azure estate, so workspaces and capacities are provisioned reproducibly and reviewed through pull requests. Note that, while Microsoft develops it, the provider is supported through GitHub issues and discussions rather than standard Microsoft product support.

## Getting started

```hcl
terraform {
  required_providers {
    fabric = {
      source = "microsoft/fabric"
    }
  }
}
```

Run `terraform init` to download the provider. Bootstrap examples are at https://aka.ms/FabricTF/quickstart.
