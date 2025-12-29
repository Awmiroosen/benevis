import type { NextConfig } from "next";

const hostname: string[] = [
  "lh3.googleusercontent.com",
  "lh4.googleusercontent.com",
  "lh5.googleusercontent.com",
  "lh6.googleusercontent.com",
];

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: hostname.map((hostname) => ({
      protocol: "https",
      hostname,
    })),
  },
};

export default nextConfig;
