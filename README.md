# Austin Miller's portfolio

A static Astro portfolio for **https://acmill1957.github.io/**. GitHub Pages hosts the generated HTML, CSS, and images; no application server or paid hosting is required. The site ships no client-side JavaScript.

## Local development

Use Node.js 22.12 or newer.

```sh
npm ci
npm run dev
```

```sh
npm run check
npm run build
npm run preview
```

The production build is generated in `dist/`.

## Update content

- `src/data/profile.ts`: profile, about text, navigation, calls to action, and footer links.
- `src/data/experience.ts`: jobs, dates, responsibilities, and tags.
- `src/data/skills.ts`: skill cards and icon selection.
- `src/data/education.ts`: degrees, years, and optional courses.
- `public/images/`: profile photo and logos.

All eight reusable components live in `src/components/`. Theme colors and font families are defined in `tailwind.config.mjs`. Google Fonts supplies Space Grotesk, IBM Plex Sans, and IBM Plex Mono.

The official `@astrojs/tailwind` integration requires Tailwind 3 and Astro 5, so this project uses those compatible major versions. There is no Tailwind CDN script.

### Remaining content TODOs

Keep `[Start]`, `[Year]`, `[GitHub]`, `[LinkedIn]`, and `[Résumé PDF]` until their actual values are available. Replace null link destinations in `profile.ts` with real URLs to enable the links. Unfinished links currently render as plain text.

## GitHub Pages deployment

1. In this repository's **Settings → Pages → Build and deployment**, select **GitHub Actions** as the source.
2. Commit and push the project to `main`.
3. The **Deploy to GitHub Pages** workflow installs dependencies, checks the project, builds it with the official `withastro/action`, and publishes `dist/` through `actions/deploy-pages`.

The workflow can also be run manually from the Actions tab. `astro.config.mjs` sets `site` to `https://acmill1957.github.io` and `base` to `/`, because `acmill1957.github.io` is a user Pages repository rather than a project subdirectory.

## Verification

- `npm run check`: no errors or warnings.
- `npm run build`: successful static build with no client-side scripts.
- Headless Chrome: compared against the supplied design at 1440px, 390px, and 320px; all images load and no horizontal overflow occurs. The portrait shrinks at narrow widths to keep its offset border inside the screen.
- Lighthouse accessibility: 100 for both mobile and desktop. Reports and screenshots are stored locally in the ignored `.qa/` directory.

### Dependency compatibility

The requested official Tailwind integration's peer dependencies currently limit this project to Astro 5 and Tailwind 3. The installed toolchain has 11 npm audit findings (including high and critical findings). GitHub Pages serves only the static output; this project uses no server rendering, hydrated islands, view transitions, or image optimization. Moving to current Astro and Tailwind major versions would require changing the requested integration to the newer Vite plugin.
