import App from "./App.vue"
import router from "./router"
import vuetify from "./plugins/vuetify"
import { createPinia } from "pinia"
import { createApp } from "vue"
import { loadFonts } from "./plugins/webfontloader"
import './assets/style/common.css'

loadFonts()

createApp(App).use(router).use(vuetify).use(createPinia()).mount("#app")