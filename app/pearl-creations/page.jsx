import CreationsPage from "@/components/CreationsPage";

export const metadata = {
  title: "Pearl Creations — Felinda Jewelry",
  description:
    "Felinda's pearl atelier — South Sea, Akoya and freshwater pearls, hand-strung and re-imagined into modern heirlooms.",
};

const galleryItems = [
  {
    title: "South Sea Strand",
    image:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Akoya Studs",
    image:
      "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Pearl Drop Pendant",
    image:
      "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Baroque Cuff",
    image:
      "https://images.unsplash.com/photo-1612460289436-bdc14e2c5365?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Layered Pearl Necklace",
    image:
      "https://images.unsplash.com/photo-1620912189865-9d24cd5fc4f1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Mother of Pearl Ring",
    image:
      "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=1200&q=80",
  },
];

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
