import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // TODO change this to '/' when published on all-inkl.com
  base: '/mood-and-atmosphere/',
})
