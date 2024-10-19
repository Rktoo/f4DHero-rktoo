/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'flagcdn.com',
                port: '',
                pathname: '/**', // Permet d'accepter toutes les images sous ce domaine
            },
            {
                protocol: 'https',
                hostname: 'placehold.co',
                port: '',
                pathname: '/**', // Permet d'accepter toutes les images sous ce domaine
            },
            {
                protocol: 'https',
                hostname: 'weartwice.strapi-pro.com',
                port: '',
                pathname: '/**', // Permet d'accepter toutes les images sous ce domaine
            },
            {
                protocol: 'https',
                hostname: 'via.placeholder.com',
                port: '',
                pathname: '/**', // Permet d'accepter toutes les images sous ce domaine
            },
        ],
    },
    eslint: {
        ignoreDuringBuilds: true, // Ignore ESLint errors during build
    },
    typescript: {
        ignoreBuildErrors: true, // Ignore TypeScript errors during build
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/home',
                permanent: true,
            },
        ];
    },
};

module.exports = nextConfig;


