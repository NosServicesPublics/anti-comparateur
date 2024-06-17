/** @type {import('next').NextConfig} */

const isProduction = "production" === process.env.NODE_ENV;

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  assetPrefix: isProduction ? "/anti-comparateur" : "",
  basePath: isProduction ? "/anti-comparateur" : "",
  images: { unoptimized: true },
};

export default nextConfig;
