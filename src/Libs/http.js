import axios from 'axios'
import { default as logger } from './logger'
import api from '@/constants/api'
import messages from '@/constants/messages'
import useAuthStore from '@/stores/auth'
import useLoadingStore from '@/stores/loading'
import { ref } from 'vue'
import notifyLite from './notifyLite'

const notifier = ref()
notifier.value = notifyLite

const http = () => {
  const defaultOptions = {
    baseURL: api.baseUrl,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
    },
  }

  // Create instance
  let instance = axios.create(defaultOptions)

  instance.interceptors.request.use(
    function (config) {
      const store = useLoadingStore()

      // Verificar y agregar el token de autorización si está disponible
      const token = localStorage.getItem('session')
      config.headers.Authorization = token ? `Bearer ${token}` : ''

      if (config.isSilent) return config
      store.loading = true

      return config
    },
    function (error) {
      logger('Request error:', error)
      return Promise.reject(error)
    },
  )

  instance.interceptors.response.use(
    (response) => {
      const store = useLoadingStore()

      if (response.status === 200) {
        logger(response)
      }

      store.loading = false
      return response
    },
    (error) => {
      var extractedMessage = ''
      const store = useLoadingStore()
      if (store.loading) store.loading = false
      logger(error)

      if (error.response && error.response.status === 401) {
        const authStore = useAuthStore()
        authStore.logout()
      } else {
        if (error.response.data) {
          try {
            const errorMessage = JSON.stringify(error.response.data) // Convert to string
            const regex = /: (.*?)\./
            const match = errorMessage.match(regex)
            console.log('matches =>', match)
            if (match && match[1]) {
              extractedMessage = match[1]
            }
          } catch {
            extractedMessage = error.response.data[0]?.description
          }
        } else {
          extractedMessage = messages.error.contactSupport
        }

        notifier.value.danger({
          message: extractedMessage,
        })
        throw error
      }
    },
  )

  return instance
}

export default http()
