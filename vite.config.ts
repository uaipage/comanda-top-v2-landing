
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import ssrSsg from "vite-plugin-ssr-ssg";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
    ssrSsg({
      entry: 'src/entry-server.tsx',
      routes: [
        '/',
        '/not-found',
      ],
      crittersOptions: {
        preload: 'js-lazy',
        preloadFonts: true,
      },
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
