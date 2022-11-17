/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["devimages.heycarter.com"],
  },
};

module.exports = nextConfig;
