import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import vuetify from './plugins/vuetify'
import PerfectScrollbar from 'vue2-perfect-scrollbar'
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'

Vue.config.productionTip = false
Vue.use(PerfectScrollbar)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
