/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['images.unsplash.com', 'pexels.com', 'via.placeholder.com'],
  },
}

module.exports = nextConfig
