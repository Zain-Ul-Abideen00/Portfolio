/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['cdn.sanity.io'],
    },
    env: {
        NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
        NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
        NEXT_PUBLIC_SANITY_API_READ_TOKEN: process.env.NEXT_PUBLIC_SANITY_API_READ_TOKEN,
        NEXT_PUBLIC_SANITY_API_WRITE_TOKEN: process.env.NEXT_PUBLIC_SANITY_API_WRITE_TOKEN,
    },
    experimental: {
        appDir: true,
    },
    webpack: (config) => {
        config.resolve.fallback = { fs: false };

        return config;
    },
    headers: async () => {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN',
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
