<template>
  <div>
    {{ api.inputProps }}
 <input type="text" v-bind="{...api.inputProps}" v-model="msg" />
  </div>
</template>

<script setup>
import {ref,computed} from 'vue'
import{connect, machine } from "./index.js"
import { useMachine, normalizeProps } from "@zag-js/vue"
let msg = ref('') 
const [state, send] = useMachine(machine(msg.value))
const api = computed(() => connect(state, send, normalizeProps))
console.log('api.inputProps',api.value)

</script>

<style lang="scss" scoped>

</style>