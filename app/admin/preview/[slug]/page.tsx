import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";

import AuthorBox from "@/components/blog/AuthorBox";
import BlogContent from "@/components/blog/BlogContent";
import { formatBlogDate, getPostBySlugForPreview } from "@/lib/blog-data";
import { renderMarkdown } from "@/lib/render-markdown";

type PreviewPageProps = {
  params: Promise<{ slug: string }>;
};

export const metadata: Metadata = {
  title: "Preview",
  robots: { index: false, follow: false },
};

export default async function AdminPreviewPage({ params }: PreviewPageProps) {
  const { slug } = await params;
  const post = await getPostBySlugForPreview(slug);
  if (!post) notFound();

  const html = await renderMarkdown(post.contentMarkdown);
  const isDraft = post.status === "draft";

  return (
    <div className="min-h-screen bg-cream">
      <div
        className={`sticky top-0 z-50 border-b px-4 py-3 text-center font-sans text-sm ${
          isDraft
            ? "border-amber-200 bg-amber-50 text-amber-950"
            : "border-emerald-200 bg-emerald-50 text-emerald-950"
        }`}
      >
        Admin preview · {isDraft ? "Draft (not public)" : "Published"}
        <Link href="/admin" className="ml-4 underline">
          Back to admin
        </Link>
      </div>

      <main>
        <article className="border-b border-line/80 bg-shell/20">
          <div className="mx-auto max-w-3xl px-6 pb-12 pt-10 lg:px-10 lg:pt-14">
            <Link
              href="/admin"
              className="inline-flex items-center gap-2 font-sans text-sm font-medium text-muted transition hover:text-ink"
            >
              <ChevronLeft className="h-4 w-4 shrink-0" aria-hidden />
              Back to admin
            </Link>
            <header className="mt-10">
              <p className="font-sans text-xs font-medium uppercase tracking-luxe text-muted">
                <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
                <span aria-hidden className="mx-2 text-line">
                  ·
                </span>
                {post.readingMinutes} min read
              </p>
              <h1 className="mt-4 font-serif text-4xl font-medium leading-tight tracking-tight text-ink sm:text-5xl">
                {post.title}
              </h1>
            </header>
          </div>
        </article>

        <div className="relative mx-auto max-w-4xl px-6 lg:px-10">
          <div className="relative -mt-6 aspect-[21/9] w-full overflow-hidden rounded-2xl border border-line bg-shell shadow-sm sm:aspect-[2/1]">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              priority
              className={post.imageFit === "contain" ? "object-contain" : "object-cover"}
              sizes="(max-width: 1024px) 100vw, 56rem"
            />
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-6 py-14 lg:px-10 lg:py-20">
          <AuthorBox author={post.author} publishedAt={post.publishedAt} readingMinutes={post.readingMinutes} />
          <div className="mt-14">
            <BlogContent html={html} />
          </div>
        </div>
      </main>
    </div>
  );
}
