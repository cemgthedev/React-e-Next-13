import { ComponentProps } from "react";
import { VariantProps, tv } from "tailwind-variants";

export const TextVariants = tv({
    base: 'text-zinc-950 dark:text-slate-50 font-normal',
    variants: {
        size: {
            lg: 'text-lg',
            md: 'text-md',
            sm: 'text-sm',
            xs: 'text-xs'
        }
    }
})

export interface TextProps extends ComponentProps<'p'>, VariantProps<typeof TextVariants> { }

export function Text({ children, className, size = 'md', ...props }: TextProps) {
    return <p
        className={TextVariants({ className, size })}
        {...props}
    >
        {children}
    </p>
}