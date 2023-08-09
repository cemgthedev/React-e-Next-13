'use client'
import { CounterProvider } from "@/contexts/CounterContext";
import { ComponentProps } from "react";

export interface ContentProps extends ComponentProps<'div'> { }

export function Content({ children }: ContentProps) {
    return <CounterProvider>
        {children}
    </CounterProvider>
}