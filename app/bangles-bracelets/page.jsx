import CreationsPage from "@/components/CreationsPage";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { banglesBraceletsMeta } from "@/lib/seo/meta-copy";

export const metadata = buildPageMetadata({
  absoluteTitle: banglesBraceletsMeta.absoluteTitle,
  description: banglesBraceletsMeta.description,
  keywords: banglesBraceletsMeta.keywords,
  path: "/bangles-bracelets",
});

export const revalidate = 86400;

const bangleFiles = [
  "aurea-piece-1.webp",
  "aurea-piece-2.webp",
  "aurea-piece-3.webp",
  "aurea-piece-4.webp",
  "aurea-piece-5.webp",
  "aurea-piece-6.webp",
  "gold-bangle.webp",
  "aurea-piece-7.webp",
  "aurea-piece-8.webp",
  "aurea-piece-9.webp",
  "aurea-piece-10.webp",
  "aurea-piece-11.webp",
];

function titleFromFilename(filename) {
  const base = filename.replace(/\.(webp|jpg|jpeg|png)$/i, "");
  const productPart = base.includes("__") ? base.split("__").pop() : base;
  return productPart
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

const galleryItems = bangleFiles.map((file) => ({
  title: titleFromFilename(file),
  image: `/images/aurea-jewellery/Bangles-Bracelets/${encodeURIComponent(file)}`,
}));

export default function BanglesAndBraceletsPage() {
  return (
    <CreationsPage
      title="Bangles & Bracelets"
      activeHref="/bangles-bracelets"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Our Creations" },
        { label: "Bangles & Bracelets" },
      ]}
      description="From sculpted cuffs to tennis lines and stackable bands, each bracelet is created to move with you — balancing weight, form, and ease in every detail."
      galleryItems={galleryItems}
    />
  );
}
