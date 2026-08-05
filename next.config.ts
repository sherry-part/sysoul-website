import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s-ysoul.oss-cn-hangzhou.aliyuncs.com",
        port: "",
        pathname: "/public/**"
      }
    ]
  }
};

export default nextConfig;
