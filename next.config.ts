import type { NextConfig } from "next";

// Some launch environments inject a malformed server-side localStorage object.
// Next's dev overlay checks only for existence, then calls getItem().
if (
  "localStorage" in globalThis &&
  typeof globalThis.localStorage !== "undefined" &&
  typeof globalThis.localStorage?.getItem !== "function"
) {
  // Reset it so Next treats localStorage as unavailable on the server.
  // This avoids dev-server 500s caused by broken Node launch flags.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (globalThis as any).localStorage = undefined;
}

const nextConfig: NextConfig = {};

export default nextConfig;
