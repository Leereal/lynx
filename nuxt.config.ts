// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/supabase"],
  supabase: {
    redirect: false,
  },
  runtimeConfig: {
    public: {
      appUrl: process.env.APP_URL,
    },
  },
});
