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
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const categories = ['Food', 'Transportation', 'Entertainment', 'Utilities', 'Other']

const handleSubmit = () => {
  // Implement expense creation logic here
  console.log('Add expense')
}
</script>

<template>
  <div class="grid place-items-center">
    <Card class="max-w-[500px] w-full">
      <CardHeader>
        <CardTitle>Add Expense</CardTitle>
        <CardDescription>Add a new expense</CardDescription>
      </CardHeader>
      <CardContent>
        <Form class="space-y-4" @submit.prevent="handleSubmit">
          <FormField name="amount">
            <FormItem>
              <FormLabel>Amount</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" />
              </FormControl>
            </FormItem>
          </FormField>
          <FormField name="category">
            <FormItem>
              <FormLabel>Category</FormLabel>
              <FormControl>
                <Select>
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
            </FormItem>
          </FormField>
        </Form>
      </CardContent>
      <CardFooter>
        <Button type="submit">Add Expense</Button>
      </CardFooter>
    </Card>
  </div>
</template>
