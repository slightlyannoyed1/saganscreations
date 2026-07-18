# Sagan's Creations

A simple, colorful, single-page showcase site for handmade creations —
"Cute Food Animals" (polymer clay) and "Plushie Creations" (hand-sewn),
plus a custom-combo builder.

This is a plain HTML/CSS site with no build step, so it deploys to
[Netlify](https://netlify.com) as-is.

## Files

- `index.html` — the whole site (one page)
- `styles.css` — all the styling/colors
- `script.js` — powers the custom-combo emoji picker
- `images/` — put your product photos here (see `images/README.md` for how to swap them in)
- `netlify.toml` — tells Netlify to publish the root folder directly

## Things to fill in later

- **Photos** — see `images/README.md` for instructions on replacing the "Photo coming soon!" placeholders.
- **Plushie pricing** — in `index.html`, search for "Pricing coming soon!" in the Plushie Creations section and replace with real prices.
- **YouTube link** — in `index.html`, search for `id="youtube-link"` and update the `href="#"` with your channel URL.
- **Payment/contact info** — in `index.html`, search for "How to Order" and fill in how buyers should reach you (Venmo/PayPal/cash, contact method).

## Deploying to Netlify

1. Push this repo to GitHub (already done if you're reading this from GitHub).
2. In Netlify, click **Add new site → Import an existing project**.
3. Connect your GitHub account and select this repository.
4. Build settings: leave the build command **empty** and set the publish directory to `.` (the repo root). Netlify will pick this up automatically from `netlify.toml`.
5. Click **Deploy** — your site will be live at a `netlify.app` URL, which you can customize later.

Any time you push changes to GitHub, Netlify will automatically redeploy the site.
