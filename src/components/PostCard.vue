<template>
  <img class="post-image" :src="post.image" />
  <div class="post-title">{{ post.title }}</div>
  <div class="post-body">{{ post.body }}</div>
</template>

<script setup>
const props = defineProps({
  post: Object,
})
console.log('post', props.post)
</script>

<style scoped>
.post-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.post-title {
  font-size: 1.2rem;
  font-weight: bold;
  padding: 1rem 1rem 0.5rem;
  color: #333;
}

.post-body {
  font-size: 0.95rem;
  line-height: 1.5;
  color: #555;
  padding: 0 1rem 1rem;
  flex-grow: 1;
}
</style>
