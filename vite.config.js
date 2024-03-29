import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: 'Your App Name',
        short_name: 'Your App Short Name',
        icons: [
          {
            "src": "/48-48.png",
            "sizes": "48x48",
            "type": "image/png"
          },
          {
            "src": "/192-192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "/512-512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "any maskable"
          }
        ],
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        // Add other manifest properties as needed
      },
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'manifest.webmanifest'],
    }),
  ],
  base:"/mypwa/"
});