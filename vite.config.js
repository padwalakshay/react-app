import { defineConfig } from 'vite';
import  path  from 'path';
import react from '@vitejs/plugin-react'
import svgr from '@svgr/rollup';

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // This prepends the content to every scss file.
        // Useful for global variables and mixins.
        additionalData: ``
      }
    }
  },
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    svgr({
      svgrOptions: {
        svgo: true, // Disables optimizer, fixes unquoted values
      },
    })
  ]
})
