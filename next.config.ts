import { dirname } from 'path'
import { fileURLToPath } from 'url'
import type { NextConfig } from 'next'

const __dirname = dirname(fileURLToPath(import.meta.url))

const nextConfig: NextConfig = {
  outputFileTracingRoot: __dirname,
  images: {
    remotePatterns: [],
    unoptimized: false,
  },
  experimental: {
    optimizePackageImports: ['framer-motion', 'clsx'],
  },
}

export default nextConfig