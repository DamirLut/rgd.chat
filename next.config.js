const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  sassOptions: {
    includePaths: [path.resolve('styles')],
  },
  images: {
    remotePatterns: [
      {
        hostname: 'cdn.discordapp.com',
      },
      {
        hostname: 'media.discordapp.net',
      },
      {
        hostname: 'img.itch.zone',
      },
    ],
  },
};

module.exports = nextConfig;
