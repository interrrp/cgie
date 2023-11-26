import { join as joinPaths } from "std/path/mod.ts";

export function resolveScriptPathForURL(url: string): string {
  return joinPaths(
    "cgi-bin",
    url
      .split("/").slice(3).join("/") // Remove protocol and domain
      .replace(/\?.+/, ""), // Remove query params
  );
}
