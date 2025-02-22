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
</script>

<template>
  <AppHeader />
  <Toaster />

  <PatternBackground
    :animate="true"
    :direction="PATTERN_BACKGROUND_DIRECTION.TopRight"
    :variant="PATTERN_BACKGROUND_VARIANT.Dot"
    :speed="PATTERN_BACKGROUND_SPEED.Slow"
    class="container py-8 flex-grow"
  >
    <main class="relative">
      <RouterView />
    </main>
  </PatternBackground>

  <AppFooter />
</template>
