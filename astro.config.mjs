import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://vegetalyfoods.com",
  integrations: [sitemap()],
});
