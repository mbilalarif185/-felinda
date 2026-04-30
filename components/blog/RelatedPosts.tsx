import BlogCard from "./BlogCard";

import type { BlogPost } from "@/lib/blog-data";

export type RelatedPostsProps = {
  posts: BlogPost[];
};

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <section className="mt-20 border-t border-line pt-16" aria-labelledby="related-posts-heading">
      <h2
        id="related-posts-heading"
        className="font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl"
      >
        Related reading
      </h2>
      <p className="mt-2 max-w-2xl font-sans text-sm text-muted">
        Stories that share themes, materials, or craft notes with this article.
      </p>
      <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <li key={post.slug}>
            <BlogCard post={post} />
          </li>
        ))}
      </ul>
    </section>
  );
}
