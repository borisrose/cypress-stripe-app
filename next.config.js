/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.groupebeaucage.com',
        pathname:'/**',
        port:'',
      },
    
    ],



  }
}

module.exports = nextConfig
