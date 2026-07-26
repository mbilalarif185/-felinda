import type { Metadata } from "next";

import { buildPageMetadata } from "@/lib/seo/metadata";
import { homeMeta } from "@/lib/seo/meta-copy";
import { heroFeatured } from "@/lib/content";

import Navbar from "@/components/luxe/sections/Navbar";
import Hero from "@/components/luxe/sections/Hero";
import FeaturedCollections from "@/components/luxe/sections/FeaturedCollections";
import BestSellers from "@/components/luxe/sections/BestSellers";
import AboutBrand from "@/components/luxe/sections/AboutBrand";
import WhyChooseUs from "@/components/luxe/sections/WhyChooseUs";
import Testimonials from "@/components/luxe/sections/Testimonials";
import InstagramGallery from "@/components/luxe/sections/InstagramGallery";
import Newsletter from "@/components/luxe/sections/Newsletter";
import LuxeFooter from "@/components/luxe/sections/LuxeFooter";

export const metadata: Metadata = {
  ...buildPageMetadata({
    absoluteTitle: homeMeta.absoluteTitle,
    description: homeMeta.description,
    keywords: homeMeta.keywords,
    path: "/",
    ogImage: heroFeatured.src,
  }),
  verification: {
    google: "SaMCE1pImIZgYHQW_3A6jOkcJOFur-oCy_G7yI8CGfU",
  },
};

export const revalidate = 3600;

export default function HomePage() {
  return (
    <div className="luxe min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <FeaturedCollections />
        <BestSellers />
        <AboutBrand />
        <WhyChooseUs />
        <Testimonials />
        <InstagramGallery />
        <Newsletter />
      </main>
      <LuxeFooter />
    </div>
  );
}
