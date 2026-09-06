# broong-website

Static company landing for [broong.com](https://broong.com) — same poster layout as Beyo.day, without Privacy Policy.

HTML + CSS only. Email uses a click-time `mailto:` assembly (no plaintext address in HTML attributes).

SEO: Organization JSON-LD, Open Graph + Twitter Card, `robots.txt`, `sitemap.xml`, favicon / apple-touch-icon, and head metadata / JSON-LD / alt only; vibe coding in description/keywords (no on-page SEO caption).

## Local preview

```bash
cd /Users/jeanymac/XcodeProjects/broong-website
python3 -m http.server 8080
```

## Deploy

Cloudflare Pages → this repo root. No build step.

## HTTPS / host hardening

- `_headers` — HSTS + basic security headers (Cloudflare Pages).
- `functions/_middleware.js` — 301 redirect `www.` → apex.

If `www` returns Cloudflare **522**, the hostname is not reaching this Pages project. In Cloudflare: Pages → Custom domains → add `www.<domain>`, or point `www` CNAME at the same Pages target as apex.
