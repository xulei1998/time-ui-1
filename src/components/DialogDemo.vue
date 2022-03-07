<template>
  <div>Dialog 示例</div>
  <h1>示例1</h1>
  <Button @click="toggle">toggle</Button>  <!--点击事件-->
  <Dialog v-model:visible="x" :closeOnClickOverlay="false" :ok="f1" :cancel="f2">  
    <!--默认是点击遮罩层不关闭弹窗-->
    <!--用户点击ok 执行f1 然后再关闭-->
    <template v-slot:title>
      <strong>加粗的标题</strong>
    </template>
    <template v-slot:content>
      <strong>hi</strong>
      <div>hi2</div>
    </template>
  </Dialog>
  <h1>示例2</h1>
  <Button @click="showDialog">show</Button>  <!--另一种方式打开Dialog-->
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import { ref,h } from 'vue'
import { openDialog } from '../lib/openDialog'
export default {
  components: {     //引入组件Dialog和Button成为标签
    Dialog,
    Button
  },
  setup() {
    const x = ref(false)    //传入的x的值是false 初始不可见弹出框
    const toggle = () => {  //触发toggle事件，x的值取反
      x.value = !x.value
    }
    const f1 = () => {
      return false
    }
    const f2 = () => {
    }
    const showDialog = () => {  //另一种方法打开Dialog
      openDialog({
        title: h('strong', {}, '标题'),
        content: '你好',
        ok() {
          console.log('ok')
        },
        cancel() {
          console.log('cancel')
        }
      })
    }
    return {
      x,
      toggle,
      f1,
      f2,
      showDialog
    }
  }
}
</script>