import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(), 
    mode === "development" && componentTagger(),
    federation({
      name: "admin-panel-remote",
      filename: "remoteEntry.js",
      exposes: {
        "./StatsCard": "./src/components/admin/StatsCard",
        "./DashboardCard": "./src/components/admin/DashboardCard",
        "./DataTable": "./src/components/admin/DataTable",
        "./AdminLayout": "./src/components/admin/AdminLayout",
      },
      shared: ["react", "react-dom", "react-router-dom"],
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
}));
