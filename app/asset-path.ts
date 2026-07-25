const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isUserOrOrgPagesSite = repositoryName?.endsWith(".github.io");

export const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ??
  (repositoryName && !isUserOrOrgPagesSite ? `/${repositoryName}` : "");

export function publicAsset(path: string) {
  return `${basePath}${path}`;
}
