import BlogCard from "./BlogCard";

import type { BlogPost } from "@/lib/blog-data";

export type BlogListProps = {
  posts: BlogPost[];
};

export default function BlogList({ posts }: BlogListProps) {
  if (posts.length === 0) {
    return (
      <p className="rounded-2xl border border-dashed border-line bg-shell/40 px-6 py-16 text-center font-sans text-muted">
        No articles yet. Check back soon.
      </p>
    );
  }

  return (
    <ul className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
      {posts.map((post, index) => (
        <li key={post.slug} className="min-h-0">
          <BlogCard post={post} priority={index < 3} />
        </li>
      ))}
    </ul>
  );
}
