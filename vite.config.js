import { resolve } from 'path';
import { defineConfig } from 'vite';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  root: 'src/',

  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        cart: resolve(__dirname, "src/cart/index.html"),
        product: resolve(__dirname, "src/product_pages/index.html"),
        listing: resolve(__dirname, "src/product-listing/index.html"),
        checkout: resolve(__dirname, "src/checkout/index.html"),
      }, 
    },
  },

  // Access environment variables in client-side code
  define: {
    VITE_SERVER_URL: JSON.stringify(process.env.VITE_SERVER_URL),
  },
});
