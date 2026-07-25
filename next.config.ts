import type { NextConfig } from "next";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isUserOrOrgPagesSite = repositoryName?.endsWith(".github.io");
const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ??
  (repositoryName && !isUserOrOrgPagesSite ? `/${repositoryName}` : "");

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  turbopack: {
    root: process.cwd(),
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
