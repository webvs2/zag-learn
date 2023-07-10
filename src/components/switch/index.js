import { createMachine } from "@zag-js/core";
const machine = createMachine({
  initial: "active", //初始状态‘
  states: {
    active: {
      on: {
        CLICK: {
          target: "inactive",
        },
      },
    },
    inactive: {
      on: {
        CLICK: {
          target: "active",
        },
      },
    },
  },
});

let connect =function (state, send) {
  console.log('state',state.value)
  const active = state.value.matches("active")
  return {
    active,
    buttonProps: {
      type: "button",
      role: "switch",
      "aria-checked": active,
      onClick() {
        send("CLICK"); //send 发送， 触发特定事件
      },
    },
  };
}
export { connect, machine };
