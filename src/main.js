// import './assets/main.css'

import { createApp } from 'vue'
import AppTuto from './App.vue'
import todoList from './TodoList.vue'
import obs from './Obs.vue'
import quiz from './Quiz.vue'
import SinglePageApp from './SinglePageApp.vue'

// createApp(obs).mount('#app')
// createApp(quiz).mount('#app')
createApp(SinglePageApp).mount('#app')
// createApp(todoList).mount('#app')
// createApp(AppTuto).mount('#app')
