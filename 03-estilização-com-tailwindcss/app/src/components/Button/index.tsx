import { ComponentProps } from "react";
import { VariantProps, tv } from "tailwind-variants";

export const ButtonVariants = tv({
    base: 'p-2 rounded-full',
    variants: {
        background: {
            primary: 'bg-cyan-500 text-slate-50 hover:bg-cyan-400',
            secundary: 'bg-transparent text-cyan-500 border-2 border-cyan-500 hover:bg-cyan-500 hover:text-slate-50'
        },
        animation: {
            click: 'focus:animate-ping',
            jump: 'focus:animate-bolce',
            hover: 'focus:animate-pulse',
        }
    },
    defaultVariants: {
        background: 'primary',
    }
})

export interface ButtonProps extends ComponentProps<'button'>, VariantProps<typeof ButtonVariants> { }

export function Button({ children, className, background = 'primary', animation, ...props }: ButtonProps) {
    return <button
        className={ButtonVariants({ background, animation, className })}
        {...props}
    >
        {children}
    </button>
}