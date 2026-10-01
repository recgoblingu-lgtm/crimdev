# CrimDev

A very basic static game site with three pages: home, one reusable placeholder game page, and a game submission page.

## Run locally

From this folder run `python3 -m http.server 4173` and open `http://localhost:4173`.

## Add a game

Add images under `assets/`, then add an object to `data/games.json`. The home page automatically creates a card linking to `game.html?id=YOUR_ID`. The included entry is intentionally named `PLACEHOLDER`.

## Discord webhook

The submission form includes title, description, two required image files, optional video, email, and permission confirmation. `app.js` contains a placeholder `DISCORD_WEBHOOK_URL`. Replace it before use. For production, use a server-side proxy so the real webhook URL is not public.
