# broong-website

Static company landing for [broong.com](https://broong.com) — same poster layout as Beyo.day, without Privacy Policy.

HTML + CSS only. Email uses a click-time `mailto:` assembly (no plaintext address in HTML attributes).

SEO: Organization JSON-LD, Open Graph + Twitter Card, `robots.txt`, `sitemap.xml`, favicon / apple-touch-icon, and visually-hidden company copy including a natural vibe coding mention.

## Local preview

```bash
cd /Users/jeanymac/XcodeProjects/broong-website
python3 -m http.server 8080
```

## Deploy

Cloudflare Pages → this repo root. No build step.
