import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizeCss: true, // critical CSS ko inline karta hai, baaki ko defer
  },
};

export default nextConfig;
