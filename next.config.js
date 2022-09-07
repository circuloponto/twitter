/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["help.twitter.com", 'preview.keenthemes.com']
  }
}

module.exports = nextConfig
