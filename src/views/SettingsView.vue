<script lang="ts" setup>
import AppCheckBox from '@/components/AppCheckBox.vue'
import AppFormField from '@/components/AppFormField.vue'
import AppSelect from '@/components/AppSelect.vue'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { userUpdateValidator } from '@/lib/validator'
import { getProfile, getUserAccount, updateProfile, updateUserAccount } from '@/services/profile'
import { useForm } from 'vee-validate'
import { onMounted, ref } from 'vue'

// Update user declaration with a more specific type
const user = ref<{ $id: string; name: string } | null>(null)
const profileId = ref<string | null>(null)

const loading = ref(true)
const error = ref<boolean>(false)

onMounted(async () => {
  try {
    user.value = await getUserAccount()

    const profile = await getProfile(user.value?.$id)
    profileId.value = profile.$id

    setFieldValue('name', user.value?.name)
    setFieldValue('emailNotification', profile.emailNotification)
    setFieldValue('currency', profile.currency)
  } catch (err) {
    error.value = true
    console.error(err)
  } finally {
    loading.value = false
  }
})

const { handleSubmit, setFieldValue } = useForm({
  validationSchema: userUpdateValidator,
  initialValues: {
    emailNotification: true,
  },
})

const options = [
  { value: 'BDT', label: 'BDT' },
  { value: 'USD', label: 'USD' },
]

const saveSettings = handleSubmit(async (values) => {
  loading.value = true
  try {
    await updateUserAccount(values.name)
    if (user.value) {
      await updateProfile(profileId.value!, {
        emailNotification: values.emailNotification,
        currency: values.currency,
      })
      console.log('Profile updated successfully')
    }
  } catch (error) {
    console.error('Failed to update profile:', error)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="grid place-items-center">
    <Card class="max-w-[500px] w-full">
      <CardHeader>
        <CardTitle> Settings </CardTitle>
        <CardDescription>Manage your account settings</CardDescription>
      </CardHeader>
      <CardContent>
        <div>
          <h4>Profile</h4>
          <div class="space-y-2">
            <AppFormField name="name" placeholder="Enter your name" />
          </div>
        </div>
        <div class="mt-6">
          <h4>Preferences</h4>
          <div class="space-y-4 mt-4">
            <AppCheckBox name="emailNotification" label="Enable email notifications" />
            <AppSelect name="currency" :options="options" placeholder="Select currency" />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div class="space-y-4 max-w-md">
          <Button @click="saveSettings" :disabled="loading || error" :isLoading="loading"
            >Save Settings</Button
          >
        </div>
      </CardFooter>
    </Card>
  </div>
</template>
