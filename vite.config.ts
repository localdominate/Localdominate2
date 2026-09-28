import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "es2020",
    minify: "esbuild",
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          // UI Components (Radix)
          'ui-vendor': [
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-accordion',
            '@radix-ui/react-tabs',
            '@radix-ui/react-tooltip',
            '@radix-ui/react-select',
          ],
          // Forms
          'forms-vendor': ['react-hook-form', 'zod', '@hookform/resolvers'],
          // Dates
          'date-vendor': ['date-fns'],
          // Query & State
          'query-vendor': ['@tanstack/react-query'],
          // Animation
          'animation-vendor': ['framer-motion'],
          // Supabase
          'supabase-vendor': ['@supabase/supabase-js'],
          // Charts (lazy loaded pages)
          'charts-vendor': ['recharts'],
          // Icons (Lucide) — split off so it's cached and not blocking
          'icons-vendor': ['lucide-react'],
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
  esbuild: {
    drop: mode === "production" ? ["console", "debugger"] : [],
  },
}));
