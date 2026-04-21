import CreationsPage from "@/components/CreationsPage";

export const metadata = {
  title: "Pendants & Necklaces — Felinda Jewelry",
  description:
    "Felinda's pendants & necklaces — delicate solitaires, layered chains and statement collars cast in rose gold and bespoke gemstones.",
};

const galleryItems = [
  {
    title: "Rose Solitaire Pendant",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Heritage Chain",
    image:
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Petal Locket",
    image:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Layered Whisper",
    image:
      "https://images.unsplash.com/photo-1599643478558-9b0c2d77f7df?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Bloom Choker",
    image:
      "https://images.unsplash.com/photo-1620912189865-9d24cd5fc4f1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Sapphire Drop",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function PendantsAndNecklacesPage() {
  return (
    <CreationsPage
      title="Pendants & Necklaces"
      activeHref="/pendants-necklaces"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Our Creations" },
        { label: "Pendants & Necklaces" },
      ]}
      description="Heirloom solitaires, layered chains and quietly opulent collars — each Felinda neckpiece is composed to rest beautifully on the skin and to be passed gently from one generation to the next."
      galleryItems={galleryItems}
    />
  );
}
