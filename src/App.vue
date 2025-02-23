<script setup lang="ts">
import AppFooter from './components/AppFooter.vue'
import AppHeader from './components/AppHeader.vue'
import {
  PATTERN_BACKGROUND_DIRECTION,
  PATTERN_BACKGROUND_SPEED,
  PATTERN_BACKGROUND_VARIANT,
} from './components/backgrounds'
import PatternBackground from './components/backgrounds/PatternBackground.vue'
import Toaster from '@/components/ui/toast/Toaster.vue'
import { useAuthStore } from './stores/authStore'
import { ref } from 'vue'
import AppLoader from './components/AppLoader.vue'

const { setUser } = useAuthStore()

const isAuthChecked = ref(false)

if (localStorage.getItem('user')) {
  const localUser = JSON.parse(localStorage.getItem('user')!)
  if (localUser) {
    setUser(localUser)
  }
}

isAuthChecked.value = true
</script>

<template>
  <div v-if="!isAuthChecked"><AppLoader /></div>
  <div v-else class="flex flex-col flex-grow">
    <AppHeader />
    <Toaster />

    <PatternBackground
      :animate="true"
      :direction="PATTERN_BACKGROUND_DIRECTION.TopRight"
      :variant="PATTERN_BACKGROUND_VARIANT.Dot"
      :speed="PATTERN_BACKGROUND_SPEED.Slow"
      class="flex-grow"
    >
      <main class="container py-8 relative">
        <RouterView />
      </main>
    </PatternBackground>

    <AppFooter />
  </div>
</template>
