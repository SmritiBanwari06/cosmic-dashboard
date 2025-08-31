import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [tailwindcss()],
  server: {
    proxy: {
      "/nasa": {
        target: "https://api.nasa.gov",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/nasa/, ""),
      },
    },
  },
});
