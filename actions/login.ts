/* eslint-disable @typescript-eslint/require-await */
'use server'

import * as z from 'zod'

import { LoginSchema } from '@/schemas'

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values)
  if (!validatedFields.success) {
    return { error: '無効なフィールドです' }
  }

  return { success: 'メールを送信しました！' }
}
