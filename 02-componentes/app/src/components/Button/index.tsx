import { ComponentProps } from "react";

/**
 * Card extende as propriedades de uma button
*/
export interface ButtonProps extends ComponentProps<'button'> { }

export function Button({ children, className, ...props }: ButtonProps) {
    return <button
        className={className}
        {...props}
    >
        {children}
    </button>
}