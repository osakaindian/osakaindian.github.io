# Osaka Indian Association — website

Static site built with [Astro](https://astro.build). No database, no server, no
monthly bill. It builds to plain HTML and is served free from GitHub Pages.

## Running it on your laptop

You need [Node.js](https://nodejs.org) 20 or newer.

```bash
npm install     # once
npm run dev     # then open http://localhost:4321
```

`npm run build` produces the finished site in `dist/`. `npm run preview` to view static website at port 4321

## Where things live

| I want to change… | Edit |
| --- | --- |
| Email address, social links, join form | `src/site.config.ts` |
| Committee members | `team` in `src/site.config.ts` |
| Navigation menu | `nav` in `src/site.config.ts` |
| An event | a file in `src/content/events/` — see `ADDING-AN-EVENT.md` |
| The "Living in Osaka" guide | `sections` at the top of `src/pages/resources.astro` |
| Colours and fonts | `:root` in `src/styles/global.css` |
| Page text | the matching file in `src/pages/` |

Photos and the logo go in `public/`. A file at `public/images/diwali.jpg` is
referenced in the site as `/images/diwali.jpg`.

## Deploying

The site deploys itself. Every push to `main` triggers
`.github/workflows/deploy.yml`, which builds the site and publishes it.

One-time setup on a new repository:

1. Settings → Pages → Build and deployment → Source: **GitHub Actions**
2. Push to `main` and watch the Actions tab.

## Custom domain

When the domain is bought:

1. Create a file `public/CNAME` containing only the bare domain, e.g.
   `osakaindian.org` — no `https://`, no trailing slash.
2. At the registrar, point the apex record at GitHub's four Pages IP addresses
   and add a `CNAME` record for `www` pointing to
   `<org>.github.io`. GitHub's Pages documentation lists the current IPs.
3. Change `site:` in `astro.config.mjs` to the new domain.
4. Settings → Pages → tick **Enforce HTTPS** once the certificate is issued
   (usually within an hour).

## Handing over

This repository is meant to sit in a GitHub **organisation**, not a personal
account, so committee members can be added and removed without moving anything.
When leadership changes, add the new committee to the organisation and remove
the people who have left. The site keeps working.

Keep the repository named `<org-name>.github.io` — that is what makes the site
serve from the root path. If you rename it, you will also need to set `base:`
in `astro.config.mjs` and re-check every image path.
