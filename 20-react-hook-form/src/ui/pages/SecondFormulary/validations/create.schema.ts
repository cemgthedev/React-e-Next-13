import { z } from "zod"

const messages = {
    required_name: "O nome é obrigatório",
    invalid_name: "O nome deve ter pelo menos 3 letras",
    required_number: "O telefone é obrigatório",
    invalid_number: "O telefone deve ter pelo menos 8 dígitos",
}

export const createContactsSchema = z.object({
    contacts: z.array(
        z.object({
            name: z
                .string({ required_error: messages.required_name})
                .min(3, messages.invalid_name),
            number: z
                .string({ required_error: messages.required_number})
                .min(8, messages.invalid_number),
        })
    )
})

export type CreateContactsSchema = z.infer<typeof createContactsSchema>