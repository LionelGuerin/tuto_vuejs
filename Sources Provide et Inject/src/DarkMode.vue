<template>
    <slot></slot>
</template>

<script setup>
import { provide, ref, readonly } from 'vue';

const darkMode = ref(true)

provide('darkMode', {
    darkMode: readonly(darkMode),
    toggleDarkMode: () => {
        darkMode.value = !darkMode.value
    }
})
</script>