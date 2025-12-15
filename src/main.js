import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import LandingPage from './views/LandingPage.vue'
import Dashboard from './views/Dashboard.vue'
import './style.css'

const routes = [
  { path: '/', component: LandingPage },
  { path: '/dashboard', component: Dashboard }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
