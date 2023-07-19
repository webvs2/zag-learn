<template>
  <div>
    <button class="button" v-bind='{ ...api.buttonProps }'
      :style='{ background: api.active ? "#67C23A" : "#F56C6C", borderRadius: text ?"4px":"50%"}'>
      {{ text }}
    </button>
  </div>
</template>

<script setup>
import { reactive, computed, defineProps } from 'vue'
const props = defineProps({
  defineActive: {
    type: [String],
    default: false
  },
  successText: {
    type: String,
    default: "ON"
  },
  errorText: {
    type: String,
    default: "OFF"
  },
})
import { useMachine, normalizeProps } from "@zag-js/vue"
import { machine, connect } from "./index"
const [state, send] = useMachine(machine(props.defineActive))
const api = computed(() => connect(state, send, normalizeProps))
const text = computed(() => api.value.active ? props.successText : props.errorText)


</script>

<style lang="scss"  scoped>
.button {
  transition: all 0.3s ease;
  color: #fff;
  border: none;
  font-size: 12px;
  padding: 8px 16px;

  &:focus {
    outline: none;

  }

  &:hover {
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  }
}
</style>