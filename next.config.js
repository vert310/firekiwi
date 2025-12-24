/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  experimental: {
    swcTraceProfiling: false,
  },
  images: {
    unoptimized: false,
  },
};

module.exports = nextConfig;

