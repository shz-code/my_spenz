import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'

export const addExpenseValidator = toTypedSchema(
  z.object({
    amount: z.number().min(0),
    category: z.string().nonempty(),
  }),
)

export const registerValidator = toTypedSchema(
  z
    .object({
      email: z.string().email(),
      name: z.string().nonempty(),
      password: z.string().min(8),
      confirmPassword: z.string().min(8),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: 'Passwords do not match',
      path: ['confirmPassword'], // This will attach the error to the confirmPassword field
    }),
)

export const loginValidator = toTypedSchema(
  z.object({
    email: z.string().email(),
    password: z.string().min(8),
  }),
)

export const profileUpdateValidator = toTypedSchema(
  z.object({
    email: z.string().email(),
    name: z.string(),
    currency: z.enum(['USD', 'BDT']),
    emailNotification: z.boolean(),
  }),
)
