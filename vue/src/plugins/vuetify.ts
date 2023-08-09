// Styles
import "@mdi/font/css/materialdesignicons.css"
import "vuetify/styles"

// Vuetify
import { createVuetify } from "vuetify"
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from "vuetify/iconsets/mdi"

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: "mdi",
        aliases,
        sets: {
        mdi,
        },
    },
})
export default vuetify
// export default createVuetify()
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
