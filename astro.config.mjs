import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://vegetaly.org",
  integrations: [sitemap()],
});
