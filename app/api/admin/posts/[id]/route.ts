import { NextResponse } from "next/server";

import { requireAdminApi } from "@/lib/admin/auth";
import { revalidateBlogPaths } from "@/lib/blog/revalidate-public";
import { ensureUniqueSlug } from "@/lib/blog/slug";
import { loadAllRecords, saveAllRecords } from "@/lib/blog/storage";
import type { BlogPostRecord } from "@/lib/blog/types";
import { validatePostInput } from "@/lib/blog/validation";

type RouteContext = { params: Promise<{ id: string }> };

export async function GET(_request: Request, context: RouteContext) {
  const denied = await requireAdminApi();
  if (denied) return denied;
  const { id } = await context.params;
  const posts = await loadAllRecords();
  const post = posts.find((p) => p.id === id);
  if (!post) return NextResponse.json({ ok: false, message: "Not found." }, { status: 404 });
  return NextResponse.json({ ok: true, post });
}

export async function PUT(request: Request, context: RouteContext) {
  const denied = await requireAdminApi();
  if (denied) return denied;
  const { id } = await context.params;

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid JSON body." }, { status: 400 });
  }

  const validation = validatePostInput(body, false);
  if (!validation.ok) {
    return NextResponse.json({ ok: false, errors: validation.errors }, { status: 400 });
  }

  const posts = await loadAllRecords();
  const index = posts.findIndex((p) => p.id === id);
  if (index < 0) return NextResponse.json({ ok: false, message: "Not found." }, { status: 404 });

  const existing = posts[index];
  const input = validation.data;
  const otherSlugs = posts.filter((p) => p.id !== id).map((p) => p.slug);
  const slug =
    typeof input.slug === "string" && input.slug.trim()
      ? ensureUniqueSlug(input.slug.trim(), otherSlugs, existing.slug)
      : ensureUniqueSlug(input.title ?? existing.title, otherSlugs, existing.slug);

  const updated: BlogPostRecord = {
    ...existing,
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
    updatedAt: new Date().toISOString(),
  };

  const next = [...posts];
  next[index] = updated;
  try {
    await saveAllRecords(next);
    revalidateBlogPaths(updated.slug);
    if (existing.slug !== updated.slug) revalidateBlogPaths(existing.slug);
    return NextResponse.json({ ok: true, post: updated });
  } catch (err) {
    console.error("[admin/posts PUT]", err);
    const message =
      err instanceof Error ? err.message : "Could not save post. Check server logs.";
    return NextResponse.json({ ok: false, message }, { status: 500 });
  }
}

export async function DELETE(_request: Request, context: RouteContext) {
  const denied = await requireAdminApi();
  if (denied) return denied;
  const { id } = await context.params;
  const posts = await loadAllRecords();
  const removed = posts.find((p) => p.id === id);
  if (!removed) return NextResponse.json({ ok: false, message: "Not found." }, { status: 404 });
  try {
    await saveAllRecords(posts.filter((p) => p.id !== id));
    revalidateBlogPaths(removed.slug);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[admin/posts DELETE]", err);
    const message =
      err instanceof Error ? err.message : "Could not delete post. Check server logs.";
    return NextResponse.json({ ok: false, message }, { status: 500 });
  }
}
