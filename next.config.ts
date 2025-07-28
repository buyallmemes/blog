import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for AWS Amplify
  output: 'export',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true
  },
  
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