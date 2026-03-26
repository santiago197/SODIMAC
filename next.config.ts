import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["media.falabella.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.falabella.com",
        port: "",
        pathname: "/sodimacCO/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
