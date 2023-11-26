import { join as joinPaths } from "std/path/mod.ts";

export async function runScript(
  path: string,
  request: Request,
): Promise<Response> {
  const { main } = await import(
    "file://" + joinPaths(Deno.cwd(), path) + ".ts"
  );
  const { status, headers, body } = await main(request);
  return new Response(body, { status, headers });
}
