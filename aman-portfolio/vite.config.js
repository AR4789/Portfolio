import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',  // 👈 important for Netlify to serve paths correctly
  plugins: [react()],
})
