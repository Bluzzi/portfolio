/** @type {import("next").NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    swcPlugins: [["typewind/swc", {}]]
  }
};

module.exports = nextConfig;