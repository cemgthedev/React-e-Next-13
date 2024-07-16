import { z } from "zod"

const messages = {
    required_full_name: 'Nome obrigatório',
    invalid_full_name: 'Nome inválido, deve conter pelo menos 6 caracteres',
    required_email: 'Email obrigatório',
    invalid_email: 'Email inválido, deve conter um formato de email',
    required_password: 'Senha obrigatório',
    invalid_password: 'Senha inválida, deve conter pelo entre 6 e 12 caracteres',
}

export const createUserSchema = z.object({
    fullName: z
        .string()
        .min(6, { message: messages.invalid_full_name }),
    email: z
        .string()
        .email({ message: messages.invalid_email }),
    password: z
        .string()
        .min(6, { message: messages.invalid_password })
        .max(12, { message: messages.invalid_password }),
    confirmPassword: z
        .string()
}).refine(data => data.password === data.confirmPassword, {
    message: 'As senhas precisam ser iguais',
    path: ['confirmPassword']
})

export type CreateUserFormData = z.infer<typeof createUserSchema>