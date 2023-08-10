'use state'
import { setCounter } from "@/redux/store";
import { ComponentProps } from "react";
import { useDispatch } from "react-redux";

export interface InputProps extends ComponentProps<'input'> {
    type?: string
}

/*
* observe que nos parâmetros podemos inicializá-los caso não seja passado nenhum valor
*/
export function Input({ children, type = "text", placeholder, ...props }: InputProps) {
    const dispatcher = useDispatch()

    /*
    * podemos fazer renderizações condicionais não só para mostrar ou não componentes na tela
    * como também para definir comportamente a diferentes parâmetros de um componente.
    * Abaixo a função setCount só será utilizada se o type for igual a "number"
    */
    return <input type={type} placeholder={placeholder} {...props} onChange={
        type === "number" ? (e) => dispatcher(setCounter(Number(e.target.value))) : () => { }
    } />
}