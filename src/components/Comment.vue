<template>
	<div class="comment">
		<div class="title">精彩评论{{flag}}</div>
		<div class="list" v-for="item in items">
			<div class="avtar">
				<img v-bind:src='item.avatar' alt="">
			</div>
			
			<div class="sile">
				<div class="auto—info">
					<span class="auto">{{item.username}}</span>
					<span class="time">{{item.posttime}}</span>
				</div>
				<Rateing class="rate" :star="item.stars" :ev=false></Rateing>
				<div class="content">
                 {{item.text}}
				</div>
				

			</div>
		</div>
		<div class="footer">
		    <div class="edit" ref="edit">
				<a href="javascript:;"   v-on:click="total($event)">写长评论当大师，接受万人膝盖</a>
			</div>
			
			<div class="textarea" v-show="flag==true?true:false">
				<div class="action">
					<span class="cancel" v-on:click="close">取消</span>
					<span class="send"  v-on:click="close">发送</span>
				</div>
				<div class="grade">
					<span>打个分</span>
					<Rateing class="rate" :star=newstar :ev=true v-on:ee="incrementTotal"></Rateing>

				</div>
				<div class="write">
					<textarea class="say" rows="3" autofocus="autofocus" ref="say" >
						
					</textarea>
				</div>
			</div>
		</div>
		<div class="box" v-if="flag==true?true:false" ></div>
	</div>
	
</template>
<style  lang="less">
@import url('../assets/reset.less');
.comment{
	.title{
		.w100;
		.bx;
		height: 46/@rem;
		border-bottom: 1px solid #b2b0a3;
		padding-left: 26/@rem;
		font-size: 22/@rem;
		line-height: 47/@rem;
	}
	.list{
		.w100;
		.bx;
		border-bottom: 1px dashed #b2b0a3;
		padding: 10/@rem 10/@rem 10/@rem 26/@rem;
		display: flex;
		.avtar{
			img{
				.borderradius(34/@rem);
				margin-right: 15/@rem;
				width: 68/@rem;
				height: 68/@rem;
			}
		}
		.sile{
			.w100;
			.bx;
			padding-left: 10/@rem;
			.rate{
				margin: 10/@rem 0;
			}
			.auto—info{
				display: flex;
				.w100;
				justify-content: space-between;
				.auto{
                   color: #6392C5;
                   font-size: 24/@rem;
				}
				.time{
					color:#999;
					font-size: 24/@rem;
				}
			}
			.content{
				font-size: 24/@rem;
				color: #545454;
				.bx;
			}
			.replay{
				font-size: 14/@rem;
			}

		}


	}
	.footer{
		.edit{
			.w100;
			.bx;
			padding: 0 20/@rem;
			background: #b2b0a3;
			opacity: 0.8;
			position: fixed;
			bottom: 0;
			left: 0;
            padding-bottom: 10/@rem;
            height: 80/@rem;
            text-align: center;

		  a{
		  	display: block;
			.borderradius(12/@rem);
			padding-left: 10/@rem;
			line-height: 56/@rem;
			.bx;
			.grey;
			font-size: 24/@rem;
			vertical-align: middle;
			width: 80%;
            height: 50/@rem;
            background-color: #fff;
            margin:15/@rem auto;
            text-align: left;
           
		}
		}
		
		.textarea{
			.w100;
			.bx;
			padding: 20/@rem;
			background-color: #faf7f5;
			position: fixed;
			bottom: 20/@rem;
			z-index: 10;
			.action{
				display: flex;
				font-size: 24/@rem;
				justify-content: space-between;
				.grey2;
			}
			.grade{
				margin-top: 10/@rem;
				display: flex;
				font-size: 24/@rem;
				.grey2;
				.rate{
					margin-top: 2/@rem;
					margin-left: 10/@rem;
					span{
						margin-right: 30/@rem;
					}
				}
			}
			.write{
				margin: 20/@rem 0;
				.say{
					.w100;
					.bx;
					font-size: 24/@rem;
					border: 1px solid #b2b0a3;
					min-height: 100/@rem;
					.borderradius(10/@rem);
					background-color: #fff;
					padding: 20/@rem;
				}
			}
		}
	}
	.box{
		position:fixed;
		top:0;
		bottom:0;
		left:0;
		right:0;
		background:#000;
		opacity:0.7;
		z-index: 0;
	}
}

</style>

<script>
/*https://m.yuedu.163.com/sns/comment/get.json?type=2&id=3a66f220de0d4fb18c239b5d8a2eb25a_4&page=1&nextPageLink */
import Rateing from '../components/Rateing.vue'
export default{
	components:{
		Rateing
	},
	created(){

		var url = "../src/assets/data2.json";
		this.$http.get(url).then(response => {
			
			this.items = response.data.data.data;
			console.log(  response.data.data.data)
          
		},response => {

		})
	},
	data(){
		return {
			items:[],
			flag:false ,
			newstar:0
		}
		
	},
	methods:{
		total:function(event){
		event.preventDefault=true;
			this.flag = !this.flag;
		     this.$refs.say.focus();
             
		},
		close:function(){
			this.flag = false;
		},
		incrementTotal:function(st){
           this.newstar = st;
		}
	}
	
}
</script>