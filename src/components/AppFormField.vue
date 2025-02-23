<script setup lang="ts">
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'

interface Props {
  name: string
  placeholder?: string
  type?: string
  label?: string
}

withDefaults(defineProps<Props>(), {
  placeholder: 'Enter value...',
  type: 'text',
})
</script>

<template>
  <FormField v-slot="{ componentField }" :name="name">
    <FormItem>
      <FormLabel>{{ label ? label : name.charAt(0).toUpperCase() + name.slice(1) }}</FormLabel>
      <FormControl>
        <Input :placeholder="placeholder" v-bind="componentField" :type="type" />
      </FormControl>
      <FormMessage />
    </FormItem>
  </FormField>
</template>
