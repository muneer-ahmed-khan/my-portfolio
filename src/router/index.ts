import { createRouter, createWebHistory } from 'vue-router'

export const RouteNames = {
  Home: 'home',
  About: 'about',
  Projects: 'projects',
  Services: 'services',
  Contact: 'contact',
  Resume: 'resume',
  NotFound: 'not-found'
} as const

const routes = [
  {
    path: '/',
    name: RouteNames.Home,
    component: () => import('@/components/home/HomeHero.vue')
  },
  {
    path: '/about',
    name: RouteNames.About,
    component: () => import('@/components/about/About.vue')
  },
  {
    path: '/projects',
    name: RouteNames.Projects,
    component: () => import('@/components/projects/Projects.vue')
  },
  {
    path: '/services',
    name: RouteNames.Services,
    component: () => import('@/components/services/Services.vue')
  },
  {
    path: '/contact',
    name: RouteNames.Contact,
    component: () => import('@/components/contact/Contact.vue')
  },
  {
    path: '/resume',
    name: RouteNames.Resume,
    component: () => import('@/components/resume/Resume.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: RouteNames.NotFound,
    component: () => import('@/components/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(() => {
  document.dispatchEvent(new CustomEvent('nav-loading-start'))
})

router.afterEach(() => {
  document.dispatchEvent(new CustomEvent('nav-loading-end'))
})

export default router
