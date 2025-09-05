/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizeCss: false,
    optimizePackageImports: false,
  },
  swcMinify: true,
  compress: false,
  poweredByHeader: false,
  generateEtags: false,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
