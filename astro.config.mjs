import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind'; // Asegúrate de que esta línea esté si ya la habías añadido

export default defineConfig({
  integrations: [react(), tailwind()]
});
