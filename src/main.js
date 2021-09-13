import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import '@/assets/icons.js'

Vue.component('font-awesome-icon', FontAwesomeIcon)

import 'bootstrap-vue/dist/bootstrap-vue.css'
import "./assets/css/vendor/bootstrap.min.css"
import "./assets/css/styles.scss"

import Notifications from './components/Notification'

Vue.use(Notifications)

import moment from 'moment'

Vue.use(require('vue-moment'), {
    moment
})

export const eventBus = new Vue()

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')