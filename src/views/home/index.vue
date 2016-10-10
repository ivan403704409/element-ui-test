<!--  -->
<template>
<div>
	<swiper ref="swiper"
	        direction="horizontal"
	        :mousewheel-control="false"
	        @slide-change-start="onSlideChangeStart"
	        @slide-change-end="onSlideChangeEnd">
	    <div class="page">
			<div id="page1"></div>
			<page1></page1>
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
export default {
	components: {
		swiper,
	},
	data(){
		return {

		}
	},
	methods: {
		onSlideChangeStart (currentPage) {
			if( currentPage == 1 ){
				console.log('page1')
			    Vue.component('page1', function (resolve) {
				  // 这个特殊的 require 语法告诉 webpack
				  // 自动将编译后的代码分割成不同的块，
				  // 这些块将通过 Ajax 请求自动下载。
				  require(['./page1.vue'], resolve)
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