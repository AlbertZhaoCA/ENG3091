/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.wku.edu.cn"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
