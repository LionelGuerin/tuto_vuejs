<template>
  <h1>TODLIST</h1>
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
    <h2>Vos taches en cours</h2>
    <div
      :key="task.date"
      v-show="hideDone ? !task.completed : true"
      @click="checkMe(task)"
      v-for="task in tasks"
    >
      <input type="checkbox" name="" id="" v-model="task.completed" />
      <span :class="{ completed: task.completed }">{{ task.title }}</span>
    </div>
  </div>
</template>

<script setup>
import { compile, ref } from 'vue'
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
  tasks.value.sort((task) => (task.completed ? 1 : -1))
  console.log('oout', tasks.value)
}

const hideDoneTasks = function () {
  hideDone.value = !hideDone.value
}

const sortByDate = function () {
  tasks.value.sort((task) => -task.date)
}
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
