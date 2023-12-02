import { defineConfig } from "vite";
import { VitePluginNode } from "vite-plugin-node";
import { resolve } from "path";

export default defineConfig({
    root: "src",
    server: {
        port: 8080,
    },
    build: {
        ssr: "index.ts",
        outDir: "../dist",
        emptyOutDir: true,
        minify: true
    },
    plugins: [
        ...VitePluginNode({
            adapter: "express",
            appPath: "./app.ts",
            exportName: "viteNodeApp",
            tsCompiler: "esbuild",
        }),
    ],
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
        },
    },
});
