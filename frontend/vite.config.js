import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  optimizeDeps: {
    include: ["sonner"],
  },
  css: {
    preprocessorOptions: {
      scss: {
        charset: false,
      },
    },
  },
  build: {
    minify: false,
    chunkSizeWarningLimit: 1000,
  },
});
