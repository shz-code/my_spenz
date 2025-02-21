<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import { useUtilsStore } from './stores/utilsStore'

const { utils } = useUtilsStore()
</script>

<template>
  <AppHeader />

  <main class="container py-4">
    <div class="mb-4">
      <h3>
        Selected Mode: <span class="text-2xl">{{ utils.preferredMode }}</span>
      </h3>
    </div>
    <RouterView />
  </main>
</template>
