<template>
  <div class="topnav">
    <div class="logo">LOGO</div>  <!--点击logo 使得menuVisible的布尔值变化-->
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
    <span class="toggleAside" @click="toggleMenu"></span>  <!--手机版 Topnav的左边的按钮-->
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
export default {
  setup() {
    const menuVisible=inject<Ref<boolean>>("menuVisible")  //get
    const toggleMenu = ()=>{
      menuVisible.value = !menuVisible.value;  //取反
    }
    return { toggleMenu };  //return之后template才能获取这个
  },
};
</script>

<style lang="scss" scoped>
.topnav {
  background: pink;
  display: flex;
  padding: 16px;
  /*position: relative;  是相对定位  才能加z-index  其余的是0 */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;
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
  > .toggleAside {
    display: inline-block;
    width: 24px;
    height: 24px;
    background: red;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;  /* 默认是不显示的 */
  }
  @media (max-width:500px) {  /* 如果宽度小于500px */
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;  /* 小于500px时，是显示的  */
    }

    
  }
}
</style> 