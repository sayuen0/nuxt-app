export default defineNuxtConfig({
  app: {
    head: {
      title: "Nuxt3 Tutorial",
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
          ],
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["@/assets/css/tailwind.css"],
});
