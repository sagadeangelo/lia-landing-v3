import { defineConfig } from 'vite';

export default defineConfig({
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