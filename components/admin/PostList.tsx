"use client";

import Link from "next/link";
import { useState } from "react";

import type { BlogPostRecord } from "@/lib/blog/types";
import { formatBlogDate } from "@/lib/blog/format-date";

type PostListProps = {
  initialPosts: BlogPostRecord[];
};

export default function PostList({ initialPosts }: PostListProps) {
  const [posts, setPosts] = useState(initialPosts);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleDelete(id: string, title: string) {
    if (!window.confirm(`Delete "${title}"? This cannot be undone.`)) return;
    setDeletingId(id);
    setError(null);
    const res = await fetch(`/api/admin/posts/${id}`, { method: "DELETE" });
    setDeletingId(null);
    if (!res.ok) {
      setError("Could not delete post. Please try again.");
      return;
    }
    setPosts((prev) => prev.filter((p) => p.id !== id));
    // Do not router.refresh() here — a stale Blob CDN read would re-insert the deleted post.
  }

  if (posts.length === 0) {
    return (
      <p className="rounded-2xl border border-dashed border-line bg-ivory/60 px-6 py-16 text-center font-sans text-muted">
        No posts yet.{" "}
        <Link href="/admin/posts/new" className="font-medium text-ink underline">
          Create your first post
        </Link>
        .
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {error ? (
        <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 font-sans text-sm text-red-800">
          {error}
        </p>
      ) : null}
      <ul className="divide-y divide-line/80 overflow-hidden rounded-2xl border border-line bg-ivory/70">
        {posts.map((post) => (
          <li key={post.id} className="flex flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <p className="truncate font-serif text-lg text-ink">{post.title}</p>
                <span
                  className={`rounded-full px-2.5 py-0.5 font-sans text-xs font-medium ${
                    post.status === "published"
                      ? "bg-emerald-100 text-emerald-800"
                      : "bg-amber-100 text-amber-900"
                  }`}
                >
                  {post.status}
                </span>
              </div>
              <p className="mt-1 font-sans text-sm text-muted">
                /blog/{post.slug} · {formatBlogDate(post.publishedAt)}
                {post.category ? ` · ${post.category}` : ""}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link
                href={`/admin/preview/${post.slug}`}
                className="rounded-full border border-line px-4 py-2 font-sans text-sm text-ink transition hover:border-clay/50"
              >
                Preview
              </Link>
              <Link
                href={`/admin/posts/${post.id}/edit`}
                className="rounded-full border border-line px-4 py-2 font-sans text-sm text-ink transition hover:border-clay/50"
              >
                Edit
              </Link>
              <button
                type="button"
                disabled={deletingId === post.id}
                onClick={() => handleDelete(post.id, post.title)}
                className="rounded-full border border-red-200 px-4 py-2 font-sans text-sm text-red-800 transition hover:bg-red-50 disabled:opacity-50"
              >
                {deletingId === post.id ? "Deleting…" : "Delete"}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
