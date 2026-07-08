"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useMemo, useState } from "react";

import AdminShell from "@/components/admin/AdminShell";
import MarkdownEditor from "@/components/admin/MarkdownEditor";
import { normalizeMarkdownExternalLinks } from "@/lib/blog/normalize-markdown-links";
import { slugifyTitle } from "@/lib/blog/slug";
import type { BlogPostRecord, BlogPostStatus } from "@/lib/blog/types";

type PostFormProps = {
  mode: "create" | "edit";
  initial?: BlogPostRecord;
};

type FormState = {
  title: string;
  slug: string;
  slugTouched: boolean;
  excerpt: string;
  contentMarkdown: string;
  authorName: string;
  authorRole: string;
  authorAvatar: string;
  publishedAt: string;
  featuredImage: string;
  ogImage: string;
  imageFit: "cover" | "contain";
  metaTitle: string;
  metaDescription: string;
  category: string;
  tags: string;
  seoKeywords: string;
  status: BlogPostStatus;
};

function toFormState(initial?: BlogPostRecord): FormState {
  const today = new Date().toISOString().slice(0, 10);
  return {
    title: initial?.title ?? "",
    slug: initial?.slug ?? "",
    slugTouched: Boolean(initial?.slug),
    excerpt: initial?.excerpt ?? "",
    contentMarkdown: initial?.contentMarkdown ?? "",
    authorName: initial?.authorName ?? "Auréa Atelier",
    authorRole: initial?.authorRole ?? "Design studio",
    authorAvatar: initial?.authorAvatar ?? "",
    publishedAt: initial?.publishedAt?.slice(0, 10) ?? today,
    featuredImage: initial?.featuredImage ?? "",
    ogImage: initial?.ogImage ?? "",
    imageFit: initial?.imageFit ?? "cover",
    metaTitle: initial?.metaTitle ?? "",
    metaDescription: initial?.metaDescription ?? "",
    category: initial?.category ?? "",
    tags: (initial?.tags ?? []).join(", "),
    seoKeywords: (initial?.seoKeywords ?? []).join(", "),
    status: initial?.status ?? "draft",
  };
}

function splitList(value: string): string[] {
  return value
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

export default function PostForm({ mode, initial }: PostFormProps) {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(() => toFormState(initial));
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [message, setMessage] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);

  const autoSlug = useMemo(() => slugifyTitle(form.title), [form.title]);

  const update = useCallback(<K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => {
      const next = { ...prev, [key]: value };
      if (key === "title" && !prev.slugTouched) {
        next.slug = slugifyTitle(String(value));
      }
      if (key === "slug") next.slugTouched = true;
      return next;
    });
  }, []);

  async function uploadImage(file: File, target: "featuredImage" | "ogImage") {
    setUploading(true);
    setMessage(null);
    const body = new FormData();
    body.append("file", file);
    const res = await fetch("/api/admin/upload", { method: "POST", body });
    setUploading(false);
    const data = await res.json();
    if (!res.ok || !data.ok) {
      setMessage(data.message ?? "Upload failed.");
      return;
    }
    update(target, data.url);
    if (target === "featuredImage" && !form.ogImage) update("ogImage", data.url);
  }

  function buildPayload(status: BlogPostStatus) {
    return {
      title: form.title,
      slug: form.slug || autoSlug,
      excerpt: form.excerpt,
      contentMarkdown: normalizeMarkdownExternalLinks(form.contentMarkdown),
      authorName: form.authorName,
      authorRole: form.authorRole || undefined,
      authorAvatar: form.authorAvatar || undefined,
      publishedAt: form.publishedAt,
      featuredImage: form.featuredImage,
      ogImage: form.ogImage || undefined,
      imageFit: form.imageFit,
      metaTitle: form.metaTitle || undefined,
      metaDescription: form.metaDescription || undefined,
      category: form.category || undefined,
      tags: splitList(form.tags),
      seoKeywords: splitList(form.seoKeywords),
      status,
    };
  }

  async function save(status: BlogPostStatus) {
    setSaving(true);
    setErrors({});
    setMessage(null);
    const payload = buildPayload(status);
    const url =
      mode === "create" ? "/api/admin/posts" : `/api/admin/posts/${initial!.id}`;
    const method = mode === "create" ? "POST" : "PUT";
    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    let data: { ok?: boolean; errors?: Record<string, string>; message?: string } = {};
    try {
      const text = await res.text();
      if (text) data = JSON.parse(text) as typeof data;
    } catch {
      data = {};
    }
    setSaving(false);
    if (!res.ok) {
      if (data.errors) setErrors(data.errors);
      else setMessage(data.message ?? "Could not save post.");
      return;
    }
    router.push("/admin");
    router.refresh();
  }

  const previewSlug = form.slug || autoSlug;

  return (
    <AdminShell title={mode === "create" ? "New post" : "Edit post"}>
      <form
        className="space-y-8"
        onSubmit={(e) => {
          e.preventDefault();
          save(form.status);
        }}
      >
        {message ? (
          <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 font-sans text-sm text-red-800">
            {message}
          </p>
        ) : null}

        <section className="grid gap-6 rounded-2xl border border-line bg-ivory/70 p-6 lg:grid-cols-2">
          <Field label="Title *" error={errors.title}>
            <input
              className="field-input"
              value={form.title}
              onChange={(e) => update("title", e.target.value)}
              required
            />
          </Field>
          <Field label="URL slug" hint="Auto-generated from title unless you edit it." error={errors.slug}>
            <div className="flex items-center gap-2">
              <span className="font-sans text-sm text-muted">/blog/</span>
              <input
                className="field-input flex-1"
                value={form.slug}
                onChange={(e) => update("slug", slugifyTitle(e.target.value) || e.target.value)}
              />
            </div>
          </Field>
          <Field label="Description / excerpt *" error={errors.excerpt}>
            <textarea
              className="field-input min-h-[100px]"
              value={form.excerpt}
              onChange={(e) => update("excerpt", e.target.value)}
              required
            />
          </Field>
          <Field label="Category">
            <input
              className="field-input"
              value={form.category}
              onChange={(e) => update("category", e.target.value)}
              placeholder="e.g. Guides, Education"
            />
          </Field>
          <Field label="Author name *" error={errors.authorName}>
            <input
              className="field-input"
              value={form.authorName}
              onChange={(e) => update("authorName", e.target.value)}
              required
            />
          </Field>
          <Field label="Author role">
            <input
              className="field-input"
              value={form.authorRole}
              onChange={(e) => update("authorRole", e.target.value)}
            />
          </Field>
          <Field label="Publish date *" error={errors.publishedAt}>
            <input
              type="date"
              className="field-input"
              value={form.publishedAt}
              onChange={(e) => update("publishedAt", e.target.value)}
              required
            />
          </Field>
          <Field label="Status *" error={errors.status}>
            <select
              className="field-input"
              value={form.status}
              onChange={(e) => update("status", e.target.value as BlogPostStatus)}
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </Field>
          <Field label="Tags (comma-separated)">
            <input
              className="field-input"
              value={form.tags}
              onChange={(e) => update("tags", e.target.value)}
            />
          </Field>
          <Field label="SEO keywords (comma-separated)">
            <input
              className="field-input"
              value={form.seoKeywords}
              onChange={(e) => update("seoKeywords", e.target.value)}
            />
          </Field>
        </section>

        <section className="space-y-4 rounded-2xl border border-line bg-ivory/70 p-6">
          <h2 className="font-serif text-xl text-ink">SEO</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            <Field label="Meta title">
              <input
                className="field-input"
                value={form.metaTitle}
                onChange={(e) => update("metaTitle", e.target.value)}
              />
            </Field>
            <Field label="Meta description">
              <textarea
                className="field-input min-h-[80px]"
                value={form.metaDescription}
                onChange={(e) => update("metaDescription", e.target.value)}
              />
            </Field>
          </div>
        </section>

        <section className="space-y-4 rounded-2xl border border-line bg-ivory/70 p-6">
          <h2 className="font-serif text-xl text-ink">Images</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            <Field label="Featured image *" error={errors.featuredImage}>
              <input
                className="field-input"
                value={form.featuredImage}
                onChange={(e) => update("featuredImage", e.target.value)}
                placeholder="/images/... or uploaded URL"
              />
              <input
                type="file"
                accept="image/jpeg,image/png,image/webp,image/gif"
                className="mt-2 block font-sans text-sm"
                disabled={uploading}
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) uploadImage(file, "featuredImage");
                }}
              />
            </Field>
            <Field label="OG image (social share)">
              <input
                className="field-input"
                value={form.ogImage}
                onChange={(e) => update("ogImage", e.target.value)}
              />
              <input
                type="file"
                accept="image/jpeg,image/png,image/webp,image/gif"
                className="mt-2 block font-sans text-sm"
                disabled={uploading}
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) uploadImage(file, "ogImage");
                }}
              />
            </Field>
            <Field label="Image fit">
              <select
                className="field-input"
                value={form.imageFit}
                onChange={(e) => update("imageFit", e.target.value as "cover" | "contain")}
              >
                <option value="cover">Cover</option>
                <option value="contain">Contain</option>
              </select>
            </Field>
          </div>
          {form.featuredImage ? (
            <div className="relative mt-2 aspect-[21/9] max-w-xl overflow-hidden rounded-xl border border-line bg-shell">
              <Image src={form.featuredImage} alt="Featured preview" fill className="object-cover" />
            </div>
          ) : null}
        </section>

        <section className="space-y-3 rounded-2xl border border-line bg-ivory/70 p-6">
          <h2 className="font-serif text-xl text-ink">Content *</h2>
          {errors.contentMarkdown ? (
            <p className="font-sans text-sm text-red-700">{errors.contentMarkdown}</p>
          ) : null}
          <p className="font-sans text-xs text-muted">
            External links need a full URL, e.g.{" "}
            <code className="rounded bg-shell px-1">https://cressoft.net</code> — bare domains like{" "}
            <code className="rounded bg-shell px-1">cressoft.net</code> are auto-fixed on save.
          </p>
          <MarkdownEditor
            value={form.contentMarkdown}
            onChange={(v) => update("contentMarkdown", v)}
          />
        </section>

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            disabled={saving}
            onClick={() => save("draft")}
            className="rounded-full border border-line bg-ivory px-6 py-2.5 font-sans text-sm font-medium text-ink transition hover:border-clay/50 disabled:opacity-50"
          >
            Save draft
          </button>
          <button
            type="button"
            disabled={saving}
            onClick={() => save("published")}
            className="rounded-full border border-ink bg-ink px-6 py-2.5 font-sans text-sm font-medium text-cream transition hover:bg-noir disabled:opacity-50"
          >
            {saving ? "Saving…" : "Publish"}
          </button>
          {previewSlug ? (
            <Link
              href={`/admin/preview/${previewSlug}`}
              className="rounded-full border border-line px-6 py-2.5 font-sans text-sm font-medium text-ink transition hover:border-clay/50"
            >
              Preview
            </Link>
          ) : null}
          <Link href="/admin" className="font-sans text-sm text-muted hover:text-ink">
            Cancel
          </Link>
        </div>
      </form>

      <style jsx global>{`
        .field-input {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid rgba(0, 0, 0, 0.12);
          background: #fff;
          padding: 0.65rem 0.85rem;
          font-family: ui-sans-serif, system-ui, sans-serif;
          font-size: 0.875rem;
          color: #1a1a1a;
        }
        .field-input:focus {
          outline: 2px solid rgba(0, 0, 0, 0.2);
          outline-offset: 1px;
        }
      `}</style>
    </AdminShell>
  );
}

function Field({
  label,
  hint,
  error,
  children,
}: {
  label: string;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block space-y-1.5">
      <span className="font-sans text-sm font-medium text-ink">{label}</span>
      {hint ? <span className="block font-sans text-xs text-muted">{hint}</span> : null}
      {children}
      {error ? <span className="block font-sans text-xs text-red-700">{error}</span> : null}
    </label>
  );
}
