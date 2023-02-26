export default defineNuxtConfig({
    modules: ['@vueuse/nuxt'],

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
