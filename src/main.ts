import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import '@/assets/css/global.css'
import { VueQueryPlugin } from '@tanstack/vue-query'
import { createPinia } from 'pinia'

const pinia = createPinia()

createApp(App).use(VueQueryPlugin).use(pinia).use(router).mount('#app')
