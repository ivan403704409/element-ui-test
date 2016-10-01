const SELL = 'cart/SELL'
const ADD = 'cart/ADD'
const INCOME = 'cart/INCOME'

const state = {
	total: 1000,
	price: 999,
	income: 0,
}

const mutations = {
	[SELL](state){
		state.total--
		state.income += state.price
	}
}

const actions = {
	[ADD]({commit}){
		commit(SELL)
	},
}

const getters = {
	[INCOME](){
		return '$'+state.income
	},
}


export default {
	state,
	mutations,
	actions,
	getters
}