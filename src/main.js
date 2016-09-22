import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import './assets/css/common.css'

Vue.use(Element)

new Vue({
  el: '#app',
  render: h => h(App)
})
