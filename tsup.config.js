import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["lib/index.js"],
    format: ["cjs", "esm"],
    noExternal: ["mdn-data"],
});
