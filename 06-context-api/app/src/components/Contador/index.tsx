'use client'
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { CounterContext } from "@/contexts/CounterContext";
import { ReactNode, useContext } from "react";
import { Input } from "../Input";

export interface ContadorProps {
    children: ReactNode,
    className?: string // por meio de ?: no typescript consideramos aquele parâmetro como opcional
}

export function Contador({ children, className }: ContadorProps) {
    const { counter, setCounter } = useContext(CounterContext);

    function add() {
        setCounter((prevState: number) => prevState + 1)
    }

    function sub() {
        setCounter((prevState: number) => prevState - 1)
    }
    /*
    * As chamadas diretas ocorrem quando simplesmente passamos parâmetros de componentes pai para
    * componentes filhos. Ex: tudo que está dentro do componente Card foi passado como children.
    */
    return <Card
        className={className}
    >
        <h1>{children}</h1>
        <div>
            <h1>O número {counter} é &nbsp;
                {/*
            * observe que para executar javascript dentro de tags é necessário utilizar {}
            * logo abaixo segue um exemplo de renderização condicional onde temos um contador
            * que retorna um span com par oi ímpar a depender do valor
            */}
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
            {/*
            * observe abaixo que setCount foi passada como parâmetro.
            * Isto consiste em um passo para a chamada indireta, pois dentro do componente
            * Input faremos a chamada de setCount alterando o estado count do componente pai
            */}
            <Input type="number" />
        </div>
    </Card>
}