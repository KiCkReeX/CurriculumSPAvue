// Snackbar.js
import { createApp } from 'vue'
import Snackbar from './Snackbar.vue'

const mountSnackbar = (props) => {
  const app = createApp(Snackbar, props)
  const div = document.createElement('div')
  document.body.appendChild(div)
  app.mount(div)

  // Auto-destruir después de cierto tiempo (opcional)
  setTimeout(() => {
    app.unmount()
    document.body.removeChild(div)
  }, props.duration || 3000) // default 3 segundos
}

export default mountSnackbar
