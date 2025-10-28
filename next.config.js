/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ Skip linting during build
  },
  typescript: {
    ignoreBuildErrors: true, // ✅ Skip TypeScript type checking
  },
};

module.exports = nextConfig;
