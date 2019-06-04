import Vue from 'vue'
import App from './App.vue'
import 'bulma/css/bulma.css';
import 'bulma-badge/dist/css/bulma-badge.min.css';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
