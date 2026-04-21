import CreationsPage from "@/components/CreationsPage";

export const metadata = {
  title: "Earrings — Felinda Jewelry",
  description:
    "Felinda's earring atelier — luminous studs, drops and hoops, hand-finished in rose gold and pink gemstones.",
};

const galleryItems = [
  {
    title: "Rose Pearl Studs",
    image:
      "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Petal Drop Earrings",
    image:
      "https://images.unsplash.com/photo-1612460289436-bdc14e2c5365?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Whisper Hoops",
    image:
      "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Sapphire Chandelier",
    image:
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Garden Climbers",
    image:
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Heritage Drops",
    image:
      "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=1200&q=80",
  },
];

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
