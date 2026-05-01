import CreationsPage from "@/components/CreationsPage";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { pearlCreationsMeta } from "@/lib/seo/meta-copy";

export const metadata = buildPageMetadata({
  absoluteTitle: pearlCreationsMeta.absoluteTitle,
  description: pearlCreationsMeta.description,
  path: "/pearl-creations",
});

export const revalidate = 86400;

const pearlFiles = [
  "FJ Insta- Golden South Sea Earrings.webp",
  "FJ Insta-ADELA Mabe.webp",
  "FJ Insta-ADELA Ring 1.webp",
  "FJ Insta-ADELA Ring and Earrings D.webp",
  "FJ Insta-Akoya bracelet.webp",
  "FJ Insta-Akoya Earrings.webp",
  "FJ Insta-Akoya Necklace.webp",
  "FJ Insta-ANYA Earrings-Tahitian and Fresh Water.webp",
  "FJ Insta-ANYA Pendant and Earrings-Tahitian.webp",
  "FJ Insta-Casual Mabe Earrings.webp",
  "FJ Insta-Dangling Pearl Earrings-3 2.webp",
  "FJ Insta-Dangling Pearl Earrings-4.webp",
  "FJ Insta-Dangling Pearl Earrings.webp",
  "FJ Insta-Diamond Drops Mabe Earrings.webp",
  "FJ Insta-Grey Akoya with Diamond Pendant.webp",
  "FJ Insta-Grey Akoya with Versatile Heart Pendant.webp",
  "FJ Insta-Mabe diamond pedant.webp",
  "FJ Insta-Mabe Earrings 2.webp",
  "FJ Insta-Mabe Earrings.webp",
  "FJ Insta-Mabe Floral Pendant.webp",
  "FJ Insta-MERI 2.webp",
  "FJ Insta-MORRIGAN Pendant.webp",
  "FJ Insta-Multi colour tahitian set-stylingB.webp",
  "FJ Insta-South Sea Pearl Earrings.webp",
  "FJ Insta-South Sea Pearl Necklace.webp",
  "FJ Insta-ZINNIA Ring B.webp",
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
  image: `/images/felinda-jewelry/Pearl-Series/${encodeURIComponent(file)}`,
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
      description="South Sea lustre, the rosy glow of Akoya, the soft baroque shapes of freshwater: every Felinda pearl is hand-selected and reimagined into pieces that feel as quietly modern as they are timeless."
      galleryItems={galleryItems}
    />
  );
}
