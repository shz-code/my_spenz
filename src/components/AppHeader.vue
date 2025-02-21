<script lang="ts" setup>
import { useUtilsStore } from '@/stores/utilsStore'
import AppButton from './ui/button/AppButton.vue'

const { togglePreferredMode } = useUtilsStore()
</script>

<template>
  <header class="bg-slate-800 text-white py-4 px-6 flex justify-between items-center">
    <div class="text-lg font-bold">My Spenz</div>
    <nav class="flex space-x-4 items-center">
      <router-link class="hover:text-gray-300" :to="{ name: 'Home' }">Home</router-link>
      <router-link class="hover:text-gray-300" :to="{ name: 'About' }">About</router-link>
      <AppButton variant="secondary" @click="togglePreferredMode">Toggle Mode</AppButton>
    </nav>
  </header>
</template>
