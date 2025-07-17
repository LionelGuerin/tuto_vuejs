import { onMounted, onUnmounted, ref } from 'vue'
export function usePage() {
  const { resPage, resParam } = parseHash()
  const page = ref(resPage)
  const param = ref(resParam)
  let removeEventListener
  onMounted(function () {
    const eventListener = function () {
      const { resPage, resParam } = parseHash()
      page.value = resPage
      param.value = resParam
    }
    window.addEventListener('hashchange', eventListener)
    removeEventListener = function () {
      window.removeEventListener('hashchange', eventListener)
    }
  })
  onUnmounted(function () {
    removeEventListener()
  })
  return { page, param }
}

function parseHash() {
  const clean = window.location.hash.replace('#', '')
  const [resPage, resParam] = clean.split(':')
  return {
    resPage,
    resParam: resParam ?? null,
  }
}
