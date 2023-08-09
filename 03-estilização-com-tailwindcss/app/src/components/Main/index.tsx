import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export interface MainProps extends ComponentProps<'main'> { }

export function Main({ children, className, ...props }: MainProps) {
    return <main
        className={twMerge('p-8', className)}
        {...props}
    >
        {children}
    </main>
}