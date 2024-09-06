import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path"; // Import the path module

// Export the configuration using defineConfig
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Correctly resolve the '@' alias to the 'src' folder
    },
  },
});
