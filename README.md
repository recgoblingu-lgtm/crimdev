# CrimDev

CrimDev is a static, Steam-inspired indie game shelf built with plain HTML, CSS, and JavaScript. There is no login page and no backend required for the catalog.

## Run it

Serve this folder from any static host or run `python3 -m http.server 4173` from the project root, then open `http://localhost:4173`.

## Add a new game

1. Add the game's cover and feature images to `assets/games/`.
2. Add another object to `data/games.json` with a unique `id`, title, description, `cover`, `banner`, `screenshots`, genres, developer, release, platforms, and price.
3. Commit and push to GitHub. The home page will render a new card automatically, and the reusable `game.html?id=YOUR_ID` page will render its details.

The included `Neon Rush` entry is the placeholder game. The SVG assets are intentionally easy to replace with PNG, JPG, or more SVG files.

## Discord submissions

`submit.html` supports a title, description, required thumbnail/cover image, required feature image, optional video, and contact email. The form is currently in demo mode because `DISCORD_WEBHOOK_URL` in `app.js` is a placeholder. Replace it before going live. For production, route webhook requests through a serverless function so the real webhook URL is not exposed in the browser.
