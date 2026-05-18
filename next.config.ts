import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { hostname: "i.scdn.co" }, // Spotify
      { hostname: "yt3.ggpht.com" }, // YouTube
      { hostname: "a1.sndcdn.com" }, // SoundCloud
    ],
  },
};

export default nextConfig;
