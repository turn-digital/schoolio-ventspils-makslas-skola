import { defineConfig } from "astro/config";
import astroI18next from "astro-i18next";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "http://babitesvidusskola.skl.lv/",
  integrations: [react(), astroI18next()],
});
