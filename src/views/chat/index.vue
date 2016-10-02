<template>
<div>
    <transition></transition>
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
import vTable from 'src/components/table.vue'
import transition from 'src/components/transition.vue'
import logMixin from 'src/mixins/log.js'
  export default {
    components:{
      vTable,
      transition,
    },
    mixins: [logMixin],
    data() {
      return {
        tips: {
          data: 123
        },
        age: '',
        radio: '',
        fullscreenLoading: false
      }
    },
    watch: {
      age(newVal){
        console.log(newVal)
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