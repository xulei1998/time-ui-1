<template>
  <div>Button示例</div>
  <h1>示例1</h1>
  <div>
    <Button @click="onClick">你好</Button> <!--纯按钮-->
    <Button theme="button">你好</Button>  <!--有theme属性的按钮-->
    <Button theme="link">你好</Button>  <!--链接-->
    <Button theme="text">你好</Button> <!--文本-->
  </div>
  <h1>示例2</h1>  <!--按钮尺寸不同-->
  <div>
    <div>   <!--都是button的按钮-->
      <Button size="big">大大大</Button>
      <Button>普普通</Button>
      <Button size="small">小小小</Button>
    </div>
    <div>   <!--都是link的按钮-->
      <Button theme="link" size="big">大大大</Button>
      <Button theme="link">普通</Button>
      <Button theme="link" size="small">小小小</Button>
    </div>
    <div>   <!--都是text的按钮-->
      <Button theme="text"  size="big" >大大大</Button>
      <Button theme="text">普普通</Button>
      <Button theme="text" size="small">小小小</Button>
    </div>
  </div>


  <h1>示例3</h1> <!--按钮尺寸不同-->
  <div>
    <div>
      <Button level="main">主要按钮</Button>
      <Button>普通按钮</Button>
      <Button level="danger">危险按钮</Button>
    </div>
    <div>
      <Button theme="link" level="main">主要链接按钮</Button>
      <Button theme="link">普通链接按钮</Button>
      <Button theme="link" level="danger">危险链接按钮</Button>
    </div>
    <div>
      <Button theme="text" level="main">主要文字按钮</Button>
      <Button theme="text">普通文字按钮</Button>
      <Button theme="text" level="danger">危险文字按钮</Button>
    </div>
  </div>
  <h1>示例4</h1>
  <div>
    <Button disabled>禁用按钮</Button>
    <Button theme="link" disabled>禁用链接按钮</Button>
    <Button theme="text" disabled>禁用按钮</Button>
  </div>

  <h1>示例5</h1>
  <div>
    <Button loading>加载中</Button>
    <Button>加载完毕</Button>
  </div>
</template> 

<script lang="ts">
import Button from "../lib/Button.vue"; //引入Button，这样在上面template里面可以使用Button按钮
export default {
  components: { 
    Button:Button   //可以缩写成Button
  },
  setup() {
    const onClick = () => {
      console.log("hi");
    };
    return { onClick };
  },
};
</script> 