/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ['bcrypt'],
    typescript: {
      ignoreBuildErrors: true
    },
    esLint: {
      ignoreDuringBuilds: true
    }
  },
}

module.exports = nextConfig
