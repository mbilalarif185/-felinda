import Image from "next/image";
import Link from "next/link";

import type { BlogPost } from "@/lib/blog-data";
import { formatBlogDate } from "@/lib/blog-data";

export type BlogCardProps = {
  post: BlogPost;
  priority?: boolean;
};

export default function BlogCard({ post, priority = false }: BlogCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line/90 bg-ivory/40 shadow-sm transition duration-300 hover:border-clay/35 hover:shadow-md">
      <Link href={`/blog/${post.slug}`} className="flex h-full flex-col">
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-shell">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            priority={priority}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
          />
        </div>
        <div className="flex flex-1 flex-col gap-3 p-6">
          <time
            dateTime={post.publishedAt}
            className="font-sans text-xs font-medium uppercase tracking-luxe text-muted"
          >
            {formatBlogDate(post.publishedAt)}
          </time>
          <h2 className="font-serif text-2xl font-medium leading-snug text-ink transition group-hover:text-clay">
            {post.title}
          </h2>
          <p className="line-clamp-3 flex-1 font-sans text-sm leading-relaxed text-muted">{post.excerpt}</p>
          <p className="font-sans text-xs text-ink/80">
            <span className="text-muted">By </span>
            <span className="font-medium text-ink">{post.author.name}</span>
          </p>
        </div>
      </Link>
    </article>
  );
}
