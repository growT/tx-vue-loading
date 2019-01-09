import Vue from 'vue'
import App from './App.vue'
import txLoading from './lib/index.js'

Vue.use(txLoading)
new Vue({
  el: '#app',
  render: h => h(App)
})
