import { assertEquals } from "std/assert/mod.ts";
import { join as joinPaths } from "std/path/mod.ts";
import { resolveScriptPathForURL } from "../src/resolver.ts";

Deno.test("resolves correct path", () => {
  const expected = joinPaths("cgi-bin", "hello.ts");
  const actual = resolveScriptPathForURL("https://localhost:8080/hello.ts");
  assertEquals(actual, expected);
});

Deno.test("resolves correct path with query params", () => {
  const expected = joinPaths("cgi-bin", "hello.ts");
  const actual = resolveScriptPathForURL(
    "https://localhost:8080/hello.ts?foo=bar",
  );
  assertEquals(actual, expected);
});
