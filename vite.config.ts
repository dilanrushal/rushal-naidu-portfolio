import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Deployed at https://dilanrushal.github.io/rushal-naidu-portfolio/
export default defineConfig({
  base: "/rushal-naidu-portfolio/",
  plugins: [react()],
});
