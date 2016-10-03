<!--  -->
<template>
<div>
	<div id="list-complete-demo" class="demo">
	  <button v-on:click="shuffle">Shuffle</button>
	  <button v-on:click="add">Add</button>
	  <button v-on:click="remove">Remove</button>
	  <transition-group name="list-complete" tag="p">
	    <span
	      v-for="item in items"
	      v-bind:key="item"
	      class="list-complete-item"
	    >
	      {{ item }}
	    </span>
	  </transition-group>
	</div>


	<div>
		<!-- {{$store.state.count}} -->
		<button @click="cartADD">Sell</button> 
		收入: {{$store.state.cart.income}}
		剩余：{{$store.state.cart.total}}

		<textarea v-model="text">
		</textarea>
		{{text}}
	</div>
</div>
</template>

<script>
import _ from 'underscore'
import logMixin from '../mixins/log.js'

import { mapGetters, mapActions } from 'vuex'
export default {
	components: {

	},
	mixins: [logMixin],
	props: {

	},
	data() {
		return {
			text: 'bar',
			items: [1,2,3,4,5,6,7,8,9],
    		nextNum: 10,
    		count: '',
		}
	},
	computed: {
		count:{
			get(){
				return this.$store.state.count
			},
			set(value){
				this.$store.commit('change', value)
			}
		},

	},
	watch: {

	},
	methods: {
		...mapActions({
			cartADD: 'cart/ADD'
		}),
	    randomIndex: function () {
	      return Math.floor(Math.random() * this.items.length)
	    },
	    add: function () {
	      this.items.splice(this.randomIndex(), 0, this.nextNum++)
	    },
	    remove: function () {
	      this.items.splice(this.randomIndex(), 1)
	    },
	    shuffle: function () {
	      this.items = _.shuffle(this.items)
	    }
	  },
	  created(){
	  	console.info('from transition log')
	  },
	  mounted(){
	  	console.info('from transition log mounted')
	  },
	// activate: function (done){

	// 	done();
	// },
	// route: {
	// 	activate: function(transition) {
	// 		transition.next();
	// 	}
	// },
}
</script>


<style>
.list-complete-item {
  transition: all .3s;
  display: inline-block;
  margin-right: 10px;
}
.list-complete-enter, .list-complete-leave-active {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}
</style>
