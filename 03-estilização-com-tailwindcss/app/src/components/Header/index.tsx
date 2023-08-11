import { ListIcon } from "@/assets/icons"
import { Heading } from "@/components/Heading"
import Link from "next/link"
/**
 * ao invés de 'next/router' use:
 *     import { useRouter, usePathname, useSearchParams } from 'next/navigation'
*/
import { usePathname } from "next/navigation"
import { ComponentProps, useState } from "react"
import { twMerge } from "tailwind-merge"
import { Label } from "../Label"


export interface HeaderProps extends ComponentProps<'header'> { }
export function Header({ children, className, ...props }: HeaderProps) {
    const [openModal, setOpenModal] = useState<boolean>(false)
    const pathName = usePathname()
    console.log(pathName);

    return <header
        className={twMerge('relative text-slate-50 bg-violet-600 dark:bg-zinc-950 flex flex-col justify-center p-8 duration-300', children ? 'justify-between' : '', className)}
        {...props}
    >
        <div className="flex justify-between items-center">
            <Heading className="text-slate-50">LOGO</Heading>
            <nav
                className={twMerge(children ? '' : 'm-auto')}
            >
                <div
                    className="flex max-md:hidden"
                >
                    <Link href='/'><Label size="lg" className={twMerge("text-slate-50 menu-item", pathName == '/' ? 'menu-item-selected' : '')}>Home</Label></Link>
                    <Link href='/dashboard'><Label size="lg" className={twMerge("text-slate-50 menu-item", pathName == '/dashboard' ? 'menu-item-selected' : '')}>Dashboard</Label></Link>
                    <Link href='/animations'><Label size="lg" className={twMerge("text-slate-50 menu-item", pathName == '/animations' ? 'menu-item-selected' : '')}>Animations</Label></Link>
                    <Link href='/about'><Label size="lg" className={twMerge("text-slate-50 menu-item", pathName == '/about' ? 'menu-item-selected' : '')}>About</Label></Link>
                </div>
            </nav>
            <div
                className="flex items-center justify-center gap-2"
            >
                {children}
                <button onClick={() => setOpenModal(prevState => !prevState)} className="md:hidden"><ListIcon width={32} height={32} /></button>
            </div>
        </div>
        <div
            className={twMerge("items-center justify-center md:hidden", openModal ? 'flex pointer-events-auto animate-down' : 'hidden pointer-events-none')}
        >
            <nav className="w-fit flex flex-col p-4">
                <Link href='/'><Label size="lg" className={twMerge("text-slate-50", pathName == '/' ? 'menu-item-selected' : 'menu-item')}>Home</Label></Link>
                <Link href='/dashboard'><Label size="lg" className={twMerge("text-slate-50", pathName == '/dashboard' ? 'menu-item-selected' : 'menu-item')}>Dashboard</Label></Link>
                <Link href='/animations'><Label size="lg" className={twMerge("text-slate-50", pathName == '/animations' ? 'menu-item-selected' : 'menu-item')}>Animations</Label></Link>
                <Link href='/about'><Label size="lg" className={twMerge("text-slate-50", pathName == '/about' ? 'menu-item-selected' : 'menu-item')}>About</Label></Link>
            </nav>
        </div>
    </header>
}