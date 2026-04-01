import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr({
      svgrOptions: {
        replaceAttrValues: {
          "#fff": "currentColor",
          "#ffffff": "currentColor",
          "white": "currentColor",
          "black": "currentColor",
          "#000": "currentColor",
        },
      },
    }),],
})
