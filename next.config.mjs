/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol:'https',
                hostname:'*.cdninstagram.com'
            }
        ]
    }
};

export default nextConfig;
