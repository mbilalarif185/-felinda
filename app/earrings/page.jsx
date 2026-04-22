import CreationsPage from "@/components/CreationsPage";

export const metadata = {
  title: "Earrings — Felinda Jewelry",
  description:
    "Felinda's earring atelier — luminous studs, drops and hoops, hand-finished in rose gold and pink gemstones.",
};

const earringFiles = [
  
  "bracelet-malaysia__18k-gold-south-sea-mabe-pearl-diamond-earrings.webp",
  "buy-jewellery-online-malaysia__anya-18k-gold-tahitian-pearl-diamond-earrings.webp",
  "couple-ring-malaysia__18k-spinel-studs.webp",
  "diamond-ring-malaysia__18k-gold-diamond-studs.webp",
  "earrings-malaysia__18k-gold-halo-diamond-studs.webp",
  "engagement-ring-malaysia__18k-citrine-with-diamond-studs.webp",
  "gold-bangle-malaysia__18k-gold-south-sea-mabe-pearl-diamond-royal-earrings.webp",
  "gold-ring-malaysia__18k-gold-double-sided-earrings-yellow-zircons.webp",
  "jade-jewellery-malaysia__18k-diamond-long-studs.webp",
  "jewelry-online-malaysia__anya-18k-gold-south-sea-pearl-diamond-earrings.webp",
  "men-gold-ring-malaysia__18k-fj-diamond-hoop.webp",
  "necklace-malaysia__18k-gold-fresh-water-pearl-dangling-earrings.webp",
  "pearl-necklace-malaysia__18k-diamond-hoop-earrings.webp",
  "pendant-malaysia__18k-gold-south-sea-mabe-pearl-diamond-royal-earrings.webp",
  "silver-jewellery-malaysia__18k-gold-diamond-studs.webp",
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

const galleryItems = earringFiles.map((file) => ({
  title: titleFromFilename(file),
  image: `/images/felinda-jewelry/EarRings/${encodeURIComponent(file)}`,
}));

export default function EarringsPage() {
  return (
    <CreationsPage
      title="Earrings"
      activeHref="/earrings"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Our Creations" },
        { label: "Earrings" },
      ]}
      description="From whisper-soft studs to sweeping chandeliers, every Felinda earring is sculpted to catch the light at every turn — radiant pink gemstones, hand-set in our signature rose gold."
      galleryItems={galleryItems}
    />
  );
}
