// ecu-file-id  Ymb0tdzaIa
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['react-dom'],
    exclude: ['ecu', 'ecu-client'],
  },
})
