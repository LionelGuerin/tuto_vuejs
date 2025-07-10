<!-- <script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style> -->

<template>
  <h1>Bonjour</h1>
  <div v-html="fname"></div>
  <div
    :style="{ color: count > 5 ? 'red' : 'green' }"
    :class="{ active: count > 5 }"
    v-bind:id="`count-${count}`"
  >
    Compteur : {{ count }}
  </div>
  <div :id="`count-${count}`">:id Compteur : {{ count }}</div>
  <button @click="incre">INC</button>
  <button v-on:click="decre">DEC</button>
  <div v-show="count > 5">OVERLOAD 6</div>
  <!-- <div v-="count > 5">hide Normal load</div> -->
  <div v-if="count > 5">IF OVERLOAD 6</div>
  <div v-else>IF load normal</div>
  <hr />
  <button @click="smovies()">SORT</button>
  <form action="" @submit="addmovie">
    <input type="text" placeholder="mname" v-model="mname" /> <button>Add movie</button> {{ mname }}
  </form>
  <ul>
    <li :key="movie" v-for="movie in movies">
      {{ movie }} <button @click="delMovie(movie)">REMOVE</button>
    </li>
  </ul>
  <hr />

  <ul>
    <li v-for="key in Object.keys(profile)">{{ key }} : {{ profile[key] }}</li>
  </ul>

  <button @click="randomAge()">R_Age</button>
</template>

<script setup>
import { ref } from 'vue'
const fname = '<span>JHON</span>'
const count = ref(0)
let mname = ref('')
const incre = function (e) {
  console.log('incre', e, count)
  count.value++
}
const decre = function (e) {
  console.log('decre', e, count)
  count.value--
}

const movies = ref(['movie 1', 'movie 2', 'movie 3', 'movie 4', 'movie 5'])

const delMovie = function (movie) {
  console.log(' called smovies.value', movies.value, movie)
  movies.value = movies.value.filter((m) => m !== movie)
}
let sorted = false
const smovies = function () {
  const ms = movies.value
  console.log(
    'ms',
    ms,
    ms.sort((a, b) => (a > b ? (sorted ? 1 : -1) : sorted ? 1 : -1)),
  )
  movies.value = ms.sort((a, b) => a + b)
  sorted = true
}

const addmovie = function (event) {
  console.log('event', event)
  event.preventDefault()
  movies.value.push(mname.value)
  console.log(movies.value) // ← Vérifie si l’élément est bien là
  mname.value = ''
}

const profile = ref({
  fname: 'jean',
  lanem: 'due',
  age: 20,
})

const randomAge = function () {
  profile.value.age = Math.round(Math.random() * 100)
}
</script>

<style scoped>
h1 {
  color: red;
}
</style>
