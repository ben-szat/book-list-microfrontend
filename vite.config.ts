import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "booklist",
      filename: "remoteEntry.js", // Ensure this is correct
      exposes: {
        "./BookList": "./src/App.tsx",
      },
      shared: ["react", "react-dom", "@mui/material", "@mui/icons-material", "@apollo/client"],
    }),
  ],
  server: {
    port: 3001,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  build: {
    target: "esnext",
  },
});
