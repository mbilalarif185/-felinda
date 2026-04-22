import CreationsPage from "@/components/CreationsPage";

export const metadata = {
  title: "Pearl Creations — Felinda Jewelry",
  description:
    "Felinda's pearl atelier — South Sea, Akoya and freshwater pearls, hand-strung and re-imagined into modern heirlooms.",
};

const pearlFiles = [
  
  "916-gold-jewellery-malaysia__18k-white-akoya-earrings.webp",
  "925-sterling-silver-malaysia__18k-south-sea-pearl-earrings.webp",
  "999-gold-malaysia__18k-cream-akoya-earrings.webp",
  "bracelet-malaysia__18k-gold-peacock-tahitian-pearl-diamond-necklace-ring.webp",
  "buy-jewellery-online-malaysia__amora-18k-gold-south-sea-mabe-pearl-diamond-ring.webp",
  "couple-ring-malaysia__18k-south-sea-mabe-pearl-diamond-earrings.webp",
  "custom-ring-malaysia__18k-akoya-necklace.webp",
  "diamond-pendant-malaysia__18k-grey-akoya-earrings.webp",
  "diamond-ring-malaysia__anya-18k-gold-tahitian-pearl-diamond-pendant-necklace.webp",
  "earrings-malaysia__zinnia-18k-gold-south-sea-pearl-sapphire-diamond-ring.webp",
  "engagement-ring-malaysia__akoya-pearl-necklace-4-to-4-5mm.webp",
  "gold-bangle-malaysia__18k-gold-fresh-water-baroque-pearl-name-necklace.webp",
  "gold-ring-malaysia__18k-gold-fresh-water-pearl-dangling-earrings.webp",
  "jade-jewellery-malaysia__18k-gold-south-sea-mabe-diamond-pendant.webp",
  "jewelry-online-malaysia__adela-18k-gold-south-sea-mabe-pearl-diamond-ring-earring.webp",
  "men-gold-ring-malaysia__18k-gold-south-sea-mabe-pearl-black-and-white-diamond-pendant.webp",
  "necklace-malaysia__meri-18k-gold-fresh-water-pearl-diamond-ring.webp",
  "pearl-necklace-malaysia__18k-gold-south-sea-mabe-diamond-floral-pendant.webp",
  "pendant-malaysia__18k-gold-akoya-necklace.webp",
  "silver-jewellery-malaysia__anya-18k-gold-south-sea-pearl-diamond-pendant-necklace.webp",
  "stackable-rings-malaysia__18k-south-sea-pearl-necklace.webp",
  "wedding-ring-malaysia__18k-akoya-bracelet.webp",
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
      description="South Sea lustre, the rosy glow of Akoya, the soft baroque shapes of freshwater — every Felinda pearl is hand-selected and reimagined into pieces that feel as quietly modern as they are timeless."
      galleryItems={galleryItems}
    />
  );
}
