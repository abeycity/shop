import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: [".js", ".jsx"], // Ensure .tsx files are included
    alias: {
      // eslint-disable-next-line no-undef
      "@": path.resolve(__dirname, "src"), // Configures @ as the alias for the src directory
    },
  },
});
