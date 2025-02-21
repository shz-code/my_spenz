<script setup lang="ts">
import AppButton from './components/ui/button/AppButton.vue'
</script>

<template>
  <header class="bg-slate-800 text-white">Hello to my spenz</header>

  <nav>
    <router-link :to="{ name: 'Home' }">Home</router-link>
    <router-link :to="{ name: 'About' }">About</router-link>
  </nav>

  <AppButton>Shadcn Button</AppButton>
  <main>
    <RouterView />
  </main>
</template>
