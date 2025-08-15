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
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn3.itours.no",
        port: "",
      },
      {
        protocol: "https",
        hostname: "www.dotwconnect.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "media.tacdn.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "cdn.planingo.ai",
        port: "",
      },
      {
        protocol: "https",
        hostname: "s3.eu-north-1.amazonaws.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "secure.gravatar.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "us.dotwconnect.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "static-images.webbeds.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "xsgames.co",
        port: "",
      },
      {
        protocol: "https",
        hostname: "*.googleapis.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "bamboo.travel",
        port: "",
      },
      {
        protocol: "https",
        hostname: "planingo.ai",
        port: "",
      },
      {
        protocol: "https",
        hostname: "*.bamboo.travel",
        port: "",
      },
      {
        protocol: "https",
        hostname: "gravatar.com",
        port: "",
      },
      {
        protocol: "http",
        hostname: "*.gravatar.com",
        port: "",
      },
      {
        protocol: 'https',
        hostname: '*.hotelbeds.com',
        port: '',
      },
      {
        protocol: 'http',
        hostname: '*.hotelbeds.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: '*.unsplash.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'maps.gstatic.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'media-cdn.tripadvisor.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'hare-media-cdn.tripadvisor.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'www.gravatar.com',
        port: '',
      },
    ]
  },
};

export default nextConfig;
