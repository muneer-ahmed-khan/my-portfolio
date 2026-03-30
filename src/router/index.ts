import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/home/Home.vue'
import About from '../components/about/About.vue'
import Projects from '../components/projects/Projects.vue'
import Resume from '../components/resume/Resume.vue'
import Services from '../components/services/Services.vue'
import Contact from '../components/contact/Contact.vue'
import NotFound from '../components/NotFound.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/projects', component: Projects },
  { path: '/services', component: Services },
  { path: '/contact', component: Contact },
  { path: '/resume', component: Resume },
  { path: '/:pathMatch(.*)*', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
