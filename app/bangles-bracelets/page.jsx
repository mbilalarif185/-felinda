import CreationsPage from "@/components/CreationsPage";

export const metadata = {
  title: "Bangles & Bracelets — Felinda Jewelry",
  description:
    "Felinda's bangles & bracelets — sculpted cuffs, eternity tennis lines and stackable bands in rose gold and rare gemstones.",
};

const galleryItems = [
  {
    title: "Rose Gold Cuff",
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Eternity Tennis",
    image:
      "https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Petal Bangle",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Layered Stack",
    image:
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Charmed Romance",
    image:
      "https://images.unsplash.com/photo-1591348278863-a8fb3887e2aa?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Sapphire Link",
    image:
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1200&q=80",
  },
];

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
