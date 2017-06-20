<template>
	<div>
	<nav class="nav">
  
	    <router-link to="/index/tuijian"   >推荐</router-link>
	    <router-link to="/index/b"   >口味</router-link>
	    <router-link to="/index/c"   >免费</router-link>
	    <router-link to="/index/c"   >排行</router-link>
	    <router-link to="/index/c"   >分类</router-link>
	    <router-link to="/index/c"   >专题</router-link>
		<!-- <a href="javascript:;"></a>
		<a href="javascript:;">口味</a>
		<a href="javascript:;">面费</a> -->

	</nav>
	<transition :name="transitionName">
   <keep-alive>
   	<router-view class="child-view"></router-view>
   </keep-alive>
    
  </transition>
	</div>
</template>
<script>
//插件

import VueFullpage from 'vue-fullpage'
import Router from 'vue-router'
/*Vue.use(VueFullpage)*/
	export default{
		data(){
			return{
				transitionName: 'slide-left'
			}
		},
		methods:{

			back:function(){
				let  r = new Router();
				r.back();
			}
          
		},

		components:{
			Headers
		},
		   beforeRouteUpdate (to, from, next) {
		   	let  r = new Router();
      let isBack = r.isBack
      if (isBack) {
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = 'slide-left'
      }
     r.isBack = false
      next()
    }

	}
</script>

<style lang="less" scope>
 @import url('../assets/reset.less');
.nav{
	.w100;
	.bx;
	height: 72/@rem;
	padding: 28/@rem  26/@rem;
	display: inline-flex;
	a{
		display: inline-block;
		text-align: left;
		font-size: 26/@rem;
		.fc;
		flex-grow: 1;
		
	}

}
 

</style>