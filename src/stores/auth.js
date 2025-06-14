import { defineStore } from 'pinia'
import { http } from '@/Libs'
import useLoadingStore from './loading'
import api from '@/constants/api'
import useUserStore from './user'
import { computed, nextTick, ref } from 'vue'

const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    token: localStorage.getItem('session') || null,
    isAuthenticated: localStorage.getItem('session') ? true : false,
  }),
  actions: {
    async login(loginData) {
      const loader = useLoadingStore()
      const currentUserStore = useUserStore()
      try {
        loader.loading = true
        const res = await http.post(`${api.endPoints.AuthLogin}`, loginData)

        if (res && res.data && res.data.token) {
          localStorage.setItem('session', res.data.token)
          localStorage.setItem('currentUser', JSON.stringify(res.data.data))
          this.token = res.data.token
          this.isAuthenticated = true
          currentUserStore.initSession()
          await nextTick()
          this.router.replace('/Home')
        } else {
          throw new Error('El token no está presente en la respuesta.')
        }
      } catch (error) {
        console.error('Error al iniciar sesión:', error)
        loader.loading = false
        return Promise.reject(error)
      } finally {
        loader.loading = false
      }
    },

    async logout() {
      const loader = loading()
      const currentUserStore = useUserStore()
      try {
        loader.loading = true
        localStorage.removeItem('session')
        localStorage.removeItem('currentUser')
        this.token = null
        this.isAuthenticated = false
        localStorage.removeItem('branchOfficeId')
        currentUserStore.reset()
        window.location.href = '/login'
      } catch (error) {
        console.error('Error al cerrar sesión:', error)
      } finally {
        loader.loading = false
      }
    },
  },
})

export default useAuthStore
