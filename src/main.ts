import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faHome,
  faUser,
  faEnvelope,
  faDesktop,
  faFileLines,
  faPenNib,
  faCodeBranch,
  faStar,
  faHandPointRight,
  faArrowDown,
  faBriefcase,
  faPaperPlane,
  faLocationDot,
  faCircleCheck,
  faRocket,
  faCode
} from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
  faMediumM,
  faJs,
  faNode,
  faVuejs,
  faReact,
  faPython,
  faGitAlt,
  faAws
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Particles from '@tsparticles/vue3'
import { loadFull } from 'tsparticles'
import VuePdf from 'vue3-pdfjs'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@/assets/main.css'

library.add(
  // Solid icons
  faHome,
  faUser,
  faEnvelope,
  faDesktop,
  faFileLines,
  faPenNib,
  faCodeBranch,
  faStar,
  faHandPointRight,
  faArrowDown,
  faBriefcase,
  faPaperPlane,
  faLocationDot,
  faCircleCheck,
  faRocket,
  faCode,
  // Brand icons
  faGithub,
  faLinkedin,
  faStackOverflow,
  faMediumM,
  faJs,
  faNode,
  faVuejs,
  faReact,
  faPython,
  faGitAlt,
  faAws
)

import App from './App.vue'
import router from './router/index'

const app = createApp(App)

app.use(Particles, {
  init: async (engine) => {
    await loadFull(engine)
  }
})

app.use(VuePdf)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')
