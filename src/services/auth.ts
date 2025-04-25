import { toast } from '@/components/ui/toast'
import { account } from '@/lib/appwrite'
import { AppwriteException, ID } from 'appwrite'
import { getUserAccount } from './profile'

export const loginWithEmailAndPassword = async (email: string, password: string) => {
  try {
    await account.createEmailPasswordSession(email, password)
    const user = await getUserAccount()
    toast({
      title: 'Login successful',
      description: 'You have been successfully authenticated',
    })
    return user
  } catch (error) {
    if (error instanceof AppwriteException) {
      toast({
        title: 'Login failed',
        description: error.message,
        variant: 'destructive',
      })
    }
  }
}

export const registerWithEmailAndPassword = async (
  email: string,
  password: string,
  name: string,
) => {
  try {
    await account.create(ID.unique(), email, password, name)
    await account.createEmailPasswordSession(email, password)
    const user = await getUserAccount()
    toast({
      title: 'Registration successful',
      description: 'You have been successfully registered',
    })
    return user
  } catch (error) {
    if (error instanceof AppwriteException) {
      toast({
        title: 'Registration failed',
        description: error.message,
        variant: 'destructive',
      })
    }
  }
}

export const logoutAccount = async () => {
  await account.deleteSession('current')
  toast({
    title: 'Logged out',
    description: 'You have been logged out',
  })
}
