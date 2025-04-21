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
import { profileUpdateValidator } from '@/lib/validator'
import { useForm } from 'vee-validate'
import { ref } from 'vue'

const { handleSubmit } = useForm({
  validationSchema: profileUpdateValidator,
  initialValues: {
    emailNotification: true,
  },
})

const options = [
  { value: 'BDT', label: 'BDT' },
  { value: 'USD', label: 'USD' },
]

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

const saveSettings = handleSubmit(async (values) => {
  // Implement settings save logic
  console.log(values)
  console.log('Saving settings:', { preferences: preferences.value })
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
            <AppFormField name="email" placeholder="Enter your email" type="email" />
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
          <div>
            <h4>Security</h4>
            <div class="space-y-2">
              <Button @click="changePassword">Change Password</Button>
              <Button variant="outline" @click="enable2FA">Enable Two-Factor Authentication</Button>
            </div>
          </div>
          <Button @click="saveSettings">Save Settings</Button>
        </div>
      </CardFooter>
    </Card>
  </div>
</template>
