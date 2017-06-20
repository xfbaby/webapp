<template>
	<div class="header">
		
	       <slot></slot>
	</div>
	
</template>
<style  lang="less">
*{padding: 0px;margin: 0px;}
a,a:hover{text-decoration: none;}
     @rem:75rem;
	.header{
		width: 100%;
		
		text-align: center;
		line-height: 65/@rem;
		font-size: 23/@rem;color:#716d69;
		border-bottom: 1px solid #ccc;
	
	}

</style>

