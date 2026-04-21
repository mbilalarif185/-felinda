import CreationsPage from "@/components/CreationsPage";

const galleryItems = [
  {
    title: "Rose Garden Pendant",
    image:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Pink Drop Earrings",
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Floral Sapphire Ring",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Bloom Bracelet",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Heritage Necklace",
    image:
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Gem Detail",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function FelindaGalleryPage() {
  return (
    <CreationsPage
      title="Bespoke Jewelry Gallery"
      activeHref="/bespoke"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Bespoke", href: "/bespoke" },
        { label: "Gallery" },
      ]}
      description="Every piece tells a story of timeless romance and feminine elegance. Our bespoke creations feature luminous pink gemstones, set in radiant rose gold and inspired by the beauty of nature's finest blooms."
      galleryItems={galleryItems}
    />
  );
}
