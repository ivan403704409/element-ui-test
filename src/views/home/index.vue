<!--  -->
<template>
<div>
	
	<v-circle :percent="80" :stroke-width=2 :trail-width=2 stroke-color="#04BE02">
        <span>80</span>
    </v-circle>

	<swiper ref="swiper"
	        direction="horizontal"
	        :mousewheel-control="false"
	        @slide-change-start="onSlideChangeStart"
	        @slide-change-end="onSlideChangeEnd">
	    <div class="page">
			<div id="page1"></div>
			<!-- <page1></page1> -->
	    	<p v-for="(item, index) in 100">{{index}}</p>
	    </div>
	    <div class="page">
			<div id="page2"></div>
	    	<p v-for="(item, index) in 100">{{index}}</p>
	    </div>
	    <div class="page3">
			<div id="page"></div>
	    	<p v-for="(item, index) in 100">{{index}}</p>
	    </div>
	</swiper>

</div>
</template>
<style scoped>
.page{
	height: 300px!important;
	overflow: auto!important;
}
</style>

<script>
import Vue from 'vue'
import swiper from 'components/swiper'
import vCircle from 'components/circle'
export default {
	components: {
		swiper,
		vCircle,
	},
	data(){
		return {

		}
	},
	methods: {
		onSlideChangeStart (currentPage) {
			if( currentPage == 1 ){
				console.log('page1')
				
			    require(['./page1.vue'], (page1) => {
			    	var Parent = Vue.extend({
				        template: '<div><my-component></my-component></div>',
				        components: {
				            'my-component': page1,
				        }
				    })
				    new Parent({
				        el: '#page1'
				    })
			    })
			}else if( currentPage == 2){

			}else if( currentPage == 3 ){

			}
            console.log('onSlideChangeStart', currentPage);
        },
        onSlideChangeEnd (currentPage) {
            console.log('onSlideChangeEnd', currentPage);
        }
	},
}
</script>


<style>
	
</style>