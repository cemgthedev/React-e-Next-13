'use state'
import { ComponentProps, createContext, useState } from "react";

export interface CounterContextProps {
    counter: number;
    setCounter: Function
}

export const CounterContext = createContext({} as CounterContextProps)

export interface CounterProviderProps extends ComponentProps<'div'> { }

export function CounterProvider({ children }: CounterProviderProps) {
    const [counter, setCounter] = useState<number>(0)

    return <CounterContext.Provider value={{ counter, setCounter }}>
        {children}
    </CounterContext.Provider>
}