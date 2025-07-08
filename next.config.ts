import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
    domains: ["image.tmdb.org", "www.google.com", "fptshop.com.vn"],
  },
};

export default nextConfig;
