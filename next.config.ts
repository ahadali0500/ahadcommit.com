import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '212.38.95.69',
        port: '1397', // optional if you have port
        pathname: '/uploads/**',
      },
    ],
  },
};

export default nextConfig;
