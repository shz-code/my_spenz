<script lang="ts" setup>
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select } from '@/components/ui/select'

const user = ref({
  name: 'John Doe',
  email: 'john@example.com',
})

const preferences = ref({
  notifications: true,
  currency: 'USD',
})

const changePassword = () => {
  // Implement change password logic
  console.log('Changing password')
}

const enable2FA = () => {
  // Implement 2FA enablement logic
  console.log('Enabling 2FA')
}

const saveSettings = () => {
  // Implement settings save logic
  console.log('Saving settings:', { user: user.value, preferences: preferences.value })
}
</script>

<template>
  <div class="min-h-screen bg-background">
    <header class="border-b">
      <div class="container flex h-16 items-center px-4">
        <h1 class="text-lg font-semibold">Expense Tracker</h1>
        <nav class="ml-auto flex items-center space-x-4">
          <Button variant="ghost" @click="$router.push({ name: 'Home' })">Dashboard</Button>
          <Button variant="ghost" @click="$router.push({ name: 'ExpenseList' })">Expenses</Button>
        </nav>
      </div>
    </header>
    <main class="container py-8">
      <h2 class="text-3xl font-bold mb-6">Settings</h2>
      <div class="space-y-6 max-w-md">
        <div>
          <h3 class="text-xl font-semibold mb-2">Profile</h3>
          <div class="space-y-2">
            <div>
              <Label for="name">Name</Label>
              <Input id="name" v-model="user.name" />
            </div>
            <div>
              <Label for="email">Email</Label>
              <Input id="email" v-model="user.email" type="email" />
            </div>
          </div>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-2">Preferences</h3>
          <div class="space-y-2">
            <div class="flex items-center space-x-2">
              <Checkbox id="notifications" v-model="preferences.notifications" />
              <Label for="notifications">Enable email notifications</Label>
            </div>
            <div>
              <Label for="currency">Currency</Label>
              <Select id="currency" v-model="preferences.currency">
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
              </Select>
            </div>
          </div>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-2">Security</h3>
          <div class="space-y-2">
            <Button @click="changePassword">Change Password</Button>
            <Button variant="outline" @click="enable2FA">Enable Two-Factor Authentication</Button>
          </div>
        </div>
        <Button @click="saveSettings">Save Settings</Button>
      </div>
    </main>
  </div>
</template>
