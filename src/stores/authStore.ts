import { toast } from '@/components/ui/toast'
import { account } from '@/lib/appwrite'
import { AppwriteException, ID, type Models } from 'appwrite'
import { defineStore } from 'pinia'
import { reactive } from 'vue'

type Preferences = Record<string, unknown>

const setLocalStorage = (user: Models.User<Preferences>) => {
  localStorage.setItem('user', JSON.stringify(user))
}

const resetLocalStorage = () => {
  localStorage.removeItem('user')
}

export const useAuthStore = defineStore('auth', () => {
  const auth = reactive<{ user: Models.User<Preferences> | null }>({ user: null })

  const login = async (email: string, password: string) => {
    try {
      await account.createEmailPasswordSession(email, password)
      const user = await account.get()
      auth.user = user
      setLocalStorage(user)
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

  const register = async (email: string, password: string, name: string) => {
    try {
      const user = await account.create(ID.unique(), email, password, name)
      toast({
        title: 'Registration Successful',
        description: 'Please login to continue',
      })
      return user
    } catch (error) {
      if (error instanceof AppwriteException)
        toast({
          title: 'Registration failed',
          description: error.message,
          variant: 'destructive',
        })
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setUser = (user: any) => {
    auth.user = user
    setLocalStorage(user)
  }

  const logout = async () => {
    await account.deleteSession('current')
    auth.user = null
    resetLocalStorage()
    toast({
      title: 'Logged out',
      description: 'You have been logged out',
    })
  }

  return { setUser, logout, auth, login, register }
})
