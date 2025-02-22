<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const router = useRouter()
const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const handleSubmit = () => {
  // Implement registration logic here
  console.log('Register with:', name.value, email.value, password.value)
  router.push('/dashboard')
}
</script>

<template>
  <div class="grid place-items-center">
    <Card class="max-w-[500px] w-full">
      <CardHeader>
        <CardTitle>Register</CardTitle>
        <CardDescription>Create a new account</CardDescription>
      </CardHeader>
      <CardContent>
        <form @submit.prevent="handleSubmit">
          <div class="grid w-full items-center gap-4">
            <div class="flex flex-col space-y-1.5">
              <Label for="name">Name</Label>
              <Input id="name" v-model="name" placeholder="Enter your name" />
            </div>
            <div class="flex flex-col space-y-1.5">
              <Label for="email">Email</Label>
              <Input id="email" v-model="email" placeholder="Enter your email" />
            </div>
            <div class="flex flex-col space-y-1.5">
              <Label for="password">Password</Label>
              <Input
                id="password"
                v-model="password"
                type="password"
                placeholder="Create a password"
              />
            </div>
            <div class="flex flex-col space-y-1.5">
              <Label for="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                v-model="confirmPassword"
                type="password"
                placeholder="Confirm your password"
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter class="flex flex-col">
        <Button class="w-full" @click="handleSubmit">Register</Button>
        <p class="mt-4 text-sm text-center text-muted-foreground">
          Already have an account?
          <router-link :to="{ name: 'Login' }" class="text-primary hover:underline"
            >Login</router-link
          >
        </p>
      </CardFooter>
    </Card>
  </div>
</template>
