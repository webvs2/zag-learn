<script setup>
import { ref } from 'vue'
import Switch from "./switch/index.vue"
import Adsorption from "./adsorption/index.vue"
import Input from "./input/input.vue"
defineProps({
  msg: String,
})

const count = ref(0)
</script>
<template>
  <h1 class="title"> {{ msg }}
  </h1>
  <Switch define-active="active"></Switch>
  <!-- <Input></Input> -->
  <div>
    <button class="button" style="margin-right: 90px;">brother</button>
    <!-- 1= -->
    <Adsorption width="20px" :execute="true" />
    <!-- <button class="button" style="margin-left: 10px;">sister</button> -->
    <span>sister</span>


  </div>
  <div>
    <div class="div1">div1</div>
    <Adsorption height="20px" />
    <div class="div2">div2</div>
  </div>
  <!-- <Adsorption /> -->
</template>

<style scoped>
.read-the-docs {
  color: #888;
}

.div1 {
  height: 60px;
 border: solid 1px red ;
  margin-bottom: 20px;
  display: inline-block;
  width: 100%;
}

.div2 {
  height: 60px;
  background: var(--color-red);
  margin-top: 20px;
  display: inline-block;
  width: 100%;
}
</style>
