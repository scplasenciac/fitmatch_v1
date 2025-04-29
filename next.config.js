/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  basePath: process.env.NODE_ENV === 'production' ? '/fitmatch_v1' : '',
  images: {
    unoptimized: true,
  },
  // Ensure proper handling of static files
  assetPrefix: process.env.NODE_ENV === 'production' ? '/fitmatch_v1/' : '',
  // Enable strict mode for better development experience
  reactStrictMode: true,
  // Ensure proper handling of trailing slashes
  trailingSlash: true,
  // Ensure proper handling of public directory
  publicRuntimeConfig: {
    staticFolder: process.env.NODE_ENV === 'production' ? '/fitmatch_v1' : '',
  },
}

module.exports = nextConfig 