import matter from "gray-matter";

export type BlogAuthor = {
  name: string;
  role?: string;
  avatarSrc?: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  author: BlogAuthor;
  publishedAt: string;
  featuredImage: string;
  readingMinutes: number;
  tags: string[];
  contentMarkdown: string;
};

type PostFrontmatter = {
  slug: string;
  title: string;
  excerpt: string;
  authorName: string;
  authorRole?: string;
  authorAvatar?: string;
  publishedAt: string;
  featuredImage: string;
  readingMinutes?: number;
  tags?: string[];
};

const RAW_POSTS: string[] = [
  `---
slug: the-quiet-language-of-bespoke-jewelry
title: The quiet language of bespoke jewelry
excerpt: How proportion, patina, and patience shape a piece that feels unmistakably yours—without shouting for attention.
authorName: Felinda Atelier
authorRole: Design studio
publishedAt: "2025-11-12"
featuredImage: /images/felinda-jewelry/EarRings/Earrings-scaled-e1654064933410.webp
readingMinutes: 7
tags:
  - bespoke
  - design
  - craft
---

## Why bespoke feels different

Bespoke work begins where catalog design ends: with your story, your skin tone, the way you move, and the occasions you want to mark.

We sketch in pencil before we touch metal. We consider **weight**, **balance**, and how light will catch a facet at dinner—not only under showroom spots.

### Three principles we return to

1. **Restraint** — ornament that earns its place.
2. **Longevity** — alloys and stones chosen for life, not seasons.
3. **Fit** — comfort you forget you are wearing.

> The best compliment is not "Where did you buy that?" but "That is *so* you."

When you are ready, [book a private consultation](/contact) and we will translate your references into a calm, confident design direction.`,
  `---
slug: choosing-pearls-with-intention
title: Choosing pearls with intention
excerpt: From lustre to surface and silhouette, a practical guide to selecting pearls that age beautifully in the tropics.
authorName: Felinda Atelier
authorRole: Design studio
publishedAt: "2025-09-03"
featuredImage: /images/felinda-jewelry/Pearl-Series/Pearls-in-malaysia.webp
readingMinutes: 6
tags:
  - pearls
  - materials
  - education
---

## Lustre first

**Lustre** is the sharpness of reflection on the pearl surface. In soft daylight, roll the strand slowly: crisp highlights signal healthy nacre.

### Surface and shape

- **Surface**: tiny blemishes are natural; clouds that dull the skin are not.
- **Shape**: baroque can feel modern; rounds read classic. There is no wrong answer—only *your* vocabulary.

### Wear and care

Rinse after salt or sunscreen. Store flat, away from heat vents. Restring silk every few years if you wear a necklace weekly.

\`\`\`
Pearl + diamond + warm gold = evening without trying too hard.
\`\`\`

Explore our [pearl creations](/pearl-creations) for inspiration.`,
  `---
slug: custom-rings-from-first-sketch-to-final-polish
title: Custom rings—from first sketch to final polish
excerpt: A transparent look at milestones, timelines, and the decisions that keep a custom ring both beautiful and wearable.
authorName: Felinda Atelier
authorRole: Design studio
publishedAt: "2025-06-21"
featuredImage: /images/felinda-jewelry/Custom-Rings/Engagement Rings/jewelry-online-malaysia__18k-oval-engagement-ring.webp
readingMinutes: 8
tags:
  - rings
  - process
  - bespoke
---

## Milestones you can expect

| Phase | What happens |
| --- | --- |
| Discovery | References, lifestyle, budget guardrails |
| Design | Sketches and 3D where helpful |
| Bench | Casting, setting, polish |

### Wearability checks

We validate **stack height**, **palm clearance**, and prong geometry for daily life—not only the reveal moment.

#### Sizing and seasons

Fingers change with heat and travel. We plan a sensible sizing window and discuss *when* the ring should feel its best.

See [custom rings](/custom-rings) for starting points and mood boards.`,
  `---
slug: layering-necklaces-without-the-tangle
title: Layering necklaces without the tangle
excerpt: Spacing, clasp strategy, and weight pairing—small choices that keep delicate layers feeling effortless.
authorName: Felinda Atelier
authorRole: Design studio
publishedAt: "2025-04-08"
featuredImage: /images/felinda-jewelry/Pendants-Necklaces/Pendant-and-Necklaces-in-KL.webp
readingMinutes: 5
tags:
  - styling
  - necklaces
  - tips
---

## Start with spacing

Aim for **2–4 cm** between station lengths. If two pendants sit at the same height, they will argue.

### Weight pairing

Heavier chains anchor lighter ones. Mixing ultra-fine chains of similar weight invites knots—especially in humidity.

- Use a **detangler** for two-layer days.
- Alternate textures: one smooth snake, one cable.

### When bespoke helps

If you know your ideal stack, we can design **bail height** and **chain gauge** so the composition reads intentional from day one.

Browse [pendants and necklaces](/pendants-necklaces).`,
];

function readingMinutesFromMarkdown(body: string, fallback: number | undefined): number {
  if (typeof fallback === "number" && fallback > 0) return Math.round(fallback);
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

function parsePost(raw: string): BlogPost {
  const { data, content } = matter(raw);
  const d = data as PostFrontmatter;
  const body = content.trim();
  return {
    slug: d.slug,
    title: d.title,
    excerpt: d.excerpt,
    author: {
      name: d.authorName,
      role: d.authorRole,
      avatarSrc: d.authorAvatar,
    },
    publishedAt: d.publishedAt,
    featuredImage: d.featuredImage,
    readingMinutes: readingMinutesFromMarkdown(body, d.readingMinutes),
    tags: Array.isArray(d.tags) ? d.tags.map(String) : [],
    contentMarkdown: body,
  };
}

const parsedPosts: BlogPost[] = RAW_POSTS.map(parsePost);

export function getAllPosts(): BlogPost[] {
  return [...parsedPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return parsedPosts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return parsedPosts.map((p) => p.slug);
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const current = getPostBySlug(slug);
  if (!current) return [];
  const tagSet = new Set(current.tags);
  return getAllPosts()
    .filter((p) => p.slug !== slug)
    .map((post) => ({
      post,
      score: post.tags.reduce((n, t) => n + (tagSet.has(t) ? 1 : 0), 0),
    }))
    .sort(
      (a, b) =>
        b.score - a.score ||
        new Date(b.post.publishedAt).getTime() - new Date(a.post.publishedAt).getTime(),
    )
    .slice(0, limit)
    .map((x) => x.post);
}

export function formatBlogDate(iso: string, locale = "en-MY"): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(d);
}
