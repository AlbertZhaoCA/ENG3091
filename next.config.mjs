/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.wku.edu.cn","se-images.campuslabs.com"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
