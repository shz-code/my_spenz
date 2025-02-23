<script setup lang="ts">
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { PanelTopOpen, LogOut, Sun, Moon } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { ref, watchEffect } from 'vue'
import Switch from './ui/switch/Switch.vue'

const theme = ref(localStorage.getItem('theme') || 'light')

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
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger><PanelTopOpen /></DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuLabel class="flex items-center justify-end">
        <Button variant="destructive" class="w-full"><LogOut /> Logout</Button>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <router-link :to="{ name: 'ExpenseList' }" class="w-full"> Expenses </router-link>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <router-link :to="{ name: 'Settings' }" class="w-full"> Settings </router-link>
      </DropdownMenuItem>
      <DropdownMenuItem class="flex items-center space-x-2">
        <Sun :size="16" />
        <Switch v-model="toggleState" @click="toggleTheme" />
        <Moon :size="16" />
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
