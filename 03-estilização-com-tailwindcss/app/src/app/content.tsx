'use client'
import { Header } from "@/components/Header";
import { ToggleTheme } from "@/components/ToggleTheme";
import { ComponentProps, useState } from "react";
import { twMerge } from "tailwind-merge";

export interface ContentProps extends ComponentProps<'div'> { }

/*
* Neste componente gerencio todos os possíveis contextos, redux e/ou qualquer estado dinâmico mais específico.
* Neste tópico focaremos apenas no estado para fazer o toggle theme dark
*/
export function Content({ children, ...props }: ContentProps) {
    const [themeDark, setThemeDark] = useState<boolean>(false)

    /**
     * Observe que utilizamos twMerge para concatenar as strings, outra alternativa seria usar clsx.
     * Contudo, nosso componente não ficaria extensível, pois clsx apenas concatena podendo acarretar
     * em duplicidade de classes como por exemplo termos p-2 como padrão, mas em um possível className
     * do parâmetro ser passado p-8. Logo, twMerge serve para solucionar o problema não permitindo duplicidades
    */
    return <div
        className={twMerge('flex flex-col', themeDark ? 'dark' : '')}
        {...props}
    >
        <Header><ToggleTheme themeDark={themeDark} toggleThemeDark={setThemeDark} /></Header>
        {children}
    </div>
}