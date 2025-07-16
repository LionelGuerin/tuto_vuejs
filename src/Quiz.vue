<template>
  <QuizContainer class="QuizContainer" :data="quizs"> </QuizContainer>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import QuizContainer from './components/QuizContainer.vue'
const quizs = ref({})

onMounted(function () {
  fetch('http://localhost:5173/public/quiz.json')
    .then((res) => {
      return res.json()
    })
    .then((resJson) => {
      console.log('resJson', resJson)
      quizs.value = resJson
      console.log('quizs 0', quizs.value)
    })
    .catch((e) => {
      console.log('notloaded', e)
    })
})
console.log('quizs', quizs.value)
</script>

<style>
.QuizContainer {
  display: flex;
  margin: auto;
}
html,
body,
#app {
  display: flex;
  align-items: center; /* vertical */
  justify-content: center; /* horizontal */
  height: 100%;
  width: 100%;
}

.quizOver {
  text-align: center;
}
.quizOver button {
  margin-top: 20px;
}
</style>
