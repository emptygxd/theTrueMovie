import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@public': '/public',
      '@app': '/src/0app',
      '@pages': '/src/1pages',
      '@widgets': '/src/2widgets',
      '@entities': '/src/4entities',
      '@shared': '/src/5shared',
    },
  },
});
