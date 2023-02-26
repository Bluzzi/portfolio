/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    typedRoutes: true,
    swcPlugins: [["typewind/swc", {}]]
  }
};

module.exports = nextConfig;