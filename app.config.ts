import { defineConfig } from '@solidjs/start/config';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import tailwindcss from '@tailwindcss/vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  // server: {
  //   experimental: {
  //     tasks: true,
  //   },
  //   scheduledTasks: {
  //     '* * * * *': ['download'],
  //   },
  // },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
  },
});
