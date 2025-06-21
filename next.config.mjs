/** @type {import('next').NextConfig} */

const nextConfig = {
  
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  basePath: '/my-portfolio',
  assetPrefix: '/my-portfolio/',
}

export default nextConfig
