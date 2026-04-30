import { Cormorant_Garamond, Inter, Great_Vibes } from "next/font/google";

import JsonLd from "@/components/seo/JsonLd";
import { absoluteUrl, DEFAULT_DESCRIPTION, SITE_LOGO_PATH, SITE_NAME } from "@/lib/constants/site";
import { rootJsonLdGraph } from "@/lib/seo/json-ld";
import { buildRootMetadata } from "@/lib/seo/metadata";

import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-great-vibes",
  display: "swap",
});

export const metadata = {
  ...buildRootMetadata(),
  title: {
    default: `${SITE_NAME} — Bespoke Fine Jewelry Atelier`,
    template: `%s · ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: absoluteUrl("/") }],
  creator: SITE_NAME,
  category: "jewelry",
  keywords: [
    "luxury jewelry Malaysia",
    "bespoke jewelry",
    "custom rings",
    "fine jewelry atelier",
    "handmade jewelry Malaysia",
    "Felinda Jewelry",
  ],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [{ url: SITE_LOGO_PATH, type: "image/png" }],
    apple: [{ url: SITE_LOGO_PATH, type: "image/png" }],
    shortcut: [SITE_LOGO_PATH],
  },
  manifest: "/manifest.webmanifest",
  twitter: {
    card: "summary_large_image",
    site: "@felindajewelrymy",
    creator: "@felindajewelrymy",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport = {
  themeColor: "#FBF8F6",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${greatVibes.variable}`}
    >
      <body className="min-h-screen bg-cream text-ink antialiased">
        <JsonLd data={rootJsonLdGraph()} />
        {children}
      </body>
    </html>
  );
}
