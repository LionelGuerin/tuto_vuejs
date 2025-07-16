<template>
  <progress id="quizAnsweredProgress" :max="quizLefts" :value="quizAnswered">
    {{ percent }}
  </progress>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
  quizAnswered: Number,
  quizLefts: Number,
})
const percent = ref(Math.round((props.quizLefts / props.quizAnswered) * 100))
</script>
