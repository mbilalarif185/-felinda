# Google Search Console Setup

## 1) Verify the property
- Add and verify the domain property: `https://www.felindajewelry.com/`.
- Recommended method: DNS TXT record at your domain provider.

## 2) Submit sitemap
- Sitemap URL: `https://www.felindajewelry.com/sitemap.xml`.
- The project exposes this via App Router `app/sitemap.js`.

## 3) Confirm crawl and index readiness
- `robots.txt` is available at `https://www.felindajewelry.com/robots.txt`.
- Global metadata enables `index,follow` and large preview directives for Googlebot.
- Legacy redirect pages use `noindex` to avoid duplicate index entries.

## 4) Monitor in Search Console
- Check Coverage for excluded or blocked URLs.
- Check Enhancements for structured data validity.
- Use URL Inspection for key pages:
  - `/`
  - `/custom-rings`
  - `/earrings`
  - `/pendants-necklaces`
  - `/bangles-bracelets`
  - `/pearl-creations`
  - `/regal-revivals`

## 5) Keep metadata and schema stable
- Canonical, OpenGraph, and Twitter metadata are generated through `lib/seo/metadata.js`.
- Organization/Website/Breadcrumb/Product JSON-LD are generated through `lib/seo/json-ld.js`.
