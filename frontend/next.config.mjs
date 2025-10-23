/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "e7.pngegg.com",
            "via.placeholder.com",
            "www.webx.pk",
            "vectorseek.com",
            "encrypted-tbn0.gstatic.com",
            "skgusa.com",
        ],
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
