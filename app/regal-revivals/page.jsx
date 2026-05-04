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
  "IMG_1399.webp",
  "IMG_1400.webp",
  "IMG_6208.webp",
  "IMG_6209.webp",
  "IMG_6210.webp",
  "IMG_6211.webp",
  "IMG_6212.webp",
  "IMG_6302.webp",
  "IMG_6303.webp",
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
      description="A private collection of heritage inspired designs, museum grade gemstones, and one-of a kind couture commissions. Felinda’s most intimate work reserved for those who collect quietly, and for a lifetime."
      galleryItems={galleryItems}
    />
  );
}
