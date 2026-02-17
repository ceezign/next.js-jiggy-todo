/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: '',
        pathname: '/gitdagray/test-blogposts/main/images/**',
      },
    ],
  },
  // add an empty turbopack config to avoid Turbopack vs webpack error
  turbopack: {},
  webpack(config, { dev }) {
    if (dev) {
      // disable source maps in dev to avoid invalid source-map parsing
      config.devtool = false
    }
    return config
  },
}

module.exports = nextConfig
