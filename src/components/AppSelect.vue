<script lang="ts" setup>
import { FormControl, FormField, FormMessage } from './ui/form'
import FormItem from './ui/form/FormItem.vue'
import FormLabel from './ui/form/FormLabel.vue'
import Select from './ui/select/Select.vue'
import SelectContent from './ui/select/SelectContent.vue'
import SelectGroup from './ui/select/SelectGroup.vue'
import SelectItem from './ui/select/SelectItem.vue'
import SelectTrigger from './ui/select/SelectTrigger.vue'
import SelectValue from './ui/select/SelectValue.vue'

interface Props {
  name: string
  placeholder?: string
  label?: string
  options: { value: string; label: string }[]
}

withDefaults(defineProps<Props>(), {
  placeholder: 'Enter value...',
})
</script>

<template>
  <FormField v-slot="{ componentField }" :name="name">
    <FormItem>
      <FormLabel>{{ label ? label : name.charAt(0).toUpperCase() + name.slice(1) }}</FormLabel>

      <Select v-bind="componentField">
        <FormControl>
          <SelectTrigger>
            <SelectValue :placeholder="placeholder" />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          <SelectGroup>
            <SelectItem v-for="option in options" :key="option.value" :value="option.value">
              {{ option.label }}
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <FormMessage />
    </FormItem>
  </FormField>
</template>
