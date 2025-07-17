<template>
  <div v-if="data.state === 'error'">Erreur au chargement des posts</div>
  <div v-else :aria-busy="data.state === 'loading'" class="posts-container">
    <a
      :href="'#post:' + post.id"
      @click="emits('selectedPost', post)"
      class="post-single-container"
      v-for="post in data.posts"
      :key="post.id"
    >
      <PostCard :post="post"></PostCard>
    </a>
  </div>
  <div class="footer-list-post">
    <button :disabled="nbPage === 1" @click="prevPosts" class="prev-page">Page Précédente</button>
    <button @click="nextPosts" class="next-page">Page Suivante</button>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import PostCard from '@/components/PostCard.vue'
import { fetchPosts } from '@/composable/FetchPosts'

// const state = ref('loading')
// const posts = ref(null)
let nbPage = ref(1)
let data = ref({})

const emits = defineEmits(['post'])

watch(
  function () {
    data.value = fetchPosts(nbPage.value)
  },
  { immediate: true },
)
console.log('data', data)
const nextPosts = function () {
  nbPage.value++
  // data.value = fetchPosts(nbPage.value)
}

const prevPosts = function () {
  nbPage.value--
  // data.value = fetchPosts(nbPage.value)
}
</script>

<style scoped>
.posts-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  padding: 2rem;
  padding-top: 130px;
}

.post-single-container {
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
  width: 300px; /* fixe pour le layout */
  max-width: 100%;
}

.post-single-container:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.footer-list-post {
  width: 100%;
  display: flex;
}

.prev-page,
.next-page {
  margin: auto;
  margin-bottom: 30px;
}
</style>
