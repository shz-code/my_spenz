<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { Button } from '@/components/ui/button'
import { Select } from '@/components/ui/select'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

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
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
const categories = ['Food', 'Transportation', 'Entertainment', 'Utilities', 'Other']

const selectedMonth = ref('')
const selectedCategory = ref('')

const filteredExpenses = computed(() => {
  return expenses.value.filter((expense) => {
    const monthMatch =
      !selectedMonth.value || months[expense.date.getMonth()] === selectedMonth.value
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
  console.log(`Deleting expense with id: ${id}`)
  expenses.value = expenses.value.filter((expense) => expense.id !== id)
}
</script>

<template>
  <div>
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-3xl font-bold">Expenses</h2>
      <router-link :to="{ name: 'ExpenseForm' }">
        <Button>Add Expense</Button>
      </router-link>
    </div>
    <div class="space-y-4">
      <div class="flex space-x-4">
        <Select v-model="selectedMonth">
          <option value="">All Months</option>
          <option v-for="month in months" :key="month" :value="month">{{ month }}</option>
        </Select>
        <Select v-model="selectedCategory">
          <option value="">All Categories</option>
          <option v-for="category in categories" :key="category" :value="category">
            {{ category }}
          </option>
        </Select>
      </div>
      <Table class="my-4 bg-background rounded-md shadow-sm border">
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow v-for="expense in filteredExpenses" :key="expense.id">
            <TableCell>{{ formatDate(expense.date) }}</TableCell>
            <TableCell>{{ expense.description }}</TableCell>
            <TableCell>{{ expense.category }}</TableCell>
            <TableCell>${{ expense.amount.toFixed(2) }}</TableCell>
            <TableCell>
              <Button variant="ghost" size="sm" @click="editExpense(expense.id)">Edit</Button>
              <Button variant="ghost" size="sm" @click="deleteExpense(expense.id)">Delete</Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  </div>
</template>
