import Vue from 'vue'
import Vuex from 'vuex'

import App from './App.vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import './assets/css/common.css'
Vue.use(Element)

import { sync } from 'vuex-router-sync'
import router  from './route/router.js'
import store from './store'
// TODO: 升级vuex-router-sync到2.0
sync(store, router)


const app = new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App)
})