import "server-only";

import { cache } from "react";

import { recordToBlogPost } from "@/lib/blog/to-blog-post";
import { loadAllRecords } from "@/lib/blog/storage";
import type { BlogPostRecord } from "@/lib/blog/types";

export type BlogAuthor = {
  name: string;
  role?: string;
  avatarSrc?: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle?: string;
  metaDescription?: string;
  excerpt: string;
  author: BlogAuthor;
  publishedAt: string;
  featuredImage: string;
  ogImage?: string;
  imageFit?: "cover" | "contain";
  readingMinutes: number;
  tags: string[];
  category?: string;
  seoKeywords: string[];
  contentMarkdown: string;
  status?: "draft" | "published";
};

const loadRecords = cache(async () => loadAllRecords());

async function publishedRecords(): Promise<BlogPostRecord[]> {
  const records = await loadRecords();
  return records.filter((r) => r.status === "published");
}

export async function getAllPosts(): Promise<BlogPost[]> {
  return (await publishedRecords())
    .map(recordToBlogPost)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const records = await publishedRecords();
  const record = records.find((p) => p.slug === slug);
  return record ? recordToBlogPost(record) : undefined;
}

export async function getPostBySlugForPreview(slug: string): Promise<BlogPost | undefined> {
  const records = await loadRecords();
  const record = records.find((p) => p.slug === slug);
  return record ? recordToBlogPost(record) : undefined;
}

export async function getAllSlugs(): Promise<string[]> {
  return (await publishedRecords()).map((p) => p.slug);
}

export async function getRelatedPosts(slug: string, limit = 3): Promise<BlogPost[]> {
  const current = await getPostBySlug(slug);
  if (!current) return [];
  const tagSet = new Set(current.tags);
  const posts = await getAllPosts();
  return posts
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

export { formatBlogDate } from "@/lib/blog/format-date";
