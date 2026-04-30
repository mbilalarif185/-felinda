import CreationsPage from "@/components/CreationsPage";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { banglesBraceletsMeta } from "@/lib/seo/meta-copy";

export const metadata = buildPageMetadata({
  absoluteTitle: banglesBraceletsMeta.absoluteTitle,
  description: banglesBraceletsMeta.description,
  path: "/bangles-bracelets",
});

export const revalidate = 86400;

const bangleFiles = [
  "FJ Insta- Movable Diamond Bracele.webp",
  "FJ Insta-18k Jade Bangle 2.webp",
  "FJ Insta-18k Jade Bracelet.webp",
  "FJ Insta-18k Pop Bangle.webp",
  "FJ Insta-18k Twist Bangle.webp",
  "FJ Insta-Akoya bracelet.webp",
  "FJ Insta-Gemsone Jade Bangle.webp",
  "FJ Insta-Guinevere Bangle2.webp",
  "FJ Insta-Name Bracelet.webp",
  "FJ Insta-Opal bracelet.webp",
  "FJ Insta-Ruby Bracelet.webp",
  "FJ Insta-Star bracelet-1.webp",
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
  image: `/images/felinda-jewelry/Bangles-Bracelets/${encodeURIComponent(file)}`,
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
      description="Sculpted cuffs, eternity tennis lines and stackable bands — Felinda bangles and bracelets are built to move with you, balancing weight and warmth on every wrist."
      galleryItems={galleryItems}
    />
  );
}
