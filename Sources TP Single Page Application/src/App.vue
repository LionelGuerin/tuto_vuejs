<template>
    <Header />
    <div class="container">
        <ContactPage v-if="page === 'contact'" />
        <BlogPage v-else-if="page === 'blog'" />
        <HomePage v-else-if="page === ''" />
        <SinglePage v-else-if="page === 'post'" :id="param" />
        <NotFoundPage v-else />
    </div>
</template>

<script setup>
import Header from './components/Header.vue';
import HomePage from './pages/HomePage.vue';
import ContactPage from './pages/ContactPage.vue'
import BlogPage from './pages/BlogPage.vue'
import NotFoundPage from './pages/NotFoundPage.vue'
import { usePage } from './composable/usePage.js';
import SinglePage from './pages/SinglePage.vue';

const { page, param } = usePage()
</script>

<style>
.container {
    padding-top: 2rem;
    max-width: calc(100vw - 4rem);
}
</style>
