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
import { Github } from 'lucide-vue-next'

const router = useRouter()
const email = ref('')
const password = ref('')

const handleSubmit = () => {
  // Implement login logic here
  console.log('Login with:', email.value, password.value)
  router.push('/dashboard')
}

const handleGithubLogin = () => {
  // Implement GitHub OAuth login
  console.log('Login with GitHub')
}
</script>

<template>
  <div class="grid place-items-center">
    <Card class="max-w-[500px] w-full">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Enter your credentials to access your account</CardDescription>
      </CardHeader>
      <CardContent>
        <form @submit.prevent="handleSubmit">
          <div class="grid w-full items-center gap-4">
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
                placeholder="Enter your password"
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter class="flex flex-col">
        <Button class="w-full" @click="handleSubmit">Login</Button>
        <div class="mt-4 text-center">
          <p class="text-sm text-muted-foreground">Or login with</p>
          <div class="flex justify-center mt-2 space-x-2">
            <Button variant="outline" size="icon" @click="handleGithubLogin">
              <Github class="h-4 w-4" />
            </Button>
          </div>
        </div>
        <p class="mt-4 text-sm text-center text-muted-foreground">
          Don't have an account?
          <router-link :to="{ name: 'Register' }" class="text-primary hover:underline"
            >Register</router-link
          >
        </p>
      </CardFooter>
    </Card>
  </div>
</template>
