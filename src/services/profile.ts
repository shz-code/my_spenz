import { toast } from '@/components/ui/toast'
import { account, databases, ID } from '@/lib/appwrite'
import { Query } from 'appwrite'

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

/**
 * Creates a user profile document in the database.
 * @param userId - The unique ID of the user.
 * @param emailNotification - Whether email notifications are enabled (default: true).
 * @param currency - The preferred currency of the user (default: 'BDT').
 * @returns The created profile document.
 */
export const createProfile = async (userId: string, emailNotification = true, currency = 'BDT') => {
  try {
    const response = await databases.createDocument(
      import.meta.env.VITE_APPWRITE_DB_ID,
      import.meta.env.VITE_APPWRITE_PROFILE_ID,
      ID.unique(),
      {
        userId,
        emailNotification,
        currency,
      },
    )
    return response
  } catch (error) {
    console.error('Error creating profile:', error)
    throw error
  }
}

/**
 * Fetches the profile document for a given user ID.
 * @param userId - The unique ID of the user.
 * @returns The profile document if found.
 */
export const getProfile = async (userId: string) => {
  try {
    const response = await databases.listDocuments(
      import.meta.env.VITE_APPWRITE_DB_ID,
      import.meta.env.VITE_APPWRITE_PROFILE_ID,
      [Query.equal('userId', userId)],
    )

    if (response.documents.length > 0) {
      return response.documents[0]
    } else {
      throw new Error('Profile not found')
    }
  } catch (error) {
    console.error('Error fetching profile:', error)
    throw error
  }
}

/**
 * Updates the profile document for a given document ID.
 * @param documentId - The unique ID of the profile document.
 * @param updates - An object containing the fields to update.
 * @returns The updated profile document.
 */
export const updateProfile = async (
  documentId: string,
  updates: { emailNotification?: boolean; currency?: string },
) => {
  try {
    const response = await databases.updateDocument(
      import.meta.env.VITE_APPWRITE_DB_ID,
      import.meta.env.VITE_APPWRITE_PROFILE_ID,
      documentId,
      updates,
    )
    return response
  } catch (error) {
    console.error('Error updating profile:', error)
    throw error
  }
}
