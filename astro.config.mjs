// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://ronny011.github.io",
  base: "/astro-cocktail-menu",
  integrations: [mdx(), react()],

  fonts: [
    {
      provider: fontProviders.google(),
      name: "Bona Nova SC",
      cssVariable: "--font-bona-nova",
      styles: ["normal", "italic"],
    },
  ],

  i18n: {
    defaultLocale: "en",
    locales: ["en", "ru", "he"],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },

  output: "static",
});
