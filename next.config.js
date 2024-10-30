/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['localhost', 'res.cloudinary.com'],
        unoptimized: process.env.NODE_ENV === 'development',
    },
    output: 'standalone',
    reactStrictMode: true,
};

module.exports = nextConfig;

