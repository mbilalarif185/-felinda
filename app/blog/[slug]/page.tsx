import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorBox from "@/components/blog/AuthorBox";
import BlogContent from "@/components/blog/BlogContent";
import RelatedPosts from "@/components/blog/RelatedPosts";
import JsonLd from "@/components/seo/JsonLd";
import { formatBlogDate, getAllSlugs, getPostBySlug, getRelatedPosts } from "@/lib/blog-data";
import { absoluteUrl } from "@/lib/constants/site";
import { renderMarkdown } from "@/lib/render-markdown";
import { breadcrumbJsonLd, pageWebSiteJsonLd } from "@/lib/seo/json-ld";
import { buildPageMetadata } from "@/lib/seo/metadata";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 86400;

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return { title: "Article not found" };
  }

  const base = buildPageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    ogImage: post.featuredImage,
  });

  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const html = await renderMarkdown(post.contentMarkdown);
  const related = getRelatedPosts(slug);

  return (
    <>
      <JsonLd
        data={pageWebSiteJsonLd({
          path: `/blog/${post.slug}`,
          name: post.title,
          description: post.excerpt,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Journal", href: "/blog" },
          { name: post.title },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.excerpt,
          datePublished: post.publishedAt,
          dateModified: post.publishedAt,
          image: [post.featuredImage],
          author: {
            "@type": "Person",
            name: post.author.name,
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": absoluteUrl(`/blog/${post.slug}`),
          },
        }}
      />
      <Header activeHref="/blog" />
      <main>
        <article className="border-b border-line/80 bg-shell/20">
          <div className="mx-auto max-w-3xl px-6 pb-12 pt-10 lg:px-10 lg:pt-14">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-sans text-sm font-medium text-muted transition hover:text-ink"
            >
              <ChevronLeft className="h-4 w-4 shrink-0" aria-hidden />
              Back to blog
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
              <p className="mt-6 font-sans text-lg leading-relaxed text-muted">{post.excerpt}</p>
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
              className="object-cover"
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

        <div className="mx-auto max-w-7xl px-6 pb-20 lg:px-10 lg:pb-28">
          <RelatedPosts posts={related} />
        </div>
      </main>
      <Footer />
    </>
  );
}
