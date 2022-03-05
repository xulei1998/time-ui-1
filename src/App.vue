<template>  <!---->
<div>hi</div>
 <Lucy/>
</template>

<script>
import Lucy from './components/Lucy.vue'  //从这里引入的Lucy组件

export default {
  name: 'App',
  components: {
    Lucy:Lucy
  }
}
</script>
