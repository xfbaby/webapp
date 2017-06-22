<template>
	<div class="rate">
		<span v-for="(no,index) in hasno" v-on:click="clicks(index)" v-bind:class="[{'has':index+1<=newstar},{'no':index+1>newstar}]"></span>
	</div>
	
</template>
<style  lang="less">
@import url('../assets/reset.less');

	.rate{
		display: flex;
	    span{
		display: inline-block;
		width: 20/@rem;
		height: 20/@rem;
		margin-right: 5/@rem;
		&.no{
			  background-image: url("../assets/star-dark.png");
	          background-size: 100% 100%;
		    }
		 &.has{
		 	background-image: url("../assets/star-light.png");
	          background-size: 100% 100%;
	           }
		 }
	}



</style>

<script>
export default{
	props:{
		star:Number,
		ev:Boolean 
	},
	data(){
		return {
			hasno:[0,0,0,0,0],
			newstar:this.star

		}	
	},
	methods:{
		  clicks(index) {
		  	if(this.ev){
		  		this.newstar = index+1;
		  	}
           else {
           	return ;
           }
           this.$emit('ee', this.newstar )
          //this.star = index+1;
      }
	}
}
</script>
