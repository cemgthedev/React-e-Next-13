import { ComponentProps } from "react";
import { VariantProps, tv } from "tailwind-variants";

export const LabelVariants = tv({
    base: 'text-zinc-950 dark:text-slate-50 font-semibold',
    variants: {
        size: {
            lg: 'text-lg',
            md: 'text-md',
            sm: 'text-sm',
            xs: 'text-xs'
        }
    }
})

export interface LabelProps extends ComponentProps<'p'>, VariantProps<typeof LabelVariants> { }

export function Label({ children, className, size = 'md', ...props }: LabelProps) {
    return <p
        className={LabelVariants({ className, size })}
        {...props}
    >
        {children}
    </p>
}