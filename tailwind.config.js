/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./preview.jsx",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FBF8F6",
        ivory: "#FAF6EF",
        ink: "#2B2321",
        noir: "#15110F",
        rose: "#D8A29A",
        roseSoft: "#E8C4BF",
        shell: "#F5F0EB",
        line: "#E9DFDA",
        clay: "#A17C75",
        muted: "#6E655F",
        gold: "#C9A96E",
        goldDark: "#A8884F",
        champagne: "#E5D3B3",
        champagneSoft: "#F2E7D2",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "serif"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
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
