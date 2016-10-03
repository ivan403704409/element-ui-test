import Vue from 'vue'
import App from './App.vue'
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