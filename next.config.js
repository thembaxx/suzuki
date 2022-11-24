/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["devimages.heycarter.com", "images.heycarter.co.za"],
  },
};

module.exports = nextConfig;
