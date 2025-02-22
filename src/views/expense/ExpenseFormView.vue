<script lang="ts" setup>
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import SelectValue from '@/components/ui/select/SelectValue.vue'
import SelectTrigger from '@/components/ui/select/SelectTrigger.vue'
import SelectContent from '@/components/ui/select/SelectContent.vue'
import SelectGroup from '@/components/ui/select/SelectGroup.vue'
import SelectLabel from '@/components/ui/select/SelectLabel.vue'
import SelectItem from '@/components/ui/select/SelectItem.vue'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useForm } from 'vee-validate'
import { addExpenseValidator } from '@/lib/validator'
import { toast } from '@/components/ui/toast'

const categories = ['Food', 'Transportation', 'Entertainment', 'Utilities', 'Other']

const { handleSubmit } = useForm({
  validationSchema: addExpenseValidator,
})

const onSubmit = handleSubmit((values) => {
  toast({
    title: 'Expense added',
    description: `You have added an expense of $${values.amount} under the category of ${values.category}`,
  })
  console.log(values)
})
</script>

<template>
  <div class="grid place-items-center">
    <Card class="max-w-[500px] w-full">
      <CardHeader>
        <CardTitle>Add Expense</CardTitle>
        <CardDescription>Add a new expense</CardDescription>
      </CardHeader>
      <CardContent>
        <form class="space-y-4" @submit.prevent="onSubmit">
          <FormField v-slot="{ componentField }" name="amount">
            <FormItem>
              <FormLabel>Amount</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" v-bind="componentField" type="number" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <FormField v-slot="{ componentField }" name="category">
            <FormItem>
              <FormLabel>Category</FormLabel>
              <FormControl>
                <Select v-bind="componentField">
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectLabel>Categories</SelectLabel>
                    <SelectGroup v-for="category in categories" :key="category">
                      <SelectItem :value="category"> {{ category }} </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <Button type="submit">Add Expense</Button>
        </form>
      </CardContent>
    </Card>
  </div>
</template>
