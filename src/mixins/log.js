let i = 1;
export default {
	created(){
		console.log('log: ' + i++)
	},
	mounted(){
		console.log('mounted: ' + i++)
	},

}
