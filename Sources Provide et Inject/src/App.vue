<template>
    <div class="layout">
        <main>
            <h1>Article</h1>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur voluptatum quos error optio, hic
                tempora illum voluptas quod vel numquam facere recusandae veniam? Earum assumenda iusto fuga?
                Laboriosam,
                architecto cum!
            </p>
            <p>
                <Button>Bouton</Button>
            </p>
        </main>
        <aside class="sidebar">
            <DarkMode>
                <Sidebar />
            </DarkMode>
        </aside>
    </div>
</template>

<style>
.layout {
    display: grid;
    grid-template-columns: 1fr 200px;
}

.sidebar {
    background-color: #000;
    color: #FFF;
    padding: 1rem;
}
</style>

<script setup>
import { provide } from 'vue';
import Button from './components/Button.vue';
import Sidebar from './Sidebar.vue';
import DarkMode from './DarkMode.vue';

provide('darkMode', false)
</script>
