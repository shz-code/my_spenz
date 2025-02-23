<script lang="ts" setup>
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useForm } from 'vee-validate'
import { registerValidator } from '@/lib/validator'
import { ref } from 'vue'
import AppFormField from '@/components/AppFormField.vue'
import { useAuthStore } from '@/stores/authStore'
import { router } from '@/router'

const { handleSubmit } = useForm({
  validationSchema: registerValidator,
})

const { register } = useAuthStore()

const isLoading = ref(false)

const onSubmit = handleSubmit(async (values) => {
  isLoading.value = true
  const res = await register(values.email, values.password, values.name)
  if (res) {
    router.push({ name: 'Login' })
  }
  isLoading.value = false
})
</script>

<template>
  <div class="grid place-items-center">
    <Card class="max-w-[500px] w-full">
      <CardHeader>
        <CardTitle>Register</CardTitle>
        <CardDescription>Create a new account</CardDescription>
      </CardHeader>
      <CardContent>
        <form @submit.prevent="onSubmit" class="space-y-2">
          <AppFormField name="name" placeholder="Enter your name" />
          <AppFormField name="email" placeholder="Enter your email" />
          <AppFormField name="password" placeholder="Create a password" type="password" />
          <AppFormField
            name="confirmPassword"
            placeholder="Confirm your password"
            type="password"
            label="Confirm password"
          />
          <div class="pt-2">
            <Button
              class="w-full"
              @click="handleSubmit"
              :disabled="isLoading"
              :isLoading="isLoading"
              >Register</Button
            >
          </div>
        </form>
      </CardContent>
      <CardFooter class="flex flex-col">
        <p class="text-sm text-center text-muted-foreground">
          Already have an account?
          <router-link :to="{ name: 'Login' }" class="text-primary hover:underline"
            >Login</router-link
          >
        </p>
      </CardFooter>
    </Card>
  </div>
</template>
