<template>
  <div class="topnav">
    <div class="logo" @click="toggleMenu">LOGO</div>  <!--点击logo 使得menuVisible的布尔值变化-->
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from 'vue'
export default {
  setup(){
    const menuVisible=inject<Ref<boolean>>('menuVisible')  //get
    const toggleMenu = ()=>{
      menuVisible.value = !menuVisible.value  //取反
    }
    return {toggleMenu}  //return之后template才能获取这个
  }
}
</script>

<style lang="scss" scoped>
.topnav {
  background: pink;
  display: flex;
  padding: 16px;
  position: relative;  /*是相对定位  才能加z-index  其余的是0 */
  z-index: 10;
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
}
</style> 