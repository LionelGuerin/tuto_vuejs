import { ref, onMounted, onUnmounted } from 'vue'

export function useTimer(initial = 0) {
  const time = ref(initial)

  let timer
  onMounted(() => {
    timer = setInterval(() => {
      time.value++
    }, 1000)
  })
  onUnmounted(() => {
    clearInterval(timer)
  })
  return {
    time,
    reset() {
      time.value = 0
    },
  }
}
