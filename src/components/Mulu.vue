<template>
	<div class="mulu">
		<div class="nav">
			<a href="javascrript:;">
				<span>1-100章</span>
			</a>
		</div>
		<div class="list">
			<span class="active">1-100</span><span>100-200</span><span>200-300</span>
		</div>
		<ul class="mulu_content">
			<li><a href="javascrript:;">第一章 留下来一起玩</a></li>
		</ul>
	</div>
	
</template>
<style  lang="less">
@import url('../assets/reset.less');
.mulu{
	.nav{
		width: 100%;
		height: 36/@rem;
		a{
			display: block;
			text-align: center;
			width: 100%;
			height: 100%;
			span{
				color: ##AAA;
				line-height: 36/@rem;
			}
		}

	}
	.list{
		display: flex;
		background-color: #FAF7F5;
		span{
			.borderradius(32/@rem);
			border: 1px solid #D1CFCD;
			background-color:#fff; 
			padding: 10/@rem;
			font-size: 24/@rem;
			margin-right: 15/@rem;

		}
		&.active{
			background-color: #D1CFCD;
		}
	}
}
	



</style>
<script>


</script>