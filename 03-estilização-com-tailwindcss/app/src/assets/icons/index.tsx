/**
 * Costumo usar os icones de phospor-icons
 *     . npm install --save @phosphor-icons/react
*/
import { List, Moon, Sun } from "@phosphor-icons/react";

/*
* Defino no mesmo arquivo de exportação dos ícones uma tipagem dos mesmos para
* obrigar o uso de propriedades importantes nos ícones como width 
*/
export interface IconProps {
    className?: string,
    width: number,
    height: number
}

export const SunIcon = ({ width, height, className }: IconProps) => <Sun width={width} height={height} className={className} />

export const MoonIcon = ({ width, height, className }: IconProps) => <Moon width={width} height={height} className={className} />

export const ListIcon = ({ width, height, className }: IconProps) => <List width={width} height={height} className={className} />