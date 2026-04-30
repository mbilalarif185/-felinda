import Image from "next/image";

import type { BlogAuthor } from "@/lib/blog-data";
import { formatBlogDate } from "@/lib/blog-data";

export type AuthorBoxProps = {
  author: BlogAuthor;
  publishedAt: string;
  readingMinutes: number;
};

function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? "")
    .join("");
}

export default function AuthorBox({ author, publishedAt, readingMinutes }: AuthorBoxProps) {
  return (
    <aside className="flex flex-col gap-6 rounded-2xl border border-line bg-ivory/50 p-6 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-4">
        {author.avatarSrc ? (
          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-line bg-shell">
            <Image src={author.avatarSrc} alt={author.name} fill className="object-cover" sizes="56px" />
          </div>
        ) : (
          <div
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-line bg-champagneSoft font-serif text-lg font-medium text-ink"
            aria-hidden
          >
            {initials(author.name)}
          </div>
        )}
        <div>
          <p className="font-serif text-xl text-ink">{author.name}</p>
          {author.role ? <p className="mt-0.5 font-sans text-sm text-muted">{author.role}</p> : null}
        </div>
      </div>
      <dl className="flex flex-wrap gap-x-8 gap-y-2 font-sans text-sm text-muted sm:justify-end">
        <div>
          <dt className="text-xs font-medium uppercase tracking-luxe text-muted/90">Published</dt>
          <dd className="mt-1 text-ink">
            <time dateTime={publishedAt}>{formatBlogDate(publishedAt)}</time>
          </dd>
        </div>
        <div>
          <dt className="text-xs font-medium uppercase tracking-luxe text-muted/90">Reading time</dt>
          <dd className="mt-1 text-ink">{readingMinutes} min read</dd>
        </div>
      </dl>
    </aside>
  );
}
