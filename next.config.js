/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["static.wikia.nocookie.net"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "localhost",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
