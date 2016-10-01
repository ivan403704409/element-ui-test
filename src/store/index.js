import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import cart from './modules/cart'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

// rootState
const stateGlobal = {
	hideNav: false,
	count: 1
}

export default new Vuex.Store({
  state: stateGlobal,	//root state
  actions,				
  getters,				//root
  modules: {
    cart,
  },
  strict: debug,
})
