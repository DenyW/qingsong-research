# Qingsong Wei — Research, in the open

The personal research website of **Qingsong Wei**, built with
[Astro](https://astro.build) and deployed as static assets on
[Cloudflare Workers](https://workers.cloudflare.com).

- Live site: <https://qingsong-research.qsw-wei.workers.dev>
- GitHub: <https://github.com/DenyW/qingsong-research>
- Language: English

## What is included

- **Homepage** — portrait photograph, research directions, selected
  publications, open-source projects, field notes, experience, research funding,
  selected patents, methods, and contact.
- **Publications** — all 27 peer-reviewed journal articles, grouped by year,
  with DOI links and the author's name highlighted. Available at
  `/publications/`.
- **Patents** — 52 records listing Qingsong Wei as an inventor, grouped by
  filing year, with publication numbers, filing dates, assignees, and Google
  Patents links. Available at `/patents/`.
- **Field notes** — three essays with an RSS feed at `/rss.xml`.
- **SEO** — sitemap, canonical URLs, Open Graph metadata, and JSON-LD for the
  person, collection pages, and articles.
- **Privacy** — no analytics, no cookies, no third-party font or script
  requests.

## Content sources

The site only publishes information that can be checked against a public record
or a document supplied by Qingsong Wei.

- [ORCID record 0000-0001-6164-350X](https://orcid.org/0000-0001-6164-350X)
- [LinkedIn profile](https://www.linkedin.com/in/qingsong-wei-12a410237/)
- [ResearchGate profile](https://www.researchgate.net/profile/Qingsong-Wei-3)
- [Crossref](https://www.crossref.org/) metadata for publication details
- Curriculum vitae, August 2026, for the current appointment, education,
  research funding, patent numbers, technical skills, and service roles
- [Google Patents](https://patents.google.com/) for patent titles, publication
  numbers, filing dates, and assignees
- Public GitHub repositories for the projects section

Publication titles, author order, journal names, volumes, and DOIs follow the
Crossref record. Employment, education, funding, and service details follow the
CV and ORCID record. Patent records were checked against Google Patents in
October 2026 and list only records where Qingsong Wei appears as an inventor;
the site makes no legal-status assessment.

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

Pushes to `main` deploy automatically through Cloudflare Workers Builds.
The Worker is connected to this GitHub repository with:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Root directory: `/`
- Production branch: `main`

`SITE_URL` is read in `astro.config.mjs`. The fallback is the current
`workers.dev` URL, so a normal build works without extra configuration. To pin a
custom domain, set `SITE_URL` as a build-time environment variable on the
Workers Builds trigger.

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

- **Portrait** — `public/images/portrait.jpg` is the authorized 4:5 photograph
  used on the homepage.
- **Phone number** — the CV includes a phone number, but it is intentionally not
  published. Use the institutional email address for contact.
- **Chinese name** — the site is English-only. A Chinese character form has not
  been added.

## License

- Code: MIT (see `LICENSE`).
- Written content and images: CC BY 4.0, unless otherwise noted.
