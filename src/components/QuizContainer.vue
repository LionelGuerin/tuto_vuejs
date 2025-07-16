<template>
  <div v-if="data.title">
    <div class="quizOver" v-if="quizOver">
      {{ messageQuiz }}
      <br /><button v-if="nbGoodAnswer < data.minimum_score" @click="resetQuiz">Réessayer</button>
    </div>
    <div v-else>
      <h1>{{ data.title }}</h1>
      <Timer :key="quizAnswered" @timeIsOver="timeIsOver"></Timer>
      <Progress :quizAnswered="quizAnswered" :quizLefts="data.questions.length"></Progress>
      <Question
        @incrAnswerRep="incrAnswerRep"
        :questions="data.questions"
        :quizAnswered="quizAnswered"
      ></Question>
    </div>
  </div>
</template>

<script setup>
import Progress from './Progress.vue'
import Question from './Question.vue'
import Timer from './Timer.vue'
import { computed, ref } from 'vue'
const props = defineProps({
  data: Object,
})
let quizAnswered = ref(0)
let nbGoodAnswer = ref(0)
let quizOver = ref(false)
console.log('data', props.data)

const incrAnswerRep = function (goodAnswer) {
  console.log('incr Anwser rep', goodAnswer)
  if (goodAnswer) {
    nbGoodAnswer.value++
  }
  if (quizAnswered.value + 1 === props.data.questions.length) {
    quizOver.value = true
  } else {
    quizAnswered.value++
  }
}

const messageQuiz = computed(function () {
  let ret = props.data.failure_message
  if (nbGoodAnswer.value >= props.data.minimum_score) {
    ret = props.data.success_message
  }
  ret += ` (${nbGoodAnswer.value}/${props.data.questions.length})`
  return ret
})

const resetQuiz = function () {
  nbGoodAnswer.value = 0
  quizAnswered.value = 0
  quizOver.value = false
}

const timeIsOver = function () {
  console.log('in emits timeIsOver')
  incrAnswerRep(false)
}
</script>
