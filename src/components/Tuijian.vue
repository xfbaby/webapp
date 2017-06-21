<template>
	<div class="tuijian_wrapper">
		<div class="banner"></div>
		<div class="info">
			<span class="title">推广</span>
			<span class="des">更俗巨作《更俗巨作》</span>
		</div>
		<div class="content">
			<div class="titleInfo">
				<span class="edtor">主编力推</span>
				<span class="more"><a href="javascript:;">更多</a></span>
			</div>
			<ul class="item">
				<li v-for="item in items">

                 <router-link :to="{  path: '/detail', query: { id:item.createBy}}"> 
				
                       <img  v-bind:src='item.iconUrl' alt="" class="book">
					<div class="book_info">
						<h1 class="info_title">{{item.title}}</h1>
						<p class="auto">{{item.category}}</p>
						<div class="info_des">{{item.description}}</div>
					</div>

             </router-link> 


			
				</li>
				<div class="chang_info">
					换一换<i></i>
				</div>
			</ul>
		</div>
    </div>
	
	
</template>
<style  lang="less">

@import url('../assets/reset.less');

a.router-link-active{
		color: red
	}

.tuijian_wrapper{
	.banner{
		width: 100%;
		height: 245/@rem;

	}
	.info{
		width: 100%;
		
		display: flex;
		padding-left: 26/@rem;
		box-sizing: border-box;
		.title{
	     .fontsize(20/@rem);
	     .borderradius(5/@rem);
		.red;
		width:52/@rem;
		height: 30/@rem;
		line-height: 30/@rem;
		text-align: center;
		background-color: @reds;
		margin-right: 22/@rem;
	         }
	    .des{
	    	.grey;
	    	.fontsize(22/@rem);
	    	line-height: 30/@rem;

	    }     

	}
	.content{
		
		.bx;
		padding-left: 26/@rem;
		.titleInfo{


			display: flex;
			width: 100%;
			height: 53/@rem;
			.bx;
			padding-right: 24/@rem;

			margin-top: 52/@rem;
			justify-content: space-between;
			.edtor{
				color: #fd6e5e;
				.fontsize(32/@rem);
				font-weight: bold;
			}
			.more{
				a{
					.grey;
				    .fontsize(22/@rem);
				    vertical-align: top;
				}
				
			}
		}
		.item{

			li{
				
				height: 193/@rem;
				margin-bottom: 36/@rem;
				position: relative;
				a{
					display: flex;
					position: relative;
					.book{
					width: 135/@rem;
					height: 194/@rem;
					margin-right: 38/@rem;
				    }
				    .book_info{
					h1{
						color: #000;
						.fontsize(33/@rem);
						line-height: 66/@rem; 
					}
					.auto{
						.grey;
						.fontsize(22/@rem);
						line-height: 22/@rem;
					}
					.info_des{
						position: absolute;
						bottom: 0;
						width:480/@rem;
                         overflow: hidden;
						.fontsize(26/@rem);

						 overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                         -webkit-line-clamp:2;
                          -webkit-box-orient: vertical;
                          .grey;

					}
				}
				
				
				}
			}
		    .chang_info{
					border-top: 1px solid  #b2b0a3;
					text-align: center;
					font-size: 22/@rem;
					line-height: 45/@rem;
					color: #b2b0a3;
				}
		}


	}

}

	
</style>
<script>
var url = 'http://m.yuedu.163.com/rank/original/list/data.json?gender=female&sortType=week&type=sell';
import Type from '../assets/filter.js'
export default{
	created(){
		this.$http.get(url).then(response => {
			
			this.items = response.data.data.books;
          
		},response => {

		})
	},
	data(){
		return {
			items:[]
		}
	},
	filters:{
		type:Type
	}

}
	
</script>

