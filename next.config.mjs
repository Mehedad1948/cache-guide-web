/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    logging: 'silent', // Suppresses unnecessary logs
  },
  output: 'standalone',
  logging: {
    incomingRequests: false,
    fetches: {
      fullUrl: false
    }
  },
  productionBrowserSourceMaps: true,
  images: {
    remotePatterns: []
  },
};

export default nextConfig;
