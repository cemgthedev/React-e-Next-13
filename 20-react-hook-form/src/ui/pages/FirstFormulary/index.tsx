"use client";   
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { createUserSchema } from "@/ui/pages/FirstFormulary/validations/create.schema";

export function FirstFormulary() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: zodResolver(createUserSchema),
    });

    const onSubmit = (data: any) => {
        console.log(data);
    }
    
    return (
        <div className="bg-yellow-200 rounded-md p-4 flex flex-col gap-4 w-[512px] max-sm:w-full">
            <h1 className="text-zinc-900 text-2xl font-semibold">Cadastro de usuário</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                    <label htmlFor="fullName" className="text-zinc-900 font-semibold">Nome completo</label>
                    <input
                        id="fullName"
                        type="text"
                        placeholder="Digite seu nome completo"
                        className="bg-slate-50 border-2 border-zinc-800 px-3 py-2 rounded-md focus:outline-none hover:opacity-90"
                        required
                        {...register("fullName")}
                    />
                    {errors.fullName && <p className="text-red-800 text-sm">{errors.fullName.message?.toString()}</p>}
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="text-zinc-900 font-semibold">Email</label>
                    <input
                        id="email"
                        type="text"
                        placeholder="Digite seu email"
                        className="bg-slate-50 border-2 border-zinc-800 px-3 py-2 rounded-md focus:outline-none hover:opacity-90"
                        required
                        {...register("email")}
                    />
                    {errors.email && <p className="text-red-800 text-sm">{errors.email.message?.toString()}</p>}
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="password" className="text-zinc-900 font-semibold">Senha</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Digite sua senha"
                        className="bg-slate-50 border-2 border-zinc-800 px-3 py-2 rounded-md focus:outline-none hover:opacity-90"
                        required
                        {...register("password")}
                    />
                    {errors.password && <p className="text-red-800 text-sm">{errors.password.message?.toString()}</p>}
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="confim-password" className="text-zinc-900 font-semibold">Confirmar senha</label>
                    <input
                        id="confirm-password"
                        type="password"
                        placeholder="Confirme sua senha"
                        className="bg-slate-50 border-2 border-zinc-800 px-3 py-2 rounded-md focus:outline-none hover:opacity-90"
                        required
                        {...register("confirmPassword")}
                    />
                    {errors.confirmPassword && <p className="text-red-800 text-sm">{errors.confirmPassword.message?.toString()}</p>}
                </div>
                <div className="flex gap-2">
                    <button type="reset" className="bg-red-500 text-slate-50 font-semibold px-3 py-2 rounded-md hover:opacity-80 duration-150">Cancelar</button>
                    <button type="submit" className="bg-emerald-500 text-slate-50 font-semibold px-3 py-2 rounded-md hover:opacity-80 duration-150">Cadastrar</button>
                </div>
            </form>
        </div>
    );
}