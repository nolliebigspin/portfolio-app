import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import { router } from './router/router'

// Add bulma vue js
import Buefy from 'buefy'
Vue.use(Buefy)
import 'buefy/dist/buefy.css'
import 'bulma-badge/dist/css/bulma-badge.min.css';

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
