import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import webfontDownload from "vite-plugin-webfont-dl";

// https://vite.dev/config/
export default defineConfig({
  base: "/portfolio_dcc/",
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
    tailwindcss(),
    webfontDownload([
      "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
    ]),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 1000, // Increase warning limit to 1000kb
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Separate react-pdf and pdfjs-dist into their own chunk (largest dependencies)
          if (id.includes("react-pdf") || id.includes("pdfjs-dist")) {
            return "pdf-viewer";
          }
          // Separate GSAP animation library
          if (id.includes("gsap")) {
            return "gsap";
          }
          // Separate icon library
          if (id.includes("lucide-react")) {
            return "icons";
          }
          // Core React libraries
          if (id.includes("react") || id.includes("react-dom")) {
            return "react-vendor";
          }
        },
      },
    },
  },
});
