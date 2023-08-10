import { RootState } from "@/redux/store";
import { TypedUseSelectorHook, useSelector } from "react-redux";

/*
* O react-redux oferece uma forma de tipar o estado de um store para uma função useSelector
*/
export const useSelectorCounter: TypedUseSelectorHook<RootState> = useSelector