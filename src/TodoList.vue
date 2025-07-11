<template>
  <h1>TODLIST</h1>
  <input type="checkbox" name="" id="" v-model="showTimer" />
  <Timer v-if="showTimer"></Timer>
  <form action="" @submit="addTask">
    <fieldset role="group">
      <input type="text" name="" id="" v-model="newTitle" placeholder="title" />
      <button>Ajouter Une Tache</button>
    </fieldset>
  </form>
  <div v-if="tasks.length === 0">Pas de tache pour le moment</div>
  <div v-else>
    <button @click="hideDoneTasks()">{{ hideDone ? 'Show' : 'Hide' }} done Tasks</button>
    <button @click="sortByDate()">Prior Tasks First</button>
    <h2>
      Vos taches en cours
      <span class="nbremain" v-if="remainingTasks > 0"
        >({{ remainingTasks }} Tache{{ remainingTasks > 1 ? 's' : '' }} à terminer)</span
      >
    </h2>
    <div
      :key="task.date"
      v-show="hideDone ? !task.completed : true"
      @click="checkMe(task)"
      v-for="task in sortedTasks"
    >
      <!-- <input type="checkbox" name="" id="" v-model="task.completed" /> -->
      <Checkbox
        v-model="task.completed"
        :classData="{ completed: task.completed }"
        :label="task.title"
        @check="(p) => console.log('check', p)"
        @uncheck="(p) => console.log('uncheck', p)"
      />
    </div>
  </div>
  <hr />
  <Button><h1>TESKBF</h1></Button>
  <hr />
  <Layout>
    <!-- <template v-slot:header> Head</template> -->
    <template v-slot:aside>aside </template>
    <template v-slot:main>Main </template>
    <template v-slot:footer>Footer </template>
  </Layout>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import Checkbox from './Checkbox.vue'
import Button from './Button.vue'
import Layout from './Layout.vue'
import Timer from './Timer.vue'

const showTimer = ref(true)
// const tasks = ref([
//   {
//     title: 'ex1',
//     completed: false,
//     date: 1020302103,
//   },
// ])
const tasks = ref([])
const newTitle = ref('')
const hideDone = ref(false)

onMounted(function () {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => res.json())
    .then((resJson) => (tasks.value = resJson.map((task) => ({ ...task, date: task.id }))))
})
const addTask = function (event) {
  console.log('in')
  event.preventDefault()
  tasks.value.push({ title: newTitle.value, date: new Date(), completed: false })
  console.log('oout', tasks.value)
  newTitle.value = ''
}

const checkMe = function (task) {
  console.log('checkme,', task)
  task.completed = !task.completed
  //   tasks.value.sort((task) => (task.completed ? 1 : -1))
  console.log('oout', tasks.value)
}

const hideDoneTasks = function () {
  hideDone.value = !hideDone.value
}

const sortByDate = function () {
  tasks.value.sort((task) => -task.date)
}
const sortedTasks = computed(function () {
  console.log('sortedTasks')
  const sortedTasks = tasks.value.toSorted((a, b) => (a.completed > b.completed ? 1 : -1))
  return sortedTasks
})

const remainingTasks = computed(function () {
  const filtered = tasks.value.filter((task) => task.completed === false)
  console.log('remainingTasks', filtered)
  return filtered.length
})
</script>

<style>
.completed {
  text-decoration: line-through;
}
.nbremain {
  font-size: 0.7em;
  color: rgb(110, 110, 110);
}
</style>
