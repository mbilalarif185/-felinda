# Felinda Jewelry — Next.js Site

A bespoke fine-jewelry brand site built with **Next.js 15 (App Router)**, **React 19**, and **Tailwind CSS**.

## Project structure

```
.
├── app/
│   ├── layout.jsx          # Root layout, fonts, metadata
│   ├── globals.css         # Tailwind + base styles
│   ├── page.jsx            # Home page  (route: /)
│   └── about/
│       └── page.jsx        # About page (route: /about)
├── components/
│   ├── Header.jsx          # Sticky header (Logo + Nav)
│   ├── Logo.jsx
│   ├── Nav.jsx
│   ├── Footer.jsx
│   ├── ImageFrame.jsx      # Reusable next/image frame wrapper
│   └── ConsultationCTA.jsx # Reusable CTA block
├── lib/
│   ├── navigation.js       # Nav items
│   └── content.js          # Page content + image mappings
├── public/
│   └── images/             # All image assets (.webp)
├── tailwind.config.js
├── postcss.config.mjs
├── next.config.mjs
├── jsconfig.json           # @/* path alias
└── package.json
```

## Getting started

Install dependencies:

```bash
npm install
```

Run the development server (Turbopack, stable in Next 15):

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — Home page.
Open [http://localhost:3000/about](http://localhost:3000/about) — About page.

## Build for production

```bash
npm run build
npm start
```

## Available scripts

| Script              | What it does                                                       |
| ------------------- | ------------------------------------------------------------------ |
| `npm run dev`       | Dev server using **Turbopack** (recommended on Windows / OneDrive) |
| `npm run dev:webpack` | Dev server using classic webpack (fallback only)                 |
| `npm run build`     | Production build                                                   |
| `npm start`         | Run the production build                                           |
| `npm run clean`     | Delete `.next` and `node_modules/.cache`                           |
| `npm run lint`      | Run Next's ESLint                                                  |

## Stable dev workflow (Windows)

This project intentionally uses **Next.js defaults** — no custom webpack overrides
(no `parallelism`, no `LimitChunkCountPlugin`, no `splitChunks` or
`onDemandEntries` overrides) — to avoid the "Cannot find module './507.js'" /
missing `build-manifest.tmp` / Fast Refresh full-reload class of errors.

If you ever see those errors come back:

1. Make sure **only one** dev server is running for this project. Multiple
   `next dev` instances against the same `.next/` directory will race and
   corrupt webpack chunks. On Windows:

   ```powershell
   Get-Process node | Where-Object { $_.Path -like "*Program Files\nodejs*" }
   ```

   should show **one** process while you're developing (kill the rest).

2. Clear the build cache and restart:

   ```bash
   npm run clean
   npm run dev
   ```

3. If the project lives under a synced folder (OneDrive / Dropbox / Google
   Drive), prefer Turbopack (`npm run dev`) over webpack — it's far less
   sensitive to file-locking from sync clients and antivirus.

## Notes

- All images are served from `public/images/` and rendered through Next.js's `<Image>` component for automatic optimization.
- Typography uses `Cormorant Garamond` (serif) and `Inter` (sans-serif) via `next/font/google`.
- Brand colors are exposed as Tailwind tokens (`cream`, `ink`, `rose`, `roseSoft`, `shell`, `line`, `clay`, `muted`).
- Repeated UI (Header, Nav, Footer, CTA, image frames) is extracted into `/components`.
