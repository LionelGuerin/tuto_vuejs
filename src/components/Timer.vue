<template>
  <div>Temps restant : {{ timeToAnswer }}s</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

let timeToAnswer = ref(3)
let interval
const emits = defineEmits(['timeIsOver'])
onMounted(function () {
  interval = setInterval(function () {
    console.log('timeToAnswer.value', timeToAnswer.value)
    timeToAnswer.value--
    if (timeToAnswer.value === 0) {
      emits('timeIsOver')
    }
  }, 1000)
})

onUnmounted(function () {
  clearInterval(interval)
})
</script>
