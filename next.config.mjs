/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: [
    "localhost:3000",
    "127.0.0.1:3000",
    "192.168.137.1:3000",
    "10.10.0.42:3000",
    "192.168.137.1",
    "10.10.0.42",
  ],
};

export default nextConfig;
