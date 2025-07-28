import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable strict mode
  reactStrictMode: true,
  
  // Optimize package imports
  experimental: {
    optimizePackageImports: ['@headlessui/react', '@heroicons/react']
  },
  
  // Handle trailing slashes consistently
  trailingSlash: true,
};

export default nextConfig;