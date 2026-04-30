import { Suspense } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CustomRingsContent from "@/components/CustomRingsContent";
import JsonLd from "@/components/seo/JsonLd";
import {
  customRingsFaqJsonLd,
  customRingsHeroSubtitle,
  customRingsPageMeta,
} from "@/lib/content/custom-rings-page";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbJsonLd, pageWebSiteJsonLd, productJsonLd } from "@/lib/seo/json-ld";

export const metadata = buildPageMetadata({
  absoluteTitle: customRingsPageMeta.absoluteTitle,
  description: customRingsPageMeta.description,
  path: "/custom-rings",
});

export const revalidate = 86400;

export default function CustomRingsPage() {
  return (
    <>
      <JsonLd data={customRingsFaqJsonLd()} />
      <JsonLd
        data={pageWebSiteJsonLd({
          path: "/custom-rings",
          name: "Custom Rings",
          description: customRingsPageMeta.description,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Custom Rings" },
        ])}
      />
      <JsonLd
        data={productJsonLd({
          name: "Custom Rings",
          path: "/custom-rings",
          description: customRingsPageMeta.description,
          category: "Custom Rings",
        })}
      />
      <Header activeHref="/custom-rings" />

      <div className="min-h-screen bg-[#f6f0ec] text-[#56463f]">
        <PageHero
          title="Custom Rings"
          subtitle={customRingsHeroSubtitle}
          breadcrumb={[
            { label: "Home", href: "/" },
            { label: "Custom Rings" },
          ]}
        />

        <Suspense
          fallback={
            <section className="relative z-10 px-6 pb-12">
              <div className="mx-auto h-[min(420px,50vh)] max-w-[1320px] animate-pulse rounded-[30px] border border-[#e7dbd5] bg-[#fbf7f4]/80" />
            </section>
          }
        >
          <CustomRingsContent />
        </Suspense>
      </div>

      <Footer />
    </>
  );
}
