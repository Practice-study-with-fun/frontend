/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export", // Removed to allow middleware and proper layout usage
  images: {
    unoptimized: true,
  },
  typescript: {
    // ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;