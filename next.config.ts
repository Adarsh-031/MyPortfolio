import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env:{
    CODEFORCES_HANDLE : process.env.CODEFORCES_HANDLE,
  },
};

export default nextConfig;
