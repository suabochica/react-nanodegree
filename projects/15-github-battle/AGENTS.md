# GitHub Battle - Agent Guidance

## Commands
- `pnpm start` - Start webpack-dev-server (hot reload)
- `pnpm run build` - Production build to `dist/`

## No test/lint/typecheck scripts
This project has no configured `pnpm run lint`, `pnpm run typecheck`, or test scripts. TypeScript type-checking is enabled in `tsconfig.json` but not exposed as an npm script.

## Project structure
- Entry: `app/index.tsx`
- Output: `dist/` folder
- Source: `app/` directory (not `src/`)

## Tech quirks
- React 16.8 with class components (hooks course but some class components still present)
- TypeScript: `jsx: "react"` (classic runtime, not automatic runtime)
- tsconfig strict mode enabled
- Webpack 4 (older version)
- React Router v5 (not v6)
- Routes in `index.tsx` are mostly commented out; only 404 route is active

## Node version
Check `.nvmrc` for required Node version (likely v12-14 era based on package versions).