// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://roeytech.dev',
  vite: {
    plugins: [
      tailwind({
        theme: {
          darkMode: 'class',
        },
      }),
    ],
  },
});
