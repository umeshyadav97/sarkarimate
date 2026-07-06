# Architecture Overview

This repository follows a simple feature-first architecture for two independent Next.js applications that share only the code needed by both apps.

## Principles

- Clear separation between apps and shared packages
- Path aliases for clean imports
- Shared UI primitives, domain types, and reusable utilities only
- No placeholder routes, sample APIs, or folders for speculative future use
- Add middleware, providers, stores, and feature subfolders only when a real workflow needs them
