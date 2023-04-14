import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.pptx"],
  build: {
    rollupOptions: {
      external: (id) => id.startsWith("file-loader!"),
    },
  },
});
