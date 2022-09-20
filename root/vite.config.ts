import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  build: {
    outDir: '../dist',
  },
  server: {
    port: undefined,
    proxy: {},
  },
  plugins: [react(), tsconfigPaths()],
});
