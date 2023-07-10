<template>
  <div>

    <button  v-bind={...api.buttonProps}   :style='{ width: "40px", height: "24px", borderRadius: "999px", background: api.active ? "green" : "red" }'>
      {{api.active ? "ON" : "OFF"}}
    </button>
  </div>
</template>

<script setup>
import { reactive ,computed} from 'vue'
import { useMachine,normalizeProps  } from "@zag-js/vue"
import { machine, connect } from "./index"
// console.log(useMachine(machine))
const [state, send] = useMachine(machine)
// const api = connect(state, send,normalizeProps)
const api = computed(() => connect(state, send,normalizeProps))
</script>

<style  scoped>
.button {}
</style>