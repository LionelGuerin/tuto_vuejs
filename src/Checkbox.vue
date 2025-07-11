<template>
  <label for="">
    <input type="checkbox" @changes="onChange" v-model="model" />

    <span :class="classData">{{ label }}</span>
  </label>
</template>

<script setup>
const model = defineModel()
const props = defineProps({
  label: String,
  classData: Object,
  modelData: Object,
})
console.log('defineProps', props.label)
console.log('defineProps', props.classData)
console.log('defineProps', props.modelData)

const emits = defineEmits(['check', 'uncheck'])

const onChange = function (e) {
  if (e.currentTarget.checked) {
    emits('check', e.currentTarget)
  } else {
    emits('uncheck', e.currentTarget)
  }
}
</script>
