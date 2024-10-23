/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'vault-drop.s3.us-east-1.amazonaws.com',
                port: ''
            },
            {
                protocol: 'https',
                hostname: 'utfs.io',
                port: ''
            },
        ]
    }
};

export default nextConfig;