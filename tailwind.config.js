/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./lib/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Re-themed to the luxe dark palette. These legacy semantic tokens are
           used across every inner page; remapping them here flips those pages
           to the dark theme site-wide. (Dual-role bg-ink/text-cream sections
           are patched explicitly in their components.) */
        cream: "#0A0A0A", // primary page background (was light)
        ivory: "#121212", // alt surface
        shell: "#141414", // secondary surface / image wells
        ink: "#F3EFE6", // primary text (now light)
        noir: "#050505", // deepest surface (code blocks)
        rose: "#D4AF37", // primary accent → gold
        roseSoft: "#C9A24A", // soft gold (rings/overlays)
        line: "#26221E", // hairline borders on dark
        clay: "#D4AF37", // eyebrow accent → gold
        muted: "#B8B2A6", // secondary text
        gold: "#D4AF37",
        goldDark: "#9E7B23",
        champagne: "#D4AF37",
        champagneSoft: "#161310", // tinted dark fill (blockquote/avatar)

        /* --- Register direction: nocturnal atelier tray + antique gold --- */
        atelierInk: "#1C1512", // deep warm espresso — dark hero base
        atelierPlum: "#3A2730", // gemstone aubergine — hero glow only
        atelierIvory: "#F5EFE6", // warm paper ivory — main light ground
        atelierPorcelain: "#FCFAF5", // near-white card surface
        atelierGold: "#B08A4A", // true antique gold — hairlines, hallmark
        atelierGoldSoft: "#CBAE7B", // lighter gold — on dark ground
        atelierMute: "#675D55", // warm taupe secondary text (AA on ivory)
        atelierHair: "#E4DACE", // hairline rule on ivory

        /* --- "Timeless Elegance" luxe homepage: black + gold --- */
        luxeBlack: "#0A0A0A", // hero gradient top / page ground
        luxeCharcoal: "#1A1A1A", // hero gradient bottom / raised surfaces
        luxeGold: "#D4AF37", // primary gold accent
        luxeGoldSoft: "#E8CE8B", // lighter gold for text/hover
        luxeGoldDeep: "#9E7B23", // deep gold for shadows/borders
        luxeSmoke: "#B8B2A6", // muted body text on black
        luxeGlass: "rgba(255,255,255,0.04)", // glassmorphism fill
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "serif"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        ledger: ["var(--font-ledger)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        luxe: "0.32em",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInSlow: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        riseIn: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        kenburns: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
      },
      animation: {
        "fade-in": "fadeIn 1.1s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in-slow": "fadeInSlow 1.6s ease-out both",
        "rise-in": "riseIn 1.2s cubic-bezier(0.22, 1, 0.36, 1) both",
        kenburns: "kenburns 14s ease-out forwards",
      },
    },
  },
  plugins: [],
};
