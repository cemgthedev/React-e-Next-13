import { configureStore, createSlice } from "@reduxjs/toolkit"

/*
* Tipando estados do store
*/
export interface StateProps {
    counter: number
}

/*
* Criando um estado inicial para o store
*/
export const initialState: StateProps = {
    counter: 0
}

/*
* Configurando slice(pedaço) do store
*     . name, initialState e reducers
* perceba que createSlice e configureStore do redux toolkit simplificam muito a configuração de um store
*/
export const sliceCounterStore = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        /*
        * Embora pareça modificar os estados o próprio createSlice se encarrega de manter o princípio
        * da imutabilidade
        */
        setCounter: (state, action) => { state.counter = action.payload }
    }
})

/*
* Podemos exportar as funções que atualizam os estados
*/
export const { setCounter } = sliceCounterStore.actions

/*
* Por fim configuramos o store que será utilizado nos componentes Contador e Input
*/
export const counterReducer = sliceCounterStore.reducer

export const store = configureStore({
    reducer: counterReducer
})

/*
* Tipamos o estado do store para utilizarmos em tipagens como em useSelector
* em hooks/useSelectorCounter
*/
export type RootState = ReturnType<typeof store.getState>