# CrimDev

CrimDev is a small static game site made with direct HTML, CSS, and JavaScript.

## Pages

- `index.html` — home page with the PLACEHOLDER game card
- `game.html` — basic PLACEHOLDER game page
- `submit.html` — game submission form

## Add a game

There is no games.json file. To add a game, copy `game.html`, change the title, description, image, and details, then add a new card link directly inside the game list in `index.html`.

## Discord webhook

The submission form includes a title, description, two required image uploads, an optional video, email, and permission confirmation. `app.js` contains a placeholder `DISCORD_WEBHOOK_URL`. Replace it before use. For production, use a server-side proxy so the real webhook URL is not public.
