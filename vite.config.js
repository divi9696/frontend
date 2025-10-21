import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
    server: {
    host: true,
    port: 5173
    ,
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      'e580516b5b9a.ngrok-free.app'  // add your ngrok URL here
    ]
  }
  
})
