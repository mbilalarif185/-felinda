import CreationsPage from "@/components/CreationsPage";

export const metadata = {
  title: "Pendants & Necklaces — Felinda Jewelry",
  description:
    "Felinda's pendants & necklaces — delicate solitaires, layered chains and statement collars cast in rose gold and bespoke gemstones.",
};

const pendantFiles = [
  "Pendant-and-Necklaces-in-KL.webp",
  "916-gold-jewellery-malaysia__18k-gold-moonstone-diamond-pendant.webp",
  "925-sterling-silver-malaysia__18k-gold-garnet-diamond-starburst-pendant.webp",
  "999-gold-malaysia__18k-gold-morganite-diamond-pendant.webp",
  "affordable-gold-jewellery-malaysia__18k-sapphire-heart-pendant.webp",
  "birthstone-necklace-malaysia__akoya-pearl-necklace-4-to-4-5mm.webp",
  "bracelet-malaysia__18k-gold-akoya-necklace.webp",
  "buy-jewellery-online-malaysia__aiyana-signature-pendant-18k-gold-yellow-zircon-diamond.webp",
  "couple-ring-malaysia__18k-gold-name-necklace.webp",
  "custom-name-necklace-malaysia__18k-gold-south-sea-mabe-pearl-black-and-white-diamond-pendant.webp",
  "custom-ring-malaysia__18k-gold-fresh-water-baroque-pearl-name-necklace.webp",
  "diamond-pendant-malaysia__18k-gold-sapphire-diamond-evil-eye-pendant.webp",
  "diamond-ring-malaysia__otha-18k-gold-citrine-sapphires-spinels-diamond-pendant.webp",
  "earrings-malaysia__18k-gold-peacock-tahitian-pearl-diamond-necklace-ring.webp",
  "engagement-ring-malaysia__18k-gold-amethyst-diamond-pendant.webp",
  "gold-bangle-malaysia__18k-gold-coin-pendant.webp",
  "gold-ring-malaysia__golden-star-pendant-18k-gold-diamond.webp",
  "gold-shop-petaling-jaya__18k-mother-of-pearl-wishing-star-pendant.webp",
  "jade-jewellery-malaysia__18k-gold-halo-diamond-pendant.webp",
  "jewellery-boutique-bangsar__18k-ammolite-with-diamond-necklace.webp",
  "jewellery-gift-set-malaysia__18k-scarf-necklace.webp",
  "jewellery-shop-kuala-lumpur__18k-yellow-zircon-pendant.webp",
  "jewellery-store-penang__18k-citrine-with-diamond-pendant.webp",
  "jewelry-online-malaysia__aiyana-signature-pendant-18k-gold-imperial-topaz-diamond.webp",
  "korean-style-jewellery-malaysia__18k-gold-south-sea-mabe-diamond-pendant.webp",
  "men-gold-ring-malaysia__18k-gold-name-necklace-with-diamond.webp",
  "minimalist-jewellery-malaysia__18k-gold-south-sea-mabe-diamond-pendant.webp",
  "necklace-malaysia__sun-and-moon-pendant-18k-gold-diamond.webp",
  "pearl-necklace-malaysia__18k-gold-diamond-pendant-earrings-set.webp",
  "pendant-malaysia__18k-gold-charm-necklace.webp",
  "personalised-jewellery-malaysia__18k-red-jade-wishing-star-pendant.webp",
  "silver-jewellery-malaysia__anya-18k-gold-south-sea-tahitian-pearl-diamond-pendant.webp",
  "stackable-rings-malaysia__18k-gold-south-sea-mabe-diamond-floral-pendant.webp",
  "wedding-ring-malaysia__18k-gold-emerald-diamond-pendant.webp",
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

const galleryItems = pendantFiles.map((file) => ({
  title: titleFromFilename(file),
  image: `/images/felinda-jewelry/Pendants-Necklaces/${encodeURIComponent(file)}`,
}));

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
