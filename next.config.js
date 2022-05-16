/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "www.pngfind.com"
    ],
  },
  webpack5: false,
}

module.exports = nextConfig
