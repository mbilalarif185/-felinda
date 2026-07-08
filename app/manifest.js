import { SITE_LOGO_PATH, SITE_NAME } from "@/lib/constants/site";

export default function manifest() {
  return {
    name: SITE_NAME,
    short_name: "Auréa",
    description:
      "Auréa Jewellery — handcrafted rings, necklaces, earrings and bracelets from our London studio. Ethically sourced, beautifully made.",
    start_url: "/",
    display: "standalone",
    background_color: "#FBF8F6",
    theme_color: "#FBF8F6",
    icons: [
      {
        src: SITE_LOGO_PATH,
        type: "image/png",
        sizes: "any",
      },
    ],
  };
}
