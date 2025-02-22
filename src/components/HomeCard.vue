<script setup lang="ts">
import Card from './ui/card/Card.vue'
import CardContent from './ui/card/CardContent.vue'
import CardHeader from './ui/card/CardHeader.vue'
import CardTitle from './ui/card/CardTitle.vue'
</script>

<template>
  <Card class="bg-gradient-to-tr from-slate-700 to-slate-950 text-white">
    <CardHeader>
      <CardTitle><slot name="title" /></CardTitle>
    </CardHeader>
    <CardContent>
      <slot />
    </CardContent>
  </Card>
</template>
