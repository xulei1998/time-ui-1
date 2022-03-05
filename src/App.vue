<template>  <!---->
<div>导航栏 |
  <router-link to="/">Lucy</router-link> | 
  <router-link to="/xxx">Lucy2</router-link>
  </div>
<hr/>
 <router-view/>   <!--路由说要展示什么组件就在这里展示-->
</template>

<script>

export default {
  name: 'App',
}
</script>
