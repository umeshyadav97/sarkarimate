# SarkariMate

SarkariMate is a frontend monorepo for a public web app and an admin app built with Next.js, TypeScript, Tailwind CSS, Turborepo, and pnpm workspaces.

## Structure

- apps/web: public-facing Next.js app
- apps/admin: admin Next.js app
- packages/ui: shared UI primitives
- packages/types: shared domain types
- packages/utils: shared helpers

Each app uses a flat App Router structure without `src`. Feature code should live under `features/` when real product behavior is added. Shared packages should stay small and only hold code used by more than one app.

## Development

```bash
pnpm install
pnpm dev
```

## Checks

```bash
pnpm format
pnpm lint
pnpm build
```
