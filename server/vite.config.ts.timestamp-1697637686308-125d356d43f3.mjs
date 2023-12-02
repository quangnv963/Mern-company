// vite.config.ts
import { defineConfig } from "file:///E:/base_project_nodejs/node_modules/vite/dist/node/index.js";
import { VitePluginNode } from "file:///E:/base_project_nodejs/node_modules/vite-plugin-node/dist/index.js";
import { resolve } from "path";
var __vite_injected_original_dirname = "E:\\base_project_nodejs";
var vite_config_default = defineConfig({
  root: "src",
  server: {
    port: 8080
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
      tsCompiler: "esbuild"
    })
  ],
  resolve: {
    alias: {
      "@": resolve(__vite_injected_original_dirname, "src")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxiYXNlX3Byb2plY3Rfbm9kZWpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxiYXNlX3Byb2plY3Rfbm9kZWpzXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi9iYXNlX3Byb2plY3Rfbm9kZWpzL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHsgVml0ZVBsdWdpbk5vZGUgfSBmcm9tIFwidml0ZS1wbHVnaW4tbm9kZVwiO1xyXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSBcInBhdGhcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgICByb290OiBcInNyY1wiLFxyXG4gICAgc2VydmVyOiB7XHJcbiAgICAgICAgcG9ydDogODA4MCxcclxuICAgIH0sXHJcbiAgICBidWlsZDoge1xyXG4gICAgICAgIHNzcjogXCJpbmRleC50c1wiLFxyXG4gICAgICAgIG91dERpcjogXCIuLi9kaXN0XCIsXHJcbiAgICAgICAgZW1wdHlPdXREaXI6IHRydWUsXHJcbiAgICAgICAgbWluaWZ5OiB0cnVlXHJcbiAgICB9LFxyXG4gICAgcGx1Z2luczogW1xyXG4gICAgICAgIC4uLlZpdGVQbHVnaW5Ob2RlKHtcclxuICAgICAgICAgICAgYWRhcHRlcjogXCJleHByZXNzXCIsXHJcbiAgICAgICAgICAgIGFwcFBhdGg6IFwiLi9hcHAudHNcIixcclxuICAgICAgICAgICAgZXhwb3J0TmFtZTogXCJ2aXRlTm9kZUFwcFwiLFxyXG4gICAgICAgICAgICB0c0NvbXBpbGVyOiBcImVzYnVpbGRcIixcclxuICAgICAgICB9KSxcclxuICAgIF0sXHJcbiAgICByZXNvbHZlOiB7XHJcbiAgICAgICAgYWxpYXM6IHtcclxuICAgICAgICAgICAgXCJAXCI6IHJlc29sdmUoX19kaXJuYW1lLCBcInNyY1wiKSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBd1AsU0FBUyxvQkFBb0I7QUFDclIsU0FBUyxzQkFBc0I7QUFDL0IsU0FBUyxlQUFlO0FBRnhCLElBQU0sbUNBQW1DO0FBSXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQ3hCLE1BQU07QUFBQSxFQUNOLFFBQVE7QUFBQSxJQUNKLE1BQU07QUFBQSxFQUNWO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDSCxLQUFLO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUixhQUFhO0FBQUEsSUFDYixRQUFRO0FBQUEsRUFDWjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ0wsR0FBRyxlQUFlO0FBQUEsTUFDZCxTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxZQUFZO0FBQUEsTUFDWixZQUFZO0FBQUEsSUFDaEIsQ0FBQztBQUFBLEVBQ0w7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNMLE9BQU87QUFBQSxNQUNILEtBQUssUUFBUSxrQ0FBVyxLQUFLO0FBQUEsSUFDakM7QUFBQSxFQUNKO0FBQ0osQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
