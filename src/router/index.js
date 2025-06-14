import { createRouter, createWebHistory } from 'vue-router'
import Skills from '@/views/Skills.vue'
import Experience from '@/views/Experience.vue'
import Contact from '@/views/Contact.vue'
import Education from '@/views/Education.vue'
import AboutMe from '@/views/AboutMe.vue'
import Portfolio from '@/views/Portfolio.vue'
import References from '@/views/References.vue'

const routes = [
  {
    path: '/',
    redirect: '/About-Me',
  },
  {
    path: '/About-Me',
    name: 'AboutMe',
    component: AboutMe,
    meta: {
      title: 'AboutMe',
      order: 0,
      showInSidebar: true,
      claimValue: 'AboutMe',
      faIcon: 'fas fa-home me-3',
    },
  },
  {
    path: '/Skills',
    name: 'skills',
    component: Skills,
    meta: {
      title: 'Habilities',
      order: 1,
      showInSidebar: true,
      claimValue: 'Habilities',
      faIcon: 'fas fa-home me-3',
    },
  },
  {
    path: '/Experience',
    name: 'Experience',
    component: Experience,
    meta: {
      title: 'Experience',
      order: 2,
      showInSidebar: true,
      claimValue: 'Experience',
      faIcon: 'fas fa-home me-3',
    },
  },
  {
    path: '/Education',
    name: 'Education',
    component: Education,
    meta: {
      title: 'Education',
      order: 3,
      showInSidebar: true,
      claimValue: 'Education',
      faIcon: 'fas fa-home me-3',
    },
  },
  {
    path: '/Contact-Me',
    name: 'ContactMe',
    component: Contact,
    meta: {
      title: 'ContactMe',
      order: 4,
      showInSidebar: true,
      claimValue: 'ContactMe',
      faIcon: 'fas fa-home me-3',
    },
  },
  {
    path: '/Portfolio',
    name: 'Portfolio',
    component: Portfolio,
    meta: {
      title: 'Portfolio',
      order: 5,
      showInSidebar: true,
      claimValue: 'Portfolio',
      faIcon: 'fas fa-home me-3',
    },
  },
  {
    path: '/References',
    name: 'References',
    component: References,
    meta: {
      title: 'References',
      order: 5,
      showInSidebar: true,
      claimValue: 'References',
      faIcon: 'fas fa-home me-3',
    },
  },
].concat()

console.log('routes => ', routes)
const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
})

router.beforeEach((to, from, next) => {
  // const authStore = auth();
  // const isAuthenticated = authStore.isAuthenticated; // Verifica el estado de autenticación desde Vuex o tu método preferido

  // if()
  //Esto cambia el titulo de la pagina conforme a lo especificado en la propiedad meta de la ruta
  document.title = `${import.meta.env.VITE_APP_TITLE} | ${to.meta.title || ''}`

  next()
})

export default router
