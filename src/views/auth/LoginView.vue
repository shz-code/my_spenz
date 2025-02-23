<script lang="ts" setup>
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
import { Github } from 'lucide-vue-next'
import { account } from '@/lib/appwrite'
import { OAuthProvider } from 'appwrite'
import { useForm } from 'vee-validate'
import { loginValidator } from '@/lib/validator'
import AppFormField from '@/components/AppFormField.vue'
import { useAuthStore } from '@/stores/authStore'
import { ref } from 'vue'

const router = useRouter()
const { login } = useAuthStore()

const { handleSubmit } = useForm({
  validationSchema: loginValidator,
})

const isLoading = ref(false)

const onSubmit = handleSubmit(async (values) => {
  isLoading.value = true
  const res = await login(values.email, values.password)
  if (res) {
    setTimeout(() => {
      router.push({ name: 'Home' })
    })
  }
  isLoading.value = false
})

const handleGithubLogin = async () => {
  await account.createOAuth2Session(OAuthProvider.Github, 'http://localhost:5173/auth/callback')
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
        <form @submit.prevent="onSubmit" class="space-y-2">
          <AppFormField name="email" placeholder="Enter your email" />
          <AppFormField name="password" placeholder="Enter your password" type="password" />
          <div class="pt-2">
            <Button
              class="w-full"
              @click="handleSubmit"
              :disabled="isLoading"
              :isLoading="isLoading"
              >Login</Button
            >
          </div>
        </form>
      </CardContent>
      <CardFooter class="flex flex-col">
        <div class="text-center">
          <p class="text-sm text-muted-foreground">Or login with</p>
          <div class="flex justify-center mt-2 space-x-2">
            <Button variant="outline" size="icon" @click="handleGithubLogin" :disabled="isLoading">
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
