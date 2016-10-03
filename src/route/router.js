import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
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
	// catch all redirect
    { path: '*', redirect: '/index' }
]
	
const router = new VueRouter({ 
	// mode: 'history',
	routes
})

router.beforeEach((to, from , next) => {
	next()
})

export default router