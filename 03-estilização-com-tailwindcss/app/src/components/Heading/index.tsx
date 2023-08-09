import { ComponentProps } from "react";
import { VariantProps, tv } from "tailwind-variants";

export const HeadingVariants = tv({
    base: 'text-zinc-950 dark:text-slate-50 font-bold',
    variants: {
        size: {
            lg: 'text-3xl',
            md: 'text-2xl',
            sm: 'text-xl',
            xs: 'text-lg'
        }
    }
})

export interface HeadingProps extends ComponentProps<'p'>, VariantProps<typeof HeadingVariants> { }

export function Heading({ children, className, size = 'lg', ...props }: HeadingProps) {
    return <p
        className={HeadingVariants({ className, size })}
        {...props}
    >
        {children}
    </p>
}