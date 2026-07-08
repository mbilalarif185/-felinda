import CreationsPage from "@/components/CreationsPage";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { pearlCreationsMeta } from "@/lib/seo/meta-copy";

export const metadata = buildPageMetadata({
  absoluteTitle: pearlCreationsMeta.absoluteTitle,
  description: pearlCreationsMeta.description,
  keywords: pearlCreationsMeta.keywords,
  path: "/pearl-creations",
});

export const revalidate = 86400;

const pearlFiles = [
  "aurea-piece-151.webp",
  "aurea-piece-30.webp",
  "aurea-piece-31.webp",
  "pearl-necklace.webp",
  "aurea-piece-6.webp",
  "aurea-piece-152.webp",
  "aurea-piece-174.webp",
  "aurea-piece-175.webp",
  "aurea-piece-176.webp",
  "aurea-piece-177.webp",
  "aurea-piece-178.webp",
  "aurea-piece-156.webp",
  "aurea-piece-157.webp",
  "aurea-piece-181.webp",
  "aurea-piece-182.webp",
  "aurea-piece-183.webp",
  "aurea-piece-184.webp",
  "aurea-piece-161.webp",
  "aurea-piece-162.webp",
  "aurea-piece-187.webp",
  "aurea-piece-188.webp",
  "aurea-piece-189.webp",
  "aurea-piece-190.webp",
  "aurea-piece-191.webp",
  "aurea-piece-192.webp",
  "aurea-piece-193.webp",
  "P1015766.webp",
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

const galleryItems = pearlFiles.map((file) => ({
  title: titleFromFilename(file),
  image: `/images/aurea-jewellery/Pearl-Series/${encodeURIComponent(file)}`,
}));

export default function PearlCreationsPage() {
  return (
    <CreationsPage
      title="Pearl Creations"
      activeHref="/pearl-creations"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Our Creations" },
        { label: "Pearl Creations" },
      ]}
      description="South Sea lustre, Akoya’s soft blush, and the natural form of freshwater baroque pearls — each is hand-selected and transformed into pieces that feel both quietly modern and enduringly timeless."
      galleryItems={galleryItems}
    />
  );
}
