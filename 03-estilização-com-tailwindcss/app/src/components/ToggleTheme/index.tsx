import { MoonIcon, SunIcon } from "@/assets/icons"
import { Dispatch } from "react"

export interface ToggleThemeProps {
    themeDark: boolean,
    toggleThemeDark: Dispatch<boolean | ((value: boolean) => boolean)>
    /*
    * Pela forma de tipagem acima podemos chamar toggleThemeDark passando o parâmetro de duas formas
    * conhecidas:
    *     . toggleThemeDark(!themeDark)
    *     . toggleThemeDark(prevState => !prevState)
    * A segunda forma é mais utilizada quando apenas a função é passada como parâmetro para o componente
    */
}

export function ToggleTheme({ themeDark, toggleThemeDark }: ToggleThemeProps) {
    return <button
        onClick={() => toggleThemeDark(prevState => !prevState)}
    >
        {
            themeDark ? <MoonIcon width={32} height={32} className="fill-cyan-300" /> : <SunIcon width={32} height={32} className="fill-yellow-300" />
        }
    </button>
}