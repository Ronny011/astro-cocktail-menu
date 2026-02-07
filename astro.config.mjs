// @ts-check
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://ronny011.github.io",
  base: "/astro-cocktail-menu",
  integrations: [mdx(), react()],

  i18n: {
    defaultLocale: "en",
    locales: ["en", "ru", "he"],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});