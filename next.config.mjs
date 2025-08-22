/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        ppr: 'incremental',
    },
    logging: {
        fetches: {
            fullUrl: true
        }
    }
};

export default nextConfig;
