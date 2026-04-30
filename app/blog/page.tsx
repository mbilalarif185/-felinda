import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogList from "@/components/blog/BlogList";
import JsonLd from "@/components/seo/JsonLd";
import { getAllPosts } from "@/lib/blog-data";
import { breadcrumbJsonLd, pageWebSiteJsonLd } from "@/lib/seo/json-ld";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { blogMeta } from "@/lib/seo/meta-copy";

export const metadata = buildPageMetadata({
  absoluteTitle: blogMeta.absoluteTitle,
  description: blogMeta.description,
  path: "/blog",
});

export const revalidate = 86400;

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <JsonLd
        data={pageWebSiteJsonLd({
          path: "/blog",
          name: "Felinda Journal",
          description: blogMeta.description,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Journal" },
        ])}
      />
      <Header activeHref="/blog" />
      <main className="min-h-[60vh]">
        <section className="border-b border-line/80 bg-shell/30">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
            <p className="font-sans text-xs font-medium uppercase tracking-luxe text-muted">Journal</p>
            <h1 className="mt-3 max-w-3xl font-serif text-4xl font-medium tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Stories from the bench
            </h1>
            <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-muted">
              Craft, care, and the small decisions that make fine jewelry feel personal—written for clients and
              fellow enthusiasts.
            </p>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          <BlogList posts={posts} />
        </section>
      </main>
      <Footer />
    </>
  );
}
