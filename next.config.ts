import withPWAInit from "@ducanh2912/next-pwa";
import { NextConfig } from "next";

// Configuration PWA
const withPWA = withPWAInit({
  dest: "public",
  register: true,
  disable: process.env.NODE_ENV === "development",
  reloadOnOnline: true,
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  workboxOptions: {
    disableDevLogs: true,
  },
});

// Configuration Next.js
const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ignore ESLint pendant le build
  },
  turbopack: {
    resolveExtensions: [".mdx", ".tsx", ".ts", ".jsx", ".js", ".mjs", ".json"],
  },
  experimental: {
    optimizePackageImports: ["@heroui/react"],
  },
};

// Export final combiné PWA + Next.js
export default withPWA(nextConfig);
