import CreationsPage from "@/components/CreationsPage";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { regalRevivalsMeta } from "@/lib/seo/meta-copy";

export const metadata = buildPageMetadata({
  absoluteTitle: regalRevivalsMeta.absoluteTitle,
  description: regalRevivalsMeta.description,
  path: "/regal-revivals",
});

export const revalidate = 86400;

const archiveFiles = [
  "jewelry-online-malaysia__felinda-jewelry-01.webp",
  "buy-jewellery-online-malaysia__felinda-jewelry-02.webp",
  "silver-jewellery-malaysia__felinda-jewelry-03.webp",
  "diamond-ring-malaysia__felinda-jewelry-04.webp",
  "gold-ring-malaysia__felinda-jewelry-05.webp",
  "necklace-malaysia__felinda-jewelry-06.webp",
  "earrings-malaysia__felinda-jewelry-07.webp",
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

const galleryItems = archiveFiles.map((file) => ({
  title: titleFromFilename(file),
  image: `/images/felinda-jewelry/Regal-Revivals/${encodeURIComponent(file)}`,
}));

export default function RegalRevivalsPage() {
  return (
    <CreationsPage
      title="Regal Revivals"
      activeHref="/regal-revivals"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Our Creations" },
        { label: "Regal Revivals" },
      ]}
      description="A private collection of limited heritage designs, museum-grade gemstones and one-of-a-kind couture commissions — Felinda's most personal work, reserved for those who collect quietly and forever."
      galleryItems={galleryItems}
    />
  );
}
