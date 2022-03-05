<template>
  <div>
    <Topnav/>    <!--使用封装好的Topnav组件-->
    <div class="banner">
      <h1>时光UI</h1>
      <h2>一个很厉害的UI框架</h2>
      <p class="actions">
        <a>Github</a>
        <a>开始</a>
      </p> 
    </div>
  </div>
</template>

<script lang="ts">  //VS Code的bug
import Topnav from '../components/Topnav.vue'
export default {
  components: {Topnav} 
}
</script>
<style lang="scss" scoped>
</style>