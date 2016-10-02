import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
	// { path: '*', redirect: '/index' },
	{
		path: '/login',
		component(resolve) {
			require(['../views/login'], resolve)
		}
	},
	{
		path: '/index',
		component(resolve) {
			require(['../views/index'], resolve)
		}
	},
	{
		path: '/chat',
		component(resolve) {
			require(['../views/chat'], resolve)
		}
	},
]
	
const router = new VueRouter({ routes })
export default router