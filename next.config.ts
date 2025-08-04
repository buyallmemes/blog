import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Enable strict mode
  reactStrictMode: true,

  // Optimize package imports
  experimental: {
    optimizePackageImports: ['@headlessui/react', '@heroicons/react'],
  },

  // Handle trailing slashes consistently
  trailingSlash: true,

  // Serve images from content directories
  async rewrites() {
    return [
      {
        source: '/blog/:slug/images/:path*',
        destination: '/api/content-images/:slug/:path*',
      },
    ];
  },
};

export default nextConfig;
