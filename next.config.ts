import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable standalone output to create a minimal production image
  output: "standalone",
  eslint: {
    // Prevent Docker/CI builds from failing on lint issues
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
