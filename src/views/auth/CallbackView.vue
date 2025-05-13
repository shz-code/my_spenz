<script lang="ts" setup>
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { toast } from '@/components/ui/toast'
import { account } from '@/lib/appwrite'
import { createProfile } from '@/services/profile'
import { useAuthStore } from '@/stores/authStore'
import { CheckCircle, Loader2 } from 'lucide-vue-next'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const isLoading = ref(true)
const message = ref('')

const { setUser } = useAuthStore()

;(async () => {
  const user = await account.get()
  isLoading.value = false

  if (user) {
    message.value = 'Authentication successful'
    setUser(user)
    toast({
      title: 'Login successful',
      description: 'You have been successfully authenticated',
    })

    try {
      await createProfile(user.$id)
    } catch (error) {
      console.error('Failed to create profile:', error)
    }

    setTimeout(() => {
      router.push('/')
    }, 2000)
  } else message.value = 'Authentication failed'
})()
</script>

<template>
  <div class="grid place-items-center">
    <Card class="max-w-[500px] w-full text-center">
      <CardHeader>
        <CardTitle>Authenticating</CardTitle>
        <CardDescription>Please wait while we complete your sign-in</CardDescription>
      </CardHeader>
      <CardContent class="flex flex-col items-center space-y-4">
        <div v-if="isLoading" class="flex flex-col items-center space-y-4">
          <Loader2 class="h-8 w-8 animate-spin" />
          <p class="text-sm text-muted-foreground">Verifying your credentials...</p>
        </div>
        <div v-else class="text-center">
          <CheckCircle class="h-8 w-8 text-primary mx-auto mb-2" />
          <p class="text-sm text-primary">{{ message }}</p>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
