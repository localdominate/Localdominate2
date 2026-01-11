import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          // UI Components
          'ui-vendor': ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-accordion', '@radix-ui/react-tabs', '@radix-ui/react-tooltip'],
          // Query & State
          'query-vendor': ['@tanstack/react-query'],
          // Animation
          'animation-vendor': ['framer-motion'],
          // Supabase
          'supabase-vendor': ['@supabase/supabase-js'],
          // Charts (lazy loaded pages)
          'charts-vendor': ['recharts'],
        },
      },
    },
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 500,
  },
}));
