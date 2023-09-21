import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

const ALIASES = {
  Contexts: resolve(__dirname, "./src/contexts"),
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  /* Absoloute path */
  resolve: { alias: ALIASES },
});
