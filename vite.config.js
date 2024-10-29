import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ngrok } from 'vite-plugin-ngrok'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ngrok('2hd85YV3QxvSYZEdUF4AX2a2jtQ_4z33r4t6z2o9ck47rsnVC')],
  base: '/', // Asegura que las rutas estén configuradas en la raíz
  build: {
    rollupOptions: {
      input: 'index.html', // Asegura que Vite use index.html para todas las rutas
    },
  },
  server: {
    historyApiFallback: true, // Activa la redirección en el servidor de desarrollo
  },
})
