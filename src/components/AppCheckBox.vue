<script lang="ts" setup>
import Checkbox from './ui/checkbox/Checkbox.vue'
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form'
import FormItem from './ui/form/FormItem.vue'

interface Props {
  name: string
  label?: string
  checked?: boolean
}
withDefaults(defineProps<Props>(), {
  label: 'Checkbox',
  checked: false,
})
</script>
<template>
  <FormField v-slot="{ value, handleChange }" type="checkbox" :name="name">
    <FormItem class="flex flex-row items-start gap-x-3 space-y-0">
      <FormControl>
        <Checkbox :model-value="value" @update:model-value="handleChange" />
      </FormControl>
      <div class="space-y-1 leading-none">
        <FormLabel>{{ label }}</FormLabel>
        <FormMessage />
      </div>
    </FormItem>
  </FormField>
</template>
