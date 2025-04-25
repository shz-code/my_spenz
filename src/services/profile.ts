import { toast } from '@/components/ui/toast'
import { account } from '@/lib/appwrite'

export const getUserAccount = async () => {
  const user = await account.get()
  return user
}

export const updateUserAccount = async (name: string) => {
  const user = await account.updateName(name)
  toast({
    title: 'Profile updated',
    description: 'Your profile has been updated successfully.',
  })
  return user
}
