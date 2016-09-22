<template>
<div>
  <!-- 顶部导航 -->
  <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal">
    <el-menu-item index="1">处理中心</el-menu-item>
    <el-submenu index="2">
      <template slot="title">我的工作台</template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
    </el-submenu>
    <el-menu-item index="3">订单管理</el-menu-item>
  </el-menu>
  
  <el-row :gutter="20" justify="space-between">
    <!-- 侧边导航 -->
    <el-col class="m-nav" :span="8">
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
    </el-col>

    <el-col :span="16" :offset="8">
      <el-button
        type="primary"
        v-loading.fullscreen="fullscreenLoading">
        显示整页加载，3 秒后消失
      </el-button>

      <el-radio class="radio" v-model="radio" label="1">备选项</el-radio>
      <el-radio class="radio" v-model="radio" label="2">备选项</el-radio>
      
      <el-button :plain="true" @click.native="open2">成功</el-button>
      <el-button :plain="true" @click.native="open3">警告</el-button>
      <el-button :plain="true" @click.native="open">消息</el-button>
      <el-button :plain="true" @click.native="open4">错误</el-button>
    

    </el-col>
  </el-row>


</div>
</template>

<style lang="sass">
.m-nav{
  position: fixed;
  height: 100%;
  .el-menu{
    height: 100%;
  }

}  
</style>

<script>
  export default {
    data() {
      return {
        radio: '',
        fullscreenLoading: false
      }
    },
    methods: {
      openFullScreen() {
        this.fullscreenLoading = true;
        setTimeout(() => {
          this.fullscreenLoading = false;
        }, 3000);
      },

      open() {
        this.$message({
          message: '恭喜你，这是一条消息',
          // type: 'success'
        });
      },

      open2() {
        this.$message({
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
      },

      open3() {
        this.$message({
          message: '警告哦，这是一条警告消息',
          type: 'warning'
        });
      },

      open4() {
        this.$message({
          message: '错了哦，这是一条错误消息',
          type: 'error'
        });
      }
    },
  }
</script>