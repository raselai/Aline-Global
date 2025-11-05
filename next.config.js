/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for cPanel deployment
  output: 'export',

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },

  // Optional: Configure base path if deploying to subdirectory
  // basePath: '/myapp',

  // Optional: Configure trailing slashes
  trailingSlash: true,
}

module.exports = nextConfig
