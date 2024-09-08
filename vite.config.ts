import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/theTrueMovie/',
  resolve: {
    alias: {
      public: '/public',
      app: '/src/app/index.ts',
      pages: '/src/pages/index.ts',
      widgets: '/src/widgets/index.ts',
      features: '/src/features/index.ts',
      entities: '/src/entities/index.ts',
      shared: '/src/shared/index.ts',
    },
  },
});
