import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/linux-admin-learning-platform",
  assetPrefix: "/linux-admin-learning-platform/",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  compiler: {
    removeConsole: {
      exclude: ["error"],
    },
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
