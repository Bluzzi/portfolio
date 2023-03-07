/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    swcPlugins: [["typewind/swc", {}]]
  }
};

module.exports = nextConfig;