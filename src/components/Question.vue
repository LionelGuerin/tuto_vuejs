<template>
  <div>
    <p>{{ currentQuestion.question }}</p>
    <Answers
      :choices="randomiserChoices(currentQuestion.choices)"
      :correct_answer="currentQuestion.correct_answer"
      @hasSelectedGoodAnwser="hasSelectedGoodAnwser"
    >
    </Answers>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import Answers from './Answers.vue'
const props = defineProps({
  questions: Array,
  quizAnswered: Number,
})
const emits = defineEmits(['incrAnswerRep'])
console.log('questions', props.questions, props.quizAnswered)
const currentQuestion = computed(() => props.questions[props.quizAnswered])

const hasSelectedGoodAnwser = function (isGood) {
  console.log('isGood', isGood)
  emits('incrAnswerRep', isGood)
}

const randomiserChoices = function (choices) {
  return choices.sort(() => Math.random() - 0.5)
}
</script>
