import vue from "@vitejs/plugin-vue"
import path from "path"

export default {
  plugins: [vue()],
  server: {
    host: true,
    port: 8080,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
}