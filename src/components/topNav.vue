<!-- 顶部导航 -->
<template>
<div class="m-topNavWraper">
	<div class="m-topNav">
		<el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal">
		    <el-menu-item index="1">三到教务平台</el-menu-item>
		    <el-submenu index="2">
		      <template slot="title">我的工作台</template>
		      <el-menu-item index="2-1">选项1</el-menu-item>
		      <el-menu-item index="2-2">选项2</el-menu-item>
		      <el-menu-item index="2-3">选项3</el-menu-item>
		    </el-submenu>
		    <el-menu-item index="3">订单管理</el-menu-item>
		  </el-menu>
	</div>
</div>
</template>


<script>
	
</script>


<style scoped>
.m-topNavWraper{
	height: 60px;
}
.m-topNav{
	position: fixed;
	z-index: 100;
	width: 100%;
	left: 0;
	top: 0;
	height: 60px;
}
</style>			