export const basePath = process.env.GITHUB_PAGES === "true" ? "/polina-website" : "";

export function withBasePath(path: string) {
  if (!path || /^https?:\/\//.test(path)) return path;
  return `${basePath}${path}`;
}
