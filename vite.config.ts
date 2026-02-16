
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import process from 'node:process';

export default defineConfig(({ mode }) => {
  // Use process.cwd() to get the current working directory for loading environment variables.
  // We import 'process' from 'node:process' to ensure the TypeScript compiler recognizes Node.js-specific properties like 'cwd'.
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    define: {
      'process.env.API_KEY': JSON.stringify(env.VITE_API_KEY || env.API_KEY)
    },
    server: {
      open: true
    }
  };
});
