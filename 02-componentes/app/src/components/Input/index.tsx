import { ComponentProps } from "react";

export interface InputProps extends ComponentProps<'input'> {
    type?: string,
    setCount: (value: number) => void
}

/*
* observe que nos parâmetros podemos inicializá-los caso não seja passado nenhum valor
*/
export function Input({ children, type = "text", placeholder, setCount, ...props }: InputProps) {
    /*
    * podemos fazer renderizações condicionais não só para mostrar ou não componentes na tela
    * como também para definir comportamente a diferentes parâmetros de um componente.
    * Abaixo a função setCount só será utilizada se o type for igual a "number"
    */
    return <input type={type} placeholder={placeholder} {...props} onChange={
        type === "number" ? (e) => setCount(Number(e.target.value)) : () => { }
    } />
}