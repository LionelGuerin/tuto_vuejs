<template>
  <label v-for="(choice, index) in choices" :key="choice">
    <input
      @click="selectChoice(choice)"
      type="radio"
      name="answer"
      :id="`answer${index}`"
      :value="choice"
    />
    {{ choice }}
  </label>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
  choices: Array,
  correct_answer: String,
})
// const selectedAnswer = ref(null)
const emits = defineEmits(['hasSelectedGoodAnwser'])

console.log('choices', props.choices)

const selectChoice = function (choice) {
  console.log('selected choice', choice)
  emits('hasSelectedGoodAnwser', choice === props.correct_answer)
  //   selectedAnswer.value = null
}
</script>
