import { ref } from 'vue'
export function fetchPosts(nbPage = 1) {
  const posts = ref(null)
  const state = ref('loading')
  fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${nbPage}`)
    .then((res) => {
      if (res.ok) {
        return res.json()
      }
      throw new Error('Error loading')
    })
    .then((resJson) => {
      posts.value = resJson.map(function (post) {
        return {
          ...post,
          image: `https://picsum.photos/id/${post.id * 10}/200`,
        }
      })
      state.value = 'idle'
    })
    .catch((e) => {
      state.value = 'error'
    })
  return { posts, state }
}
