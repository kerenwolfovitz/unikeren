# unikeren.co.il

Portfolio site for Keren Wolfovitz — a rebuild of the Wix site at unikeren.co.il as a
plain React app, so it can be hosted for free instead of on a Wix subscription.

## Running it on your machine

```bash
bun install
bun run dev
```

Then open the address it prints (usually http://localhost:5173).

## Building for production

```bash
bun run build
```

The finished site lands in `dist/` — that folder is what you upload to a host.

## Where the content lives

| What you want to change | File |
| --- | --- |
| The five projects on the home page (titles, text, Figma links) | `src/data/projects.ts` |
| Phone, email, CV link, social links, menu labels | `src/site.ts` |
| "A bit about me" intro | `src/pages/Home.tsx` |
| Management page | `src/pages/Management.tsx` |
| Design Systems page | `src/pages/DesignSystems.tsx` |
| A Blast from the Past page | `src/pages/BlastFromThePast.tsx` |
| Colours and fonts | `src/index.css` |
| Photos and screenshots | `public/img/` |

## Pages

| Address | Page |
| --- | --- |
| `/` | Home — recent projects |
| `/management` | Management |
| `/design-systems` | Design Systems |
| `/blast-from-the-past` | A Blast from the Past |

The old Wix addresses (`/about-9`, `/general-8`, `/about-1`, `/home`) redirect to the new
ones, so existing links and bookmarks keep working.

## Hosting

The site is a static build, so any static host works. `netlify.toml`, `vercel.json` and
`public/_redirects` are already set up so that the sub-pages resolve correctly.
