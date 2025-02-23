<script lang="ts" setup>
import { Moon, Sun } from 'lucide-vue-next'
import { Button } from './ui/button'
import { Switch } from '@/components/ui/switch'
import { ref, watchEffect } from 'vue'
import { useAuthStore } from '@/stores/authStore'
import { useRouter } from 'vue-router'
import MobileMenu from './MobileMenu.vue'

const router = useRouter()

const theme = ref(localStorage.getItem('theme') || 'light')

const { auth, logout } = useAuthStore()

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  localStorage.setItem('theme', theme.value)
}

const toggleState = ref(false)

watchEffect(() => {
  if (theme.value === 'dark') {
    document.documentElement.classList.add('dark')
    toggleState.value = true
  } else {
    document.documentElement.classList.remove('dark')
    toggleState.value = false
  }
})

const handleLogout = () => {
  logout()
  router.push({ name: 'Login' })
}
</script>

<template>
  <header class="border-b">
    <div class="container flex items-center justify-between py-4 px-4">
      <h1 class="text-lg font-semibold">
        <router-link :to="{ name: 'Home' }">Expense Tracker</router-link>
      </h1>
      <nav class="items-center space-x-4 hidden md:flex">
        <router-link :to="{ name: 'ExpenseList' }">
          <Button variant="ghost"> Expenses </Button>
        </router-link>
        <router-link :to="{ name: 'Settings' }">
          <Button variant="ghost"> Settings </Button>
        </router-link>

        <router-link v-if="!auth.user" :to="{ name: 'Login' }">
          <Button variant="default"> Login </Button>
        </router-link>

        <Button v-if="auth.user" variant="destructive" @click="handleLogout"> Logout </Button>

        <!-- Theme Switcher -->
        <div class="flex items-center space-x-2">
          <Sun :size="16" />
          <Switch v-model="toggleState" @click="toggleTheme" />
          <Moon :size="16" />
        </div>
      </nav>

      <!-- Mobile menu -->
      <nav class="md:hidden">
        <MobileMenu />
      </nav>
    </div>
  </header>
</template>
