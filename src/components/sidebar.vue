<!-- 侧边导航 -->
<template>
<div class="m-sidebar">
	<el-menu default-active="2" theme="dark" class="el-menu-vertical-demo" >
	    <el-submenu index="1">
	      <template slot="title"><i class="el-icon-message"></i>导航一</template>
	      <el-menu-item-group title="分组一">
	        <el-menu-item index="1-1">选项1</el-menu-item>
	        <el-menu-item index="1-2">选项2</el-menu-item>
	      </el-menu-item-group>
	      <el-menu-item-group title="分组2">
	        <el-menu-item index="1-3">选项3</el-menu-item>
	      </el-menu-item-group>
	    </el-submenu>
	    <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
	    <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
	 </el-menu>
</div>
</template>


<script>
	
</script>


<style scoped>
.m-sidebar{
	position: fixed;
	z-index: 100;
	left: 0;
	top: 60px;
	width: 220px;
	height: 100%;
	background-color: #324057;
}
</style>