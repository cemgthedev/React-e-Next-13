'use client'
import { store } from "@/redux/store";
import { ComponentProps } from "react";
import { Provider } from "react-redux";

export interface ContentProps extends ComponentProps<'div'> { }

export function Content({ children }: ContentProps) {
    return <Provider store={store}>
        {children}
    </Provider>
}