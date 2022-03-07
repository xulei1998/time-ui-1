<template>
<template v-if="visible">
  <Teleport to="body">
    <!--遮罩层-->
    <div class="gulu-dialog-overlay" @click="onClickOverlay">  <!--点击遮罩层。触发onClickOverlay事件-->
    </div>
    <!--本体：弹出对话框，分三部分-->
    <div class="gulu-dialog-wrapper">
      <div class="gulu-dialog">

        <header> <!--标题-->
          <slot name="title" />  <!--使用插槽，在DialogDemo.vue里写标题和内容-->
          <span @click="close" class="gulu-dialog-close"></span> <!--点击×，触发close事件-->
        </header>
        
        <main>  <!--内容主体-->
          <slot name="content" />
        </main>
        
        <footer>   <!--右下角两个按钮-->
          <Button level="main" @click="ok">OK</Button> <!--ok按钮-->
          <Button @click="cancel">Cancel</Button><!--cancel按钮-->
        </footer>
      </div>
    </div>
  </Teleport>
</template>
</template>

<script lang="ts">
import Button from "./Button.vue";
export default {
  props: {
    visible: {       //visible属性
      type: Boolean,  //默认值 不可见
      default: false
    },
    closeOnClickOverlay: {
      type: Boolean,  //默认是点击遮罩层，关闭
      default: true
    },
    ok: {
      type: Function
    },
    cancel: {
      type: Function
    }
  },
  components: {
     Button,  //引用本层的button，这样才可以用<Button>标签
  },
  setup(props, context) {
    const close = () => {  //用户点击×，调用close，触发emit事件
      context.emit('update:visible', false)
    }
    const onClickOverlay = () => {
      if (props.closeOnClickOverlay) {  //如果值为true
        close()  //会点击遮罩层，关闭弹窗
      }
    }
    const ok = () => {
      if (props.ok?.() !== false) {  //如果props.ok存在且 props.ok()===true
        close()
      }
    }
    const cancel = () => {
      props.cancel?.()
      close()
    }
    return {
      close,
      onClickOverlay,
      ok,
      cancel
    }
  }
};
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;
.gulu-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 15em;
  max-width: 90%;
  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }
  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }
  >header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }
  >main {
    padding: 12px 16px;
  }
  >footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
  }
  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;
    &::before,
    &::after {
      content: '';
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>