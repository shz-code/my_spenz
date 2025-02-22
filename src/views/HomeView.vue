<script lang="ts" setup>
import { computed, ref } from 'vue'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import HomeCard from '@/components/HomeCard.vue'

const totalExpenses = ref(1250.75)
const monthlyExpenses = ref(450.25)
const topCategories = ref([
  { name: 'Food', amount: 200.5 },
  { name: 'Transportation', amount: 150.75 },
  { name: 'Entertainment', amount: 100.0 },
])
const recentExpenses = ref([
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

const formatDate = (date: Date) => {
  return computed(() => new Date(date).toLocaleDateString())
}
</script>

<template>
  <div class="relative">
    <h2>Dashboard</h2>
    <!-- Dashboard Cards -->
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <HomeCard>
        <template #title> Total Expenses </template>
        <p class="text-3xl font-bold">{{ totalExpenses.toFixed(2) }} BDT</p>
      </HomeCard>

      <HomeCard>
        <template #title> This Month </template>
        <p class="text-3xl font-bold">{{ monthlyExpenses.toFixed(2) }} BDT</p>
      </HomeCard>

      <HomeCard>
        <template #title> Categories </template>
        <ul class="space-y-2">
          <li v-for="category in topCategories" :key="category.name" class="flex justify-between">
            <span>{{ category.name }}</span>
            <span>{{ category.amount.toFixed(2) }} BDT</span>
          </li>
        </ul>
      </HomeCard>
    </div>
    <!-- Recent Transactions -->
    <div class="my-8">
      <h3>Recent Expenses</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow v-for="expense in recentExpenses" :key="expense.id">
            <TableCell>{{ formatDate(expense.date) }}</TableCell>
            <TableCell>{{ expense.description }}</TableCell>
            <TableCell>{{ expense.category }}</TableCell>
            <TableCell>${{ expense.amount.toFixed(2) }}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  </div>
</template>
