import { defineConfig } from "vite";
import { federation } from "@module-federation/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3001,
  },
  plugins: [
    react(),
    federation({
      name: "remote",
      filename: "remoteEntry.js",
      manifest: true,
      type: "module",
      exposes: {
        "./greeting": "./src/RemoteGreeting.jsx",
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
