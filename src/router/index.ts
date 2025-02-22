import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import NotFound from '@/views/NotFound.vue'
import LoginView from '@/views/auth/LoginView.vue'
import RegisterView from '@/views/auth/RegisterView.vue'
import ExpenseListView from '@/views/expense/ExpenseListView.vue'
import ExpenseFormView from '@/views/expense/ExpenseFormView.vue'
import SettingsView from '@/views/SettingsView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  {
    path: '/auth',
    children: [
      { path: 'login', name: 'Login', component: LoginView },
      { path: 'register', name: 'Register', component: RegisterView },
    ],
  },
  {
    path: '/expense',
    children: [
      { path: '', name: 'ExpenseList', component: ExpenseListView },
      { path: 'new', name: 'ExpenseForm', component: ExpenseFormView },
    ],
  },
  { path: '/settings', name: 'Settings', component: SettingsView },
  { path: '/:catchAll(.*)', name: 'NotFound', component: NotFound },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
