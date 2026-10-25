# Qingsong Wei — Research, in the open

The personal research website of **Qingsong Wei**, built with
[Astro](https://astro.build) and deployed as static assets on
[Cloudflare Workers](https://workers.cloudflare.com).

- Live site: <https://qingsong-research.drwell86.workers.dev>
- GitHub: <https://github.com/DenyW/qingsong-research>
- Language: English

## What is included

- **Homepage** — portrait placeholder, research directions, selected
  publications, open-source projects, field notes, experience, research funding,
  patents, methods, and contact.
- **Publications** — all 27 peer-reviewed journal articles, grouped by year,
  with DOI links and the author's name highlighted. Available at
  `/publications/`.
- **Field notes** — three essays with an RSS feed at `/rss.xml`.
- **SEO** — sitemap, canonical URLs, Open Graph metadata, and JSON-LD for the
  person, collection pages, and articles.
- **Privacy** — no analytics, no cookies, no third-party font or script
  requests.

## Content sources

The site only publishes information that can be checked against a public record
or a document supplied by Qingsong Wei.

- [ORCID record 0000-0001-6164-350X](https://orcid.org/0000-0001-6164-350X)
- [ResearchGate profile](https://www.researchgate.net/profile/Qingsong-Wei-3)
- [Crossref](https://www.crossref.org/) metadata for publication details
- Curriculum vitae, August 2026, for the current appointment, education,
  research funding, patents, technical skills, and service roles
- Public GitHub repositories for the projects section

Publication titles, author order, journal names, volumes, and DOIs follow the
Crossref record. Employment, education, funding, and patent details follow the
CV and ORCID record.

## Local development

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

The development server prints a local URL, usually
`http://localhost:4321/`.

Build and preview the production output:

```bash
npm run build
npm run preview
```

## Deployment

The repository is configured for Cloudflare Workers static assets through
`wrangler.jsonc`.

1. In the Cloudflare dashboard, create a Worker and connect it to this GitHub
   repository.
2. Use `npm run build` as the build command.
3. Use `npx wrangler deploy` as the deploy command.
4. Set the `SITE_URL` environment variable to the production URL so canonical
   links, the sitemap, and `robots.txt` use the correct domain.

`SITE_URL` is read in `astro.config.mjs`. The fallback is the current
`workers.dev` URL, so a normal build works without extra configuration.

Manual deployment from a local checkout:

```bash
npm run build
npx wrangler deploy
```

## Project structure

```text
src/
  components/      UI sections and page-level components
  data/            site content, publications, and field notes
  i18n/            UI strings and route helpers
  layouts/         shared HTML shell, SEO, and JSON-LD
  pages/           English routes
  styles/          design system and responsive rules
public/            static assets, headers, manifest
```

## Placeholders and privacy

- **Portrait** — `public/images/portrait-placeholder.svg` is an abstract
  placeholder. Replace it with an authorized 4:5 photograph and update the
  `portrait` entry in `src/data/site.ts`.
- **Phone number** — the CV includes a phone number, but it is intentionally not
  published. Use the institutional email address for contact.
- **Chinese name** — the site is English-only. A Chinese character form has not
  been added.

## License

- Code: MIT (see `LICENSE`).
- Written content and images: CC BY 4.0, unless otherwise noted.
