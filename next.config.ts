import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  images: {
    domains: ["images.ctfassets.net"],
  },
  compiler: {
    styledComponents: true,
  },
  webpack: (config) => {
    config.module?.rules.push({
      test: /\.svg$/,
      use: "raw-loader",
    });

    return config;
  },
};

export default nextConfig;
