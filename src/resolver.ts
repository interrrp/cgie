import { join as joinPaths } from "std/path/mod.ts";

export function resolveScriptPathForURL(url: string): string {
  return joinPaths(
    "cgi-bin",
    new URL(url).pathname,
  );
}
