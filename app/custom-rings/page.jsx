import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CustomRingsContent from "@/components/CustomRingsContent";

export const metadata = {
  title: "Custom Rings — Felinda Jewelry",
  description:
    "Felinda's custom ring atelier — daring dazzlers, men's rings, wedding rings and engagement rings, each crafted around your story.",
};

export default function CustomRingsPage() {
  return (
    <>
      <Header activeHref="/custom-rings" />

      <div className="min-h-screen bg-[#f6f0ec] text-[#56463f]">
        <PageHero
          title="Custom Rings"
          breadcrumb={[
            { label: "Home", href: "/" },
            { label: "Custom Rings" },
          ]}
        />

        <CustomRingsContent />
      </div>

      <Footer />
    </>
  );
}
