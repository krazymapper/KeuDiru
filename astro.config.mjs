import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://krazymapper.github.io",
  base: "/KeuDiru",
  output: "static",
  integrations: [],
  vite: {
    plugins: [tailwindcss()],
  },
});
