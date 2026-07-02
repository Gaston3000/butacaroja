import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Tema oscuro tipo cine con acento rojo (ButacaRoja)
export default createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi', // usamos Material Design Icons
  },
  theme: {
    defaultTheme: 'oscuro',
    themes: {
      oscuro: {
        dark: true,
        colors: {
          background: '#0d0d0d',
          surface: '#1a1a1a',
          primary: '#e50914', // rojo butaca
          secondary: '#e0b64a', // dorado para las estrellas
        },
      },
    },
  },
})
