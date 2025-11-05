import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: [
      { find: "@", replacement: "/src" }, // allows imports like "@/components/..."
    ],
  },
  build: {
    outDir: "dist", // matches Vercel output
  },
});
