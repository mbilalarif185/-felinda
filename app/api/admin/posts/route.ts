import { randomUUID } from "crypto";
import { NextResponse } from "next/server";

import { requireAdminApi } from "@/lib/admin/auth";
import { revalidateBlogPaths } from "@/lib/blog/revalidate-public";
import { ensureUniqueSlug } from "@/lib/blog/slug";
import { loadAllRecords, saveAllRecords } from "@/lib/blog/storage";
import type { BlogPostRecord } from "@/lib/blog/types";
import { validatePostInput } from "@/lib/blog/validation";

export async function GET() {
  const denied = await requireAdminApi();
  if (denied) return denied;
  const posts = await loadAllRecords();
  return NextResponse.json({ ok: true, posts });
}

export async function POST(request: Request) {
  const denied = await requireAdminApi();
  if (denied) return denied;

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid JSON body." }, { status: 400 });
  }

  const validation = validatePostInput(body, true);
  if (!validation.ok) {
    return NextResponse.json({ ok: false, errors: validation.errors }, { status: 400 });
  }

  const input = validation.data;
  const posts = await loadAllRecords();
  const slugs = posts.map((p) => p.slug);
  const slug =
    typeof input.slug === "string" && input.slug.trim()
      ? ensureUniqueSlug(input.slug.trim(), slugs)
      : ensureUniqueSlug(input.title ?? "", slugs);

  const now = new Date().toISOString();
  const record: BlogPostRecord = {
    id: randomUUID(),
    slug,
    title: input.title!.trim(),
    metaTitle: typeof input.metaTitle === "string" ? input.metaTitle.trim() : undefined,
    metaDescription:
      typeof input.metaDescription === "string" ? input.metaDescription.trim() : undefined,
    excerpt: input.excerpt!.trim(),
    authorName: input.authorName!.trim(),
    authorRole: typeof input.authorRole === "string" ? input.authorRole.trim() : undefined,
    authorAvatar: typeof input.authorAvatar === "string" ? input.authorAvatar.trim() : undefined,
    publishedAt: input.publishedAt!,
    featuredImage: input.featuredImage!.trim(),
    ogImage: typeof input.ogImage === "string" ? input.ogImage.trim() : undefined,
    imageFit: input.imageFit === "contain" ? "contain" : "cover",
    readingMinutes:
      typeof input.readingMinutes === "number" ? Math.round(input.readingMinutes) : undefined,
    tags: Array.isArray(input.tags) ? input.tags.map(String) : [],
    category: typeof input.category === "string" ? input.category.trim() : undefined,
    seoKeywords: Array.isArray(input.seoKeywords) ? input.seoKeywords.map(String) : [],
    contentMarkdown: input.contentMarkdown!,
    status: input.status!,
    createdAt: now,
    updatedAt: now,
  };

  try {
    await saveAllRecords([record, ...posts]);
    if (record.status === "published") revalidateBlogPaths(record.slug);
    return NextResponse.json({ ok: true, post: record });
  } catch (err) {
    console.error("[admin/posts POST]", err);
    const message =
      err instanceof Error ? err.message : "Could not save post. Check server logs.";
    return NextResponse.json({ ok: false, message }, { status: 500 });
  }
}
