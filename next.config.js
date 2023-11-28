/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['m.media-amazon.com', 'imdb-api.com'],
  },
};

module.exports = nextConfig;
