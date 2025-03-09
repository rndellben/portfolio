import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export", // Enables static export
    images: {
      unoptimized: true, // Needed because GitHub Pages does not support Next.js image optimization
    },
    basePath: "/portfolio", // Replace with your GitHub repository name
    assetPrefix: "/portfolio/", // Replace with your GitHub repository name
};

export default nextConfig;
