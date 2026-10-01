# Muhyideen Abdulbasit — Portfolio

Personal portfolio site. Product definition, content direction and visual
identity live in [`PRD.md`](./PRD.md); contributor/agent working rules live in
[`CLAUDE.md`](./CLAUDE.md).

## Stack

- [Vite](https://vite.dev/)
- [React 19](https://react.dev/)
- TypeScript

## Getting started

```bash
npm install
npm run dev
```

## Scripts

| Script             | Purpose                                      |
| ------------------- | --------------------------------------------- |
| `npm run dev`       | Start the Vite dev server                     |
| `npm run build`     | Type-check and build for production           |
| `npm run typecheck` | Type-check only, no build output              |
| `npm run lint`      | Run ESLint                                    |
| `npm run preview`   | Preview the production build locally          |

## Environment variables

None are required yet. If any are introduced, add them to a `.env.example`
file (committed) and keep actual values in `.env`/`.env.local` (ignored by
git, see `.gitignore`).
