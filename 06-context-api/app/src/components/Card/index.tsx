import { ComponentProps } from "react";

/**
 * Card extende as propriedades de uma div
*/
export interface CardProps extends ComponentProps<'div'> { }

export function Card({ children, className, ...props }: CardProps) {
    return <div
        className={className}
        {...props}
    >
        {children}
    </div>
}