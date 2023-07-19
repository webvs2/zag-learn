<template>
  <div ref="adsorptionNode" class="adsorption"
    v-bind:style="{ width: props.width,height:props.height, margin: execute ? ` ${top}px  ${right}px   ${bottom}px  ${left}px` : '' }">
    <span class="content">
      <slot></slot>
    </span>
  </div>
</template>

<script setup>
import { subtract } from 'lodash-es'
import { ref, watchEffect, watch, computed, getCurrentInstance, reactive, onMounted, defineProps, defineOptions, onUpdated } from 'vue'
defineOptions({
  name: 'adsorption'
})
const props = defineProps({
  height: {
    type: [Number, String],
    default: '0px'
  },
  execute: {
    type: Boolean,
    default: true
  },
  width: {
    type: [Number, String],
    default: 'inherit'
  },
  absolute: {
    type: Boolean,
    default: true
  },
})
const adsorptionNode = ref(null)
let left = ref(0)
let right = ref(0)
let top = ref(0)
let bottom = ref(0)
let init = () => {
  console.log('执行')
  let node = adsorptionNode.value
  let nodeInfo = node.getBoundingClientRect()
  console.log('nodeInfo', nodeInfo)
  let parent = { //父节点
    node: node.parentNode,
    info: node.parentNode.getBoundingClientRect()
  }
  console.log('node.nextSibling', node.nextElementSibling)
  let next = {//下一个兄弟节点
    node: node.nextElementSibling, //下一个兄弟节点
    info: node.nextElementSibling?.getBoundingClientRect( ) //下一个兄弟节点的信息
  }
  let prev = reactive({//上一个兄弟节点
    node: node.previousElementSibling,
    info: node.previousElementSibling.getBoundingClientRect()
  })


  if (next.node && next.info.width != parent.info.width) {
    right.value = -(subtract(next.info.left, nodeInfo.left) - nodeInfo.width) //计算吸附节点的right值;
  } else {
    prev.node.style.marginBottom = 0;
    prev.node.style.paddingBottom = 0;
    // bottom.value = -(subtract(next.info.bottom, nodeInfo.bottom) - nodeInfo.height) //计算  吸附节点的bottom值;
  }
  if (prev.node && prev.info.width != parent.info.width) {
    left.value = -(subtract(nodeInfo.left, prev.info.left) - prev.info.width)//计算吸附节点的left值;
  } else {
    next.node.style.marginTop = 0;
    next.node.style.paddingTop = 0;
  }
}

onMounted((el) => {
  init()

})


// onUpdated(() => {
//   init()
// })
</script>

<style lang="scss" scoped>
.adsorption {

  border: solid red 1px;
  //display: inline-flex;
  display: inline-block;
  // align-items: stretch;
  justify-content: var(--justify-content);
  background: rgb(250, 236, 216);
  color: #909399;
  transition: all 0.3s;
  //min-height: 20px;
  //line-height: 0;
width: 20px;
  .content {
    //display: flex;

  }

  //width: inherit;
}
</style>