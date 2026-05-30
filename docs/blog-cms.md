# Blog CMS (Admin)

Non-technical editors manage posts at `/admin` without touching code. Public blog pages (`/blog`, `/blog/[slug]`) are unchanged in design and routing.

## Storage

| Environment | Posts | Images |
|-------------|-------|--------|
| Local / cPanel (standalone) | `data/blog/posts.json` | `public/images/blog-uploads/` |
| Vercel (recommended) | Vercel Blob `blog/posts.json` + committed JSON fallback at build | Vercel Blob `blog/*` |

Set `BLOB_READ_WRITE_TOKEN` in Vercel project settings (Storage → Blob → token).

## Environment variables

Copy `.env.example` to `.env.local`:

- `ADMIN_PASSWORD` — min 8 characters; shared staff password
- `ADMIN_SESSION_SECRET` — min 16 characters; signs the session cookie
- `BLOB_READ_WRITE_TOKEN` — optional; required on Vercel for saving posts/uploads

## Local setup

```bash
npm install
cp .env.example .env.local
# Edit ADMIN_PASSWORD and ADMIN_SESSION_SECRET
npm run dev
```

Open [http://localhost:3000/admin/login](http://localhost:3000/admin/login).

## Adding a post

1. Sign in at `/admin/login`
2. **New post** — fill title, description, content (markdown editor), author, date, tags, SEO fields
3. Upload featured image (and optional OG image)
4. Slug auto-fills from title; edit if needed
5. **Save draft** or **Publish**
6. **Preview** opens `/admin/preview/[slug]` (drafts included)

## Deployment on Vercel

1. Connect the Git repo to Vercel
2. Add environment variables: `ADMIN_PASSWORD`, `ADMIN_SESSION_SECRET`, `BLOB_READ_WRITE_TOKEN`, `NEXT_PUBLIC_SITE_URL`
3. Enable Vercel Blob for the project
4. Deploy — first deploy uses `data/blog/posts.json` from git; after the first save in admin, Blob becomes the live source when the token is set

On cPanel / standalone Node, omit `BLOB_READ_WRITE_TOKEN`; the app writes `data/blog/posts.json` on disk.

## Re-migrate legacy posts

If you need to re-export from an old hardcoded source:

```bash
npm run blog:export
```

(Current source is already `data/blog/posts.json`.)
