export default defineNuxtConfig({
    telemetry: false,
    modules: ['@vueuse/nuxt', '@nuxtjs/supabase'],

    supabase: {
        redirectOptions: {
            login: '/login',
            callback: '/confirm',
            exclude: ['/*'], // We implement our own auth behaviour in the auth middleware
        },
    },

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@use "assets/scss/main.scss" as *;`,
                }
            }
        }
    }

})
