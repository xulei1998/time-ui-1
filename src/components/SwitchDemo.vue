<template>
  <div>
    <Switch v-model:value="bool"/>  <!--使用Switch组件 :value变量接收 bool变量的值 不加:传入的就是“bool”字符串 -->  
  </div>
</template>



<script lang="ts">  //不写这一行，后面无法引入.vue文件
import Switch from '../lib/Switch.vue' //引入Switch组件
import { ref } from 'vue'
export default {
  components: {
    Switch
  },
  setup(){   /* Switch组件 变量bool默认值是false */
    const bool = ref(false)
    return {bool}
  } 
}
</script> 