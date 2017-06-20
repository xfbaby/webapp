<template>
	<div>
		<nav>
			<a href="javascript:;" v-on:click="back" class="cancel">取消</a>
			<Headers>	登录</Headers>
		</nav>
		<div class="login-area mt25">
		<div class="from-group ">
			<input type="text" placeholder="手机号或邮箱">
		</div>
			<div class="from-group">
				<input type="password" placeholder="密码">
		   </div>
		   <div class="from-group">
				<input type="button" value="登录" class="btn">
		   </div>
		</div>
	</div>
</template>
<script>
	import Headers from './Header.vue'
	import Router from 'vue-router'
	export default{
		methods:{

			back:function(){
				let  r = new Router();
				r.back();
			}
          
		},
		components:{
			Headers
		}

	}
</script>
<style lang="less">
@rem:75rem;
input{-webkit-tap-highlight-color: rgba(255, 255, 255, 0); 
           -webkit-appearance:none; 
            outline: none;
}
.mt25{
	margin-top: 25/@rem;
}
.grey{
	border: 1px solid #e0dedd;
}
.cancel{
	position: absolute;
	left: 30/@rem;
	color: #7a746d;
	font-size: 20/@rem;
	top:21/@rem;

}
.login-area{padding: 0 30/@rem;}
.from-group input{
	padding: 27/@rem 22/@rem;
	 .grey;
	 width: 100%;
	 box-sizing: border-box;
	
	font-size: 23/@rem;




}
	.from-group .btn{
		background: #9ecce5;
		border-radius: 8px;
		text-align: center;
		border: none;
		color: #fff;
	}

</style>