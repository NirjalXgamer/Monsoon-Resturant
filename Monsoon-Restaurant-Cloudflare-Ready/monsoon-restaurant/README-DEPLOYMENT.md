# Monsoon Restaurant — independent deployment copy

This copy removes the Replit-only Vite configuration and workspace dependency references while keeping the existing website source, styling, text, and public images.

## Build settings for Cloudflare Pages

- Framework preset: **Vite**
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/` (the folder containing this package.json)

Cloudflare's build environment will install dependencies from `package.json` and run the build command.

## Test locally (optional)

Requires a supported Node.js installation:

```sh
npm install
npm run build
npm run preview
```

The production output is written to `dist/`.

## Notes

- The original Replit project was not modified.
- `src/`, `public/`, and the existing page content were preserved.
- This package is configured for the website at the root of a custom domain (`/`).
- The build has not been executed in this preparation environment because package installation could not complete here. Cloudflare's build step will provide the definitive build check.
