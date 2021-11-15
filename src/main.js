import Vue from 'vue'
import App from './App.vue'
import './utils/filters'

import Fragment from 'vue-fragment'
Vue.use(Fragment.Plugin)

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')
