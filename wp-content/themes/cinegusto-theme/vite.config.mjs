import {defineConfig} from "vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  root: "./assets",
  base: "/",
  plugins: [tailwindcss()],
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "assets/js/main.js"),
        style: path.resolve(__dirname, "assets/css/index.css"),
      },
      output: {
        entryFileNames: "js/[name].js",
        assetFileNames: "css/[name].[ext]",
      },
    },
  },
});
