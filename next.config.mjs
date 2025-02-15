/** @type {import('next').NextConfig} */
const nextConfig = {

    output: "export", // Enables static export
  basePath: "/Locomotive", // Set this to your GitHub repo name
  images: {
    unoptimized: true, // Necessary because GitHub Pages does not support Next.js image optimization
  },
};

export default nextConfig;
