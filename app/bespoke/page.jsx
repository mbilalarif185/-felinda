import { permanentRedirect } from "next/navigation";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Bespoke",
  description: "Legacy bespoke page. Canonical custom rings collection now lives at /custom-rings.",
  path: "/bespoke",
  noIndex: true,
});

/**
 * Bespoke gallery is not linked in navigation; old URLs redirect to Custom Rings.
 */
export default function BespokePage() {
  permanentRedirect("/custom-rings");
}
