import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'

export const addExpenseValidator = toTypedSchema(
  z.object({
    amount: z.number().min(0),
    category: z.string().nonempty(),
  }),
)
