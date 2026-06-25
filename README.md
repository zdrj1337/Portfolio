# Florin-Traian Zadorojneac — Portfolio

Personal portfolio website. Built with React and Vite.

## Run locally

```bash
npm install
npm run dev
```

Then open the URL it prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

The static site is generated in `dist/`.

## Deploy (Vercel)

Push this repository to GitHub, then import it at vercel.com. Vercel auto-detects
Vite (build command `npm run build`, output directory `dist`). Every push redeploys.

## Structure

- `src/components/` — Nav, Hero, About, Projects, Skills, Footer
- `src/data/projects.js` — the project list (edit here to add or change projects)
- `src/styles.css` — all styling
- `public/cv.pdf` — the downloadable CV
