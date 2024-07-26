"use client";   
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { CgAdd, CgTrash } from "react-icons/cg";
import { CreateContactsSchema, createContactsSchema } from "./validations/create.schema";

export function SecondFormularyPage() {
    const { register, control, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(createContactsSchema),
        defaultValues: {
            contacts: [{ name: "", number: "" }],
        }
    });

    const {fields, append, remove} = useFieldArray({
        name: "contacts",
        control
    })

    const onSubmit = (data: CreateContactsSchema) => {
        console.log(data);
    }
    
    return (
        <div className="bg-yellow-200 rounded-md p-4 flex flex-col gap-4 w-[512px] max-sm:w-full h-fit">
            <h1 className="text-zinc-900 text-2xl font-semibold">Cadastro de contatos</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
                <div>
                    <button type="button" onClick={() => append({ name: "", number: "" })} className="flex justify-center items-center gap-2 rounded-md px-2 py-1 border-2 border-emerald-500 text-emerald-500 font-semibold">
                        <CgAdd />
                        Adicionar contato
                    </button>
                </div>
                {
                    fields.map((field, index) => (
                        <div key={field.id} className="flex flex-col gap-1 border-2 border-zinc-800 p-2 rounded-md">
                            <div className="flex justify-end">
                                <button onClick={() => remove(index)} className="flex justify-center items-center gap-2 rounded-md px-2 py-1 border-2 border-red-500 text-red-500 font-semibold">
                                    <CgTrash />
                                    Remover contato
                                </button>
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="contact-name" className="text-zinc-900 font-semibold">Nome</label>
                                <input
                                    id="contact-name"
                                    type="text"
                                    placeholder="Digite o nome do contato"
                                    className="bg-slate-50 border-2 border-zinc-800 px-3 py-2 rounded-md focus:outline-none hover:opacity-90"
                                    required
                                    {...register(`contacts.${index}.name`)}	
                                />
                                {errors.contacts && <p className="text-red-800 text-sm">{errors.contacts?.[index]?.name?.message}</p>}
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="contact-number" className="text-zinc-900 font-semibold">Número</label>
                                <input
                                    id="contact-number"
                                    type="number"
                                    placeholder="Digite o número do contato"
                                    className="bg-slate-50 border-2 border-zinc-800 px-3 py-2 rounded-md focus:outline-none hover:opacity-90"
                                    required
                                    {...register(`contacts.${index}.number`)}	
                                />
                                {errors.contacts?.[index]?.number && <p className="text-red-800 text-sm">{errors.contacts?.[index]?.number?.message}</p>}
                            </div>
                        </div>
                    ))
                }
                <div className="flex gap-2">
                    <button type="reset" className="bg-red-500 text-slate-50 font-semibold px-3 py-2 rounded-md hover:opacity-80 duration-150">Cancelar</button>
                    <button type="submit" className="bg-emerald-500 text-slate-50 font-semibold px-3 py-2 rounded-md hover:opacity-80 duration-150">Cadastrar</button>
                </div>
            </form>
        </div>
    );
}