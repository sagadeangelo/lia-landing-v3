import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: process.env.VITE_WRITER_STUDIO === 'true' ? {
      '/studio': 'http://127.0.0.1:8129',
      '/api': 'http://127.0.0.1:8129',
    } : {},
  },
  plugins: [
    {
      name: 'lia-simulador-route',

      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (
            req.url === '/simulador' ||
            req.url === '/simulador/'
          ) {
            req.url = '/simulador/index.html';
          }

          next();
        });
      },
    },
  ],
});