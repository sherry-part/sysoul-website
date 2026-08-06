import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's-ysoul.oss-cn-hangzhou.aliyuncs.com',
        port: '',
        pathname: '/public/**',
      },
    ],
  },
}
export default nextConfig
