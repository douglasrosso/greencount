import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";
import svgr from "vite-plugin-svgr";
// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  resolve: {
    alias: {
      "@assets/*": path.resolve(__dirname, "src/common/assets/*"),
      "@components": path.resolve(__dirname, "src/common/components"),
      "@components/*": path.resolve(__dirname, "src/common/components/*"),
      "@types": path.resolve(__dirname, "src/common/types"),
      "@utils": path.resolve(__dirname, "src/common/utils"),
      "@contexts": path.resolve(__dirname, "src/common/contexts"),
      "@hooks": path.resolve(__dirname, "src/common/hooks"),
      "@enums": path.resolve(__dirname, "src/common/enums"),
      "@theme": path.resolve(__dirname, "src/common/theme"),
      "@interfaces": path.resolve(__dirname, "src/common/interfaces"),
    },
  },
  plugins: [
    svgr(),
    // {exportAsDefault:true}
    react(),
    tsconfigPaths(),
  ],
});
