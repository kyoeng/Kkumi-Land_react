import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';



// https://vite.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react()],
    resolve: {
      alias: {
        "$assets": path.resolve(__dirname, "src/assets"),
        "$components": path.resolve(__dirname, "src/components")
      }
    }
  }
});
