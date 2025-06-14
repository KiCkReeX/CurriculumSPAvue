import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import components from './components'
import router from './router'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'aos/dist/aos.css'

import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import AOS from 'aos'

// Crear instancia de Pinia
const pinia = createPinia()
pinia.use(({ store }) => {
  store.router = markRaw(router)
})

// Crear instancia de Vue
const app = createApp(App)

// Usar router y pinia
app.use(pinia)
app.use(router)

// Registrar componentes globales
Object.entries(components).forEach(([name, component]) => {
  app.component(name.split('/').pop().replace('.vue', ''), component.default)
})

app.mount('#app')
AOS.init()
