<template>
  <div ref="div">TEMPS : {{ time }} SIZE : w : {{ size.width }}, h : {{ size.height }}</div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const time = ref(0)
const div = ref('')
const size = ref({ width: 0, height: 0 })
let timerInterval
onMounted(function () {
  const rid = Math.random().toString(16).slice(2)
  const divSize = div.value.getBoundingClientRect()
  size.value = { width: divSize.width, height: divSize.height }
  console.log('divSize', divSize)

  timerInterval = setInterval(function () {
    console.log('TIMER', rid, time.value)
    time.value++
  }, 1000)
})

onUnmounted(function () {
  clearInterval(timerInterval)
})
</script>
