//l need a state machine about the input box ,use zag.js to do this;
//generate the input state machine code
import { createMachine } from "@zag-js/core";
const machine = (initial) => {
  return createMachine({
    initial: initial || "active", //初始状态‘
    states: {
      focus: {
        on: {
          BLUR: {
            target: "blur",
          },
        },
      },
      blur: {
        on: {
          FOCUS: {
            target: "focus",
          },
        },
      },
    },
  });
};
let connect = function (state, send) {
  // console.log('state',state.value)
  const focus = state.value.matches("focus");
  return {
    focus,
    inputProps: {
      type: "text",
      role: "input",
      "aria-focus": focus,
      onBlur() {
        send("BLUR"); //send 发送， 触发特定事件
      },
      onFocus() {
        send("FOCUS"); //send 发送， 触发特定事件
      },
    },
  };
};
export { connect, machine };
