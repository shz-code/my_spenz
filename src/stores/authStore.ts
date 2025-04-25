import {
  loginWithEmailAndPassword,
  logoutAccount,
  registerWithEmailAndPassword,
} from '@/services/auth'
import { type Models } from 'appwrite'
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
    const user = await loginWithEmailAndPassword(email, password)
    if (user) {
      setUser(user)
      return user
    }
    return null
  }

  const register = async (email: string, password: string, name: string) => {
    const user = await registerWithEmailAndPassword(email, password, name)
    if (user) {
      setUser(user)
      return user
    }
    return null
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setUser = (user: any) => {
    auth.user = user
    setLocalStorage(user)
  }

  const logout = async () => {
    await logoutAccount()
    resetLocalStorage()
    auth.user = null
  }

  return { setUser, logout, auth, login, register }
})
