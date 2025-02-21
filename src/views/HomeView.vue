<script lang="ts" setup>
import { getTest } from '@/api/test'
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
  <span v-if="isPending">Loading...</span>
  <span v-else-if="isError">Error: {{ error?.message }}</span>

  <div v-else>
    <ul v-for="todo in data" :key="todo.id">
      <li>{{ todo.title }}</li>
      <li>{{ todo.body.slice(0, 20) }}...</li>
    </ul>
  </div>
</template>
