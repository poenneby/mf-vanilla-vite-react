import { defineConfig } from "vite";
import { federation } from "@module-federation/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    react(),
    federation({
      name: "host",
      manifest: true,
      remotes: {
        remote: {
          type: "module",
          name: "remote",
          entry: "http://localhost:3001/remoteEntry.js",
        },
      },
      shared: {
        react: {},
        "react-dom": {},
      },
    }),
  ],
  build: {
    target: "chrome89",
  },
});
