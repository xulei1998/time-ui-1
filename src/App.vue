<template>  <!---->
 <router-view/>   <!--路由说要展示什么组件就在这里展示-->
</template>

<script lang="ts">
import { provide, ref } from "vue";
import { router } from "./router";


export default {
  name: 'App',
  setup(){
    const width = document.documentElement.clientWidth;  //获取浏览器的宽度  如果宽度<=500,默认是false，否则页面版就是不用点开才展示
    const menuVisible = ref(width <= 500 ? false : true);  // //声明menuVisible=引用，初始值是false
    provide('menuVisible',menuVisible)   //set 标记：让所有组件都可以使用menuVisible，使用xxx作为标记名即可
    router.afterEach(() => {
      if (width <= 500) {
        menuVisible.value = false;
      }
    });
  },
};
</script>
