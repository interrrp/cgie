import { resolveScriptPathForURL } from "./resolver.ts";
import { runScript } from "./runner.ts";

export async function handleRequest(request: Request): Promise<Response> {
  const path = resolveScriptPathForURL(request.url);
  return await runScript(path, request);
}
