import CreationsPage from "@/components/CreationsPage";

export const metadata = {
  title: "Signature & Archive Pieces — Felinda Jewelry",
  description:
    "Felinda's signature and archive pieces — limited heritage designs, museum-grade gemstones and one-of-a-kind couture commissions.",
};

const archiveFiles = [
  "buy-jewellery-in-malaysia.webp",
  "jewelry-online-malaysia__felinda-jewelry-01.webp",
  "buy-jewellery-online-malaysia__felinda-jewelry-02.webp",
  "silver-jewellery-malaysia__felinda-jewelry-03.webp",
  "diamond-ring-malaysia__felinda-jewelry-04.webp",
  "gold-ring-malaysia__felinda-jewelry-05.webp",
  "necklace-malaysia__felinda-jewelry-06.webp",
  "earrings-malaysia__felinda-jewelry-07.webp",
];

function titleFromFilename(filename) {
  const base = filename.replace(/\.webp$/i, "");
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

export default function SignatureArchivePage() {
  return (
    <CreationsPage
      title="Signature & Archive Pieces"
      activeHref="/signature-archive"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Our Creations" },
        { label: "Signature & Archive" },
      ]}
      description="A private collection of limited heritage designs, museum-grade gemstones and one-of-a-kind couture commissions — Felinda's most personal work, reserved for those who collect quietly and forever."
      galleryItems={galleryItems}
    />
  );
}
