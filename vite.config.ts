import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { crx } from '@crxjs/vite-plugin'
import manifest from './manifest.json' assert { type: 'json' }

export default defineConfig({
  plugins: [
    vue(),
    crx({
      manifest,
    })
  ],
  server: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    port: 5173,
    strictPort: true,
    hmr: {
      clientPort: 5173,
      port: 5173,
      host: 'localhost',
      protocol: 'ws',
      overlay: false,
    },
    watch: {
      usePolling: true
    }
  },
})