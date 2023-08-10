'use client'
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { useSelectorCounter } from "@/hooks/useSelectorCounter";
import { setCounter } from "@/redux/store";
import { ReactNode } from "react";
import { useDispatch } from "react-redux";
import { Input } from "../Input";

export interface ContadorProps {
    children: ReactNode,
    className?: string
}

export function Contador({ children, className }: ContadorProps) {
    /*
    * Exportadas as funções; dentro do componente só precisamos exportar os estados e a função dispatcher(disparador)
    * que irá informar ao store para executar a função passada como parâmetro
    */
    const counter = useSelectorCounter(state => state.counter)
    const dispatcher = useDispatch()

    function add() {
        dispatcher(setCounter(counter + 1))
    }

    function sub() {
        dispatcher(setCounter(counter - 1))
    }

    return <Card
        className={className}
    >
        <h1>{children}</h1>
        <div>
            <h1>O número {counter} é &nbsp;
                {
                    counter % 2 === 0 ? <span>par</span> : <span>ímpar</span>
                }</h1>
        </div>
        <div>
            <Button onClick={() => add()}>Incrementar (+)</Button>
            <br />
            <Button onClick={() => sub()}>Decrementar (-)</Button>
        </div>
        <div>
            <h1>Atualizar contador</h1>
            <Input type="number" />
        </div>
    </Card>
}