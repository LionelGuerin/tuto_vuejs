<template>
    <aside>
        <h2>Sidebar</h2>
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
        <p>
            <Button @click="toggleDarkMode">Bonjour</Button>
        </p>
    </aside>
</template>

<script setup>
import { inject } from 'vue';
import Button from './components/Button.vue';

const { toggleDarkMode } = inject('darkMode')
</script>