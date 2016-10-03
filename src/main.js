import Vue from 'vue'
import Vuex from 'vuex'


import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import './assets/css/common.css'
Vue.use(Element)

// somthing sync
setTimeout(function() {
	require(['./init.js'], function(){
		setTimeout(()=>{
			let loading = document.getElementById('loading')
			loading.className = 'hide'
			setTimeout(() => {
				loading.remove()
			}, 1000)
		}, 1000)
	})
}, 300)


console.log(123)
