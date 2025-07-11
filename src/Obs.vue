<template>
  <input type="text" v-model="page.title" />
  Temps : {{ time }}
  <button @click="reset">RESET</button>
</template>

<script setup>
import { ref, watch, watchEffect } from 'vue'
import { useTimer } from './composable/useTimer'
const name = ref('')
const page = ref({
  title: 'demo',
})

const { time, reset } = useTimer()

// watch(
//   name,
//   (nval, oldval) => {
//     if (nval !== oldval) {
//       document.title = nval
//     }
//   },
//   {},
// )
watchEffect(() => {
  document.title = page.value.title
})
</script>
