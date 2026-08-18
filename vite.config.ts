import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    allowedHosts: ['5173-ifxo2jflxtqaqr5l6iqzm-48f96750.us2.manus.computer'],
  },
})
