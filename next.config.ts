import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      {
        source: "/reviews",
        destination: "/category/software-reviews",
        permanent: true,
      },
      {
        source: "/comparisons",
        destination: "/category/software-comparisons",
        permanent: true,
      },
      {
        source: "/tutorials",
        destination: "/category/web-development",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
