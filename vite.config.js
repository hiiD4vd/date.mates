import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import url from 'url'
import dotenv from 'dotenv'

dotenv.config()

const apiFallback = () => ({
  name: 'api-fallback',
  configureServer(server) {
    server.middlewares.use(async (req, res, next) => {
      if (req.url.startsWith('/api/')) {
        // Mock Vercel response methods
        res.status = (code) => {
          res.statusCode = code;
          return res;
        };
        res.json = (data) => {
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(data));
        };
        
        try {
          const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
          req.query = Object.fromEntries(parsedUrl.searchParams);
          
          if (parsedUrl.pathname === '/api/posts') {
            const handlerPath = url.pathToFileURL(process.cwd() + '/api/posts.js').href;
            const handler = await import(handlerPath + '?update=' + Date.now());
            await handler.default(req, res);
            return;
          } else if (parsedUrl.pathname === '/api/post') {
            const handlerPath = url.pathToFileURL(process.cwd() + '/api/post.js').href;
            const handler = await import(handlerPath + '?update=' + Date.now());
            await handler.default(req, res);
            return;
          } else if (parsedUrl.pathname === '/api/products') {
            const handlerPath = url.pathToFileURL(process.cwd() + '/api/products.js').href;
            const handler = await import(handlerPath + '?update=' + Date.now());
            await handler.default(req, res);
            return;
          }
        } catch (e) {
          console.error(e);
          res.status(500).json({ error: 'Internal Server Error' });
          return;
        }
      }
      next();
    });
  }
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), apiFallback()],
})
