// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'
// import { visualizer } from 'rollup-plugin-visualizer'

// export default defineConfig({
//   plugins: [
//     react(),
//     tailwindcss(),
//     visualizer({
//       open: true,
//       gzipSize: true,
//       brotliSize: true
//     })
//   ],

//   build: {
//     rollupOptions: {
//       output: {
//         manualChunks: {
//           react: ['react', 'react-dom'],
//           router: ['react-router-dom'],
//           motion: ['framer-motion'],
//           icons: ['react-icons']
//         }
//       }
//     }
//   }
// })


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),

    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true
    })
  ],

  build: {
    cssCodeSplit: false,

    chunkSizeWarningLimit: 1000,

    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          router: ['react-router-dom'],
          motion: ['framer-motion'],
          icons: ['react-icons']
        }
      }
    }
  }
})