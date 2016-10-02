<template>
<div>
<transition name="demo" mode="out-in">
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
</transition>
</div>
</template>

<script>

</script>

<style>
.demo-enter-active, .demo-leave-active {
  position: fixed;
  left: 0; 
  top: 0;
  width: 100%;
  height: 100%;
  transition: all .3s linear;
}
.demo-enter {
  transform: translateY(100%);
}
.demo-leave-active {
  transform: translateY(-100%);
}
</style>