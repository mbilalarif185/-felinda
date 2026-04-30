import { permanentRedirect } from "next/navigation";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Signature Archive",
  description: "Legacy signature archive page. Canonical collection now lives at /regal-revivals.",
  path: "/signature-archive",
  noIndex: true,
});

/**
 * Legacy URL — canonical gallery lives at /regal-revivals.
 */
export default function SignatureArchiveRedirect() {
  permanentRedirect("/regal-revivals");
}
