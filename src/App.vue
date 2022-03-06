<template>  <!---->
 <router-view/>   <!--路由说要展示什么组件就在这里展示-->
</template>

<script lang="ts">
import { provide, ref } from 'vue'


export default {
  name: 'App',
  setup(){
    const menuVisible=ref(false)  //声明menuVisible=引用，初始值是false
    provide('menuVisible',menuVisible)   //set 标记：让所有组件都可以使用menuVisible，使用xxx作为标记名即可
  }
}
</script>
