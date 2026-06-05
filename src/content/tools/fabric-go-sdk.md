---
title: Fabric SDK for Go
description: Microsoft's open-source Go SDK for programmatic access to Microsoft Fabric services, currently experimental and for evaluation only.
url: https://github.com/microsoft/fabric-sdk-go
docs_url: https://pkg.go.dev/github.com/microsoft/fabric-sdk-go
category: platform-apis
type: sdk
tags: [official, automation]
pricing: free
source: open-source
maintainer: microsoft
author: Microsoft
language: Go
status: preview
added: 2026-06-01
---

## What it does

The Fabric SDK for Go is a data-plane SDK that provides programmatic access to Microsoft Fabric services from Go, letting applications interact with Fabric items and APIs using an `azcore`-style client. Microsoft labels the code experimental and provided solely for evaluation; it is explicitly not intended for production use.

## Why use it

Use it when you build Fabric tooling in Go and want a typed client over the Fabric APIs, with the understanding that it is pre-release and subject to change.

## Getting started

```bash
go get -u github.com/microsoft/fabric-sdk-go
```
