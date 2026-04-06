import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faHome,
  faUser,
  faEnvelope,
  faDesktop,
  faBriefcase,
  faFileLines,
  faPenNib,
  faCodeBranch,
  faArrowDown,
  faPaperPlane,
  faLocationDot,
  faCircleCheck,
  faRocket,
  faCode,
  faSun,
  faMoon,
  faSpinner,
  faWandMagicSparkles,
  faBolt,
  faCloud,
  faFire,
  faGamepad,
  faPlane,
  faMicrochip,
  faArrowUpRightFromSquare
} from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
  faMediumM
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Particles from '@tsparticles/vue3'
import { loadFull } from 'tsparticles'
import VuePdf from 'vue3-pdfjs'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'vue3-calendar-heatmap/dist/style.css'
import '@/assets/main.css'
import '@/assets/animations.css'

library.add(
  // Solid icons
  faHome,
  faUser,
  faEnvelope,
  faDesktop,
  faBriefcase,
  faFileLines,
  faPenNib,
  faCodeBranch,
  faArrowDown,
  faPaperPlane,
  faLocationDot,
  faCircleCheck,
  faRocket,
  faCode,
  faSun,
  faMoon,
  faSpinner,
  faWandMagicSparkles,
  faBolt,
  faCloud,
  faFire,
  faGamepad,
  faPlane,
  faMicrochip,
  faArrowUpRightFromSquare,
  // Brand icons
  faGithub,
  faLinkedin,
  faStackOverflow,
  faMediumM
)

import App from './App.vue'
import router from './router/index'
import vReveal from './directives/vReveal'

const app = createApp(App)

app.use(Particles, {
  init: async (engine) => {
    await loadFull(engine)
  }
})

app.use(VuePdf)

app.component('font-awesome-icon', FontAwesomeIcon)
app.directive('reveal', vReveal)
app.use(router)
app.mount('#app')
