<template>
  <button class="gulu-switch" @click="toggle" :class="{'gulu-checked':value}">  <!--如果value值是true，button的class是checked，否则button的class没有checked-->
    <span></span>  <!--这个就是那个按钮圆圈-->
  </button>
</template>


<script lang="ts">
import { ref } from "vue";
export default {
  props: {
    value: Boolean,  //value变量的值JS布尔类型
  },
  setup(props, context) {
    const toggle = () => {
      context.emit("update:value", !props.value);//这样才能修改value的属性
    };
    return { toggle };
  }
};
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.gulu-switch {
  height: $h; 
  width: $h * 2; 
  border: none; 
  background: #bfbfbf; 
  border-radius: $h/2; 
  position: relative;
  > span {
    position: absolute; 
    top: 2px; 
    left: 2px; 
    height: $h2; 
    width: $h2; 
    background: white;
    border-radius: $h2 / 2; 
    transition: all 250ms;  /* 添加动画 */
  }
  &.gulu-checked { 
    background: #1890ff;
    > span { 
      left: calc(100% - #{$h2} - 2px); 
    }
  }
  &:focus { outline: none; }  /* 不要有黑框  */
  &:active {
    > span { width: $h2 + 4px; }
  }
  &.gulu-checked:active {
    > span { width: $h2 + 4px; margin-left: -4px; }
  }
}
</style>
