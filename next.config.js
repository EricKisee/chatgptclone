/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
}

module.exports = {
  ...nextConfig,
  images: {
    domains: ['links.papareact.com'],
  },
}
