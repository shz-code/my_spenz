import { account } from '@/lib/appwrite'

export const getProfile = async () => {
  const user = await account.get()
  return user
}
