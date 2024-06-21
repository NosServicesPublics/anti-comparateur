/** @type {import('next').NextConfig} */

import path from "path";
const __dirname = path.resolve(new URL(".", import.meta.url).pathname);

const isProduction = "production" === process.env.NODE_ENV;

const nextConfig = {
  reactStrictMode: true,
  output: isProduction ? "export" : undefined,
  images: { unoptimized: true },
  sassOptions: {
    additionalData: '@import "styles/abstracts/";',
  },
};

export default nextConfig;
