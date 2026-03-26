// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://ronny011.github.io",
  base: "/astro-cocktail-menu",
  integrations: [mdx(), react()],
  prefetch: { prefetchAll: true },

  fonts: [
    {
      provider: fontProviders.google(),
      name: "Bona Nova SC",
      cssVariable: "--font-bona-nova",
      styles: ["normal", "italic"],
      subsets: ["hebrew"],
    },
    {
      provider: fontProviders.google(),
      name: "Niconne",
      cssVariable: "--font-niconne",
      styles: ["normal"],
      subsets: ["latin"],
      display: "block",
    },
    {
      provider: fontProviders.google(),
      name: "Cormorant Infant",
      cssVariable: "--font-cormorant-infant",
      styles: ["normal", "italic"],
      weights: [400, 700],
      subsets: ["cyrillic"],
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
