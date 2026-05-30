/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone", // This is crucial for cPanel
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;