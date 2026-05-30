/**
 * One-time migration: exports legacy hardcoded posts to data/blog/posts.json
 * Run: npm run blog:export
 */
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { randomUUID } from "crypto";

import { getAllPosts } from "../lib/blog-data";
import type { BlogPostsFile } from "../lib/blog/types";

async function main() {
  const legacy = await getAllPosts();
  const now = new Date().toISOString();
  const file: BlogPostsFile = {
    version: 1,
    posts: legacy.map((post) => ({
      id: randomUUID(),
      slug: post.slug,
      title: post.title,
      metaTitle: post.metaTitle,
      metaDescription: post.excerpt,
      excerpt: post.excerpt,
      authorName: post.author.name,
      authorRole: post.author.role,
      authorAvatar: post.author.avatarSrc,
      publishedAt: post.publishedAt,
      featuredImage: post.featuredImage,
      ogImage: post.featuredImage,
      imageFit: post.imageFit,
      readingMinutes: post.readingMinutes,
      tags: post.tags,
      seoKeywords: post.seoKeywords,
      contentMarkdown: post.contentMarkdown,
      status: "published" as const,
      createdAt: now,
      updatedAt: now,
    })),
  };

  const dir = path.join(process.cwd(), "data", "blog");
  await mkdir(dir, { recursive: true });
  const target = path.join(dir, "posts.json");
  await writeFile(target, `${JSON.stringify(file, null, 2)}\n`, "utf8");
  console.log(`Exported ${file.posts.length} posts to ${target}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
