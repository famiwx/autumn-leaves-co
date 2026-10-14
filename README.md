# AUTUMN LEAVES CO. — Pacific Northwest Archival Apparel

A static, three-page marketing site for a fictional slow-fashion knitwear atelier, built from a Stitch design export. Dark, nostalgic autumn aesthetic: espresso, burgundy, olive, and antique cream; Playfair Display + Plus Jakarta Sans; sharp corners and hairline borders.

## Pages

| File           | Page    | Highlights                                                                 |
| -------------- | ------- | -------------------------------------------------------------------------- |
| `index.html`   | Home    | Editorial hero with polaroid mosaic, product row, moodboard collage, brand story, journal cards, newsletter signup |
| `about.html`   | About   | Prologue hero, brand lineage, three craft pillars with color index, interactive cable-knit anatomy study, responsibility, timeline, epilogue |
| `contact.html` | Contact | Studio clock ribbon, validated contact form, showroom + direct channels sidebar, workshop still-life cards, FAQ accordion, covenant banner |

## Project structure

```
.
├── index.html
├── about.html
├── contact.html
├── css/
│   └── style.css      # shared design system (palette, type scale, components)
├── js/
│   └── main.js        # mobile nav, form validation, FAQ accordion, hotspots, studio clock
├── images/            # 31 self-hosted photographs + logo (no external hotlinks)
└── README.md
```

No build step, no framework, no dependencies.

## Preview locally

Any static file server works. From this folder:

```bash
# Python
python -m http.server 8000

# ...or Node
npx serve .
```

Then open <http://localhost:8000>.

Opening `index.html` directly in a browser (double-click) also works — all assets are relative paths.

## Deploy to Vercel

1. Push this folder to a GitHub repository (the whole folder is the project root).
2. In Vercel: **Add New → Project → import the repo**.
3. Framework preset: **Other** (Vercel auto-detects static). No build command, output directory: leave default (`.`).
4. Deploy.

Or from the CLI: `npx vercel` inside this folder.

## Forms — important note

The contact form and newsletter signups are **client-side previews only**. They validate input and show confirmation feedback in the browser, but **no message is sent or stored** — there is no backend. To make them live, connect a form service, e.g.:

- [Formspree](https://formspree.io) — point the `<form>` `action` at your Formspree endpoint.
- [Netlify Forms](https://docs.netlify.com/forms/setup/) — if hosting on Netlify instead.
- A Vercel Serverless Function / third-party API of your choice.

Until then, the on-page feedback text explicitly tells visitors their note was not sent.

## Credits

Design reference: Stitch export "Pacific Autumn Editorial" (`stitch_autumn_leaves_co_fashion`). All photography is AI-generated design-placeholder imagery from the export, self-hosted in `images/`.
