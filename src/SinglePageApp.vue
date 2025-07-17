<template>
  <Header :navs="navs"></Header>
  <HomePage v-if="page === ''"></HomePage>
  <PostsPage @selectedPost="setPost" v-else-if="page === 'posts'"></PostsPage>
  <ContactPage v-else-if="page === 'contacts'"></ContactPage>
  <OnePost :post="selectedPost" v-else-if="page === 'post'"></OnePost>
  <NotFound v-else></NotFound>
</template>

<script setup>
import { ref } from 'vue'
import Header from './components/Header.vue'
import ContactPage from './pages/ContactPage.vue'
import HomePage from './pages/HomePage.vue'
import PostsPage from './pages/PostsPage.vue'
import { usePage } from './composable/usePage'
import NotFound from './pages/NotFound.vue'
import OnePost from './pages/OnePost.vue'

const navs = ref([
  {
    name: 'Acceuil',
    ankre: '#',
  },
  {
    name: 'Posts',
    ankre: '#posts',
  },
  {
    name: 'Contact',
    ankre: '#contacts',
  },
])

const selectedPost = ref(null)

const { page, param } = usePage()

const setPost = function (post) {
  selectedPost.value = post
}
console.log('page, param', page.value, param.value)
</script>
