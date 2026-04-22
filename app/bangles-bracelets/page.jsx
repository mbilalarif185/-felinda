import CreationsPage from "@/components/CreationsPage";

export const metadata = {
  title: "Bangles & Bracelets — Felinda Jewelry",
  description:
    "Felinda's bangles & bracelets — sculpted cuffs, eternity tennis lines and stackable bands in rose gold and rare gemstones.",
};

const bangleFiles = [
  
  
  "gold shop Petaling Jaya.webp",
  "gold shop Petaling Jaya-.webp",
  "jewellery boutique Bangsar.webp",
  "jewellery shop Kuala Lumpur.webp",
  "jewellery shop Selangor.webp",
  "jewellery shop Johor Bahru.webp",
  "sustainable jewellery Malaysia.webp",
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
