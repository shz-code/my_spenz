<script lang="ts" setup>
import { getTest } from '@/api/test'
import AppLoader from '@/components/AppLoader.vue'
import { useQuery } from '@tanstack/vue-query'
import { watch } from 'vue'

const { data, isPending, isError, error } = useQuery({
  queryKey: ['posts'],
  queryFn: getTest,
})

watch(data, () => {
  console.log(data.value)
})
</script>

<template>
  <div v-if="isPending"><AppLoader /></div>
  <span v-else-if="isError">Error: {{ error?.message }}</span>

  <div v-else>
    <ul v-for="todo in data" :key="todo.id" class="mb-4 p-4 bg-gray-100">
      <li class="font-bold">{{ todo.title }}</li>
      <li>{{ todo.body.slice(0, 20) }}...</li>
    </ul>
  </div>
</template>
