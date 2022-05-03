// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import './assets/styles/main.scss'

import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faCog, faCompass, faPhone, faClockFour } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
library.add([faCog, faCompass, faClockFour, faPhone, faFacebookF, faTwitter, faInstagram]);

import DefaultLayout from '~/layouts/Default.vue'
import BlogLayout from '~/layouts/BlogLayout.vue'


export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('font-awesome', FontAwesomeIcon),
    Vue.component('Layout', DefaultLayout),
    Vue.component('BlogLayout', BlogLayout)
}
