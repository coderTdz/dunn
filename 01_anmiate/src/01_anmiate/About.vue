<template>
  <div>
    <!-- 你好关于我的信息 -->
    <button @click="btnclick">点我试试看</button>
    {{ number }}--{{ counter }}--{{ age }}

    <input v-model="message" />
    <div class="text">{{ message }}qqqqq</div>
  </div>
</template>

<script>
import { reactive, ref, toRefs, toRef, watchEffect } from "vue";
import { debounceref } from "./useDebounceRef";
export default {
  props: {
    name: {
      type: String,
      default: "aaaa",
    },
  },

  setup(props, context) {
    const state = reactive({
      number: 0,
      age: "18",
    });
    const { age } = toRefs(state);
    let number = toRef(state, "number");
    const counter = ref(0);

    const btnclick = () => {
      number.value++;
      age.value++;
      counter.value++;
      console.log(number);
    };

    let message = debounceref("你好啊");
    watchEffect((aaaa = {}));
    return {
      state,
      number,
      age,
      counter,
      btnclick,
      message,
    };
  },
};
</script>

<style scoped>
</style>