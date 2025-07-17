<template>
  <div class="nav-container">
    <nav class="nav">
      <a v-for="nav in navs" :key="nav.ankre" :href="nav.ankre" class="nav-link">
        {{ nav.name }}
      </a>
    </nav>
  </div>
</template>

<script setup>
const props = defineProps({
  navs: Array,
})
</script>

<style scoped>
.nav {
  display: flex;
  gap: 1rem;
  background-color: #1e1e2f;
  padding: 1rem 2rem;
  justify-content: center;
  border-bottom: 2px solid #444;
}

.nav-link {
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition:
    background-color 0.3s,
    color 0.3s;
}

.nav-link:hover {
  background-color: #3a3a5a;
  color: #ffd700;
}

/* Optionnel : lien actif si hash correspond */
.nav-link.active {
  background-color: #ffd700;
  color: #1e1e2f;
}

.nav-container {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}
</style>
