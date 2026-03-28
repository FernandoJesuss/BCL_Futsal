import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})



// import { defineConfig } from "vite"
// import react from "@vitejs/plugin-react"
// import path from "path"

// export default defineConfig({
//   plugins: [
//     react({
//       // força o uso do runtime automático do JSX — resolve o erro de preamble
//       jsxRuntime: "automatic",
//     }),
//   ],

//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },

//   build: {
//     rollupOptions: {
//       output: {
//         manualChunks(id) {
//           if (id.includes("framer-motion")) return "vendor-motion"
//           if (
//             id.includes("react-dom") ||
//             id.includes("react-router-dom") ||
//             id.includes("node_modules/react/")
//           ) return "vendor-react"
//         },
//       },
//     },
//     assetsInlineLimit: 4096,
//     chunkSizeWarningLimit: 600,
//     cssMinify: true,
//     sourcemap: false,
//   },

//   preview: {
//     port: 4173,
//     open: true,
//   },
// })