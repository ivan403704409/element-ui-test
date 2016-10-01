import "babel-polyfill";

import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App.vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import './assets/css/common.css'


Vue.use(VueRouter)
Vue.use(Element)


import store from './store'
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
