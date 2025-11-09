/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'admin.ahadcommit.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: '212.38.95.69',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
