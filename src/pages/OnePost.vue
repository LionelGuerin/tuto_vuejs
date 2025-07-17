<template>
  <div class="post-container">
    <PostCard :post="post"></PostCard>
  </div>
</template>

<script setup>
import PostCard from '@/components/PostCard.vue'

/// STOPED AT 34MIN

const props = defineProps({
  post: Object,
})
console.log('post', props.post)
</script>

<style scoped>
.post-container {
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
  width: 90%; /* fixe pour le layout */
  max-width: 100%;
  margin: auto;
  padding-top: 0px;
  margin-top: 130px;
}
</style>
