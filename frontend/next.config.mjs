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
        remotePatterns: [
            {
                protocol: "https",
                hostname: "via.placeholder.com",
            },
        ],
    },
};

export default nextConfig;
