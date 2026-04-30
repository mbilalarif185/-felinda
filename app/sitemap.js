import { getAllPosts } from "@/lib/blog-data";
import { SITEMAP_PATHS } from "@/lib/constants/routes";
import { absoluteUrl } from "@/lib/constants/site";

export default async function sitemap() {
  const now = new Date();
  const staticEntries = SITEMAP_PATHS.map((path) => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));

  const posts = getAllPosts();
  const blogEntries = posts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.65,
  }));

  return [...staticEntries, ...blogEntries];
}
