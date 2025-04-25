<script lang="ts" setup>
import AppSelect from '@/components/AppSelect.vue'
import Badge from '@/components/ui/badge/Badge.vue'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Edit, Plus, Trash2 } from 'lucide-vue-next'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const expenses = ref([
  { id: 1, date: new Date(), description: 'Groceries', category: 'Food', amount: 75.5 },
  {
    id: 2,
    date: new Date(Date.now() - 86400000),
    description: 'Gas',
    category: 'Transportation',
    amount: 45.0,
  },
  {
    id: 3,
    date: new Date(Date.now() - 172800000),
    description: 'Movie tickets',
    category: 'Entertainment',
    amount: 30.0,
  },
])

const months = [
  { value: 'January', label: 'January' },
  { value: 'February', label: 'February' },
  { value: 'March', label: 'March' },
  { value: 'April', label: 'April' },
  { value: 'May', label: 'May' },
  { value: 'June', label: 'June' },
  { value: 'July', label: 'July' },
  { value: 'August', label: 'August' },
  { value: 'September', label: 'September' },
  { value: 'October', label: 'October' },
  { value: 'November', label: 'November' },
  { value: 'December', label: 'December' },
]

const categories = [
  { value: 'Food', label: 'Food' },
  { value: 'Transportation', label: 'Transportation' },
  { value: 'Entertainment', label: 'Entertainment' },
  { value: 'Utilities', label: 'Utilities' },
  { value: 'Other', label: 'Other' },
]

const selectedMonth = ref('')
const selectedCategory = ref('')

const filteredExpenses = computed(() => {
  return expenses.value.filter((expense) => {
    const monthMatch =
      !selectedMonth.value || months[expense.date.getMonth()].value === selectedMonth.value
    const categoryMatch = !selectedCategory.value || expense.category === selectedCategory.value
    return monthMatch && categoryMatch
  })
})

const formatDate = (date: Date) => {
  return new Date(date).toLocaleDateString()
}

const editExpense = (id: number) => {
  router.push(`/expenses/edit/${id}`)
}

const deleteExpense = (id: number) => {
  // Implement delete logic here
  expenses.value = expenses.value.filter((expense) => expense.id !== id)
}
</script>

<template>
  <div class="grid place-items-center">
    <Card class="container">
      <CardHeader class="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle class="text-3xl font-bold tracking-tight">Expense Tracker</CardTitle>
          <CardDescription class="mt-1 text-base text-muted-foreground">
            Manage and review your expenses with ease.
          </CardDescription>
        </div>
        <router-link :to="{ name: 'ExpenseForm' }">
          <Button size="lg" class="gap-2"> <Plus class="w-5 h-5" /> Add Expense </Button>
        </router-link>
      </CardHeader>
      <CardContent>
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div class="flex gap-4">
            <div class="w-[200px]">
              <AppSelect placeholder="All Month" :options="months" :noLabel="true" name="month" />
            </div>
            <div class="w-[200px]">
              <AppSelect
                placeholder="All Categories"
                :options="categories"
                :noLabel="true"
                name="category"
              />
            </div>
          </div>
          <div>
            <Badge variant="outline" class="text-base px-4 py-2">
              Total: ${{ filteredExpenses.reduce((sum, e) => sum + e.amount, 0).toFixed(2) }}
            </Badge>
          </div>
        </div>
        <div class="overflow-x-auto rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Category</TableHead>
                <TableHead class="text-right">Amount</TableHead>
                <TableHead class="text-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow v-if="filteredExpenses.length === 0">
                <TableCell colspan="5" class="text-center text-muted-foreground py-8">
                  No expenses found for the selected filters.
                </TableCell>
              </TableRow>
              <TableRow v-for="expense in filteredExpenses" :key="expense.id">
                <TableCell>{{ formatDate(expense.date) }}</TableCell>
                <TableCell>{{ expense.description }}</TableCell>
                <TableCell>
                  <Badge variant="secondary">{{ expense.category }}</Badge>
                </TableCell>
                <TableCell class="text-right font-semibold">
                  ${{ expense.amount.toFixed(2) }}
                </TableCell>
                <TableCell class="text-center">
                  <Button variant="ghost" size="icon" @click="editExpense(expense.id)">
                    <Edit class="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" @click="deleteExpense(expense.id)">
                    <Trash2 class="w-4 h-4 text-destructive" />
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
