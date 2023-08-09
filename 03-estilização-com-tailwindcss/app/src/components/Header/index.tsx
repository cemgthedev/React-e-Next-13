import { ListIcon } from "@/assets/icons"
import { Heading } from "@/components/Heading"
import clsx from "clsx"
import Link from "next/link"
import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"
import { Label } from "../Label"


export interface HeaderProps extends ComponentProps<'header'> { }
export function Header({ children, className, ...props }: HeaderProps) {
    return <header
        className={twMerge('text-slate-50 bg-violet-600 dark:bg-zinc-950 flex items-center p-8 duration-300', children ? 'justify-between' : '', className)}
        {...props}
    >
        <Heading className="text-slate-50">LOGO</Heading>
        <nav
            className={clsx(children ? '' : 'm-auto')}
        >
            <ul
                className="flex max-md:hidden"
            >
                <Label size="lg" className="text-slate-50 menu-item"><Link href='/'>Home</Link></Label>
                <Label size="lg" className="text-slate-50 menu-item"><Link href='/dashboard'>Dashboard</Link></Label>
                <Label size="lg" className="text-slate-50 menu-item"><Link href='/animations'>Animations</Link></Label>
                <Label size="lg" className="text-slate-50 menu-item"><Link href='/about'>About</Link></Label>
            </ul>
        </nav>
        <div
            className="relative flex items-center justify-center gap-2"
        >
            {children}
            <button data-toggle="toggle" data-target="#model" className="md:hidden"><ListIcon width={32} height={32} /></button>
            <ul
                id="model"
                className="ring-2 ring-red-500 toggle flex-col absolute top-0 translate-y-1/2"
            >
                <Label size="lg" className="text-slate-50 menu-item"><Link href='/'>Home</Link></Label>
                <Label size="lg" className="text-slate-50 menu-item"><Link href='/dashboard'>Dashboard</Link></Label>
                <Label size="lg" className="text-slate-50 menu-item"><Link href='/animations'>Animations</Link></Label>
                <Label size="lg" className="text-slate-50 menu-item"><Link href='/about'>About</Link></Label>
            </ul>
        </div>
    </header>
}