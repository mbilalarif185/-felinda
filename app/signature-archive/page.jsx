import CreationsPage from "@/components/CreationsPage";

export const metadata = {
  title: "Signature & Archive Pieces — Felinda Jewelry",
  description:
    "Felinda's signature and archive pieces — limited heritage designs, museum-grade gemstones and one-of-a-kind couture commissions.",
};

const galleryItems = [
  {
    title: "Archive Solitaire",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Heritage Necklace",
    image:
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Couture Drop Earrings",
    image:
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Limited Bloom Brooch",
    image:
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Signature Cuff",
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Museum-Grade Pendant",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80",
  },
];

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
