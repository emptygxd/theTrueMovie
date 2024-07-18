import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      public: '/public',
      app: '/src/0app/index.ts',
      pages: '/src/1pages/index.ts',
      widgets: '/src/2widgets/index.ts',
      entities: '/src/4entities/index.ts',
      shared: '/src/5shared/index.ts',
    },
  },
});
