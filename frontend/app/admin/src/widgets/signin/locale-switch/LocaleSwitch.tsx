"use client"

import {
    Button,
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    Globe,
} from "@kairo/shadcn-semi"

type Props = {
    action: () => Promise<void>
}

const locales = ["en", "es", "fr", "de", "it", "pt", "ru", "zh", "ja", "ko"]

export function LocaleSwitch({ action }: Props) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                nativeButton={false}
                render={
                    <div className="flex w-56 items-center justify-end">
                        <Button variant="ghost">
                            <Globe size={20} />
                            {/*{languages[locale]?.name}*/}
                        </Button>
                    </div>
                }
            ></DropdownMenuTrigger>

            <DropdownMenuContent
                sideOffset={8}
                align="end"
                className="border-highlight-2 bg-panel-bg box-border max-h-96 w-50 overflow-y-auto rounded-xl border-[0.5px] p-1 shadow-lg"
            >
                {locales.map((item, index) => (
                    <DropdownMenuItem
                        className="text-secondary hover:bg-state-hove rounded-lg px-3 py-2 text-sm"
                        key={index}
                        onClick={() => action()}
                    >
                        {/*{languages[item]?.name}*/}
                        {item}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

// "use client"

// import { useLocale, Locale } from "next-intl"

// import { languages, locales } from "@/i18n/language"

// export function LocaleSwitcher({ action }: Props) {
//     const locale = useLocale()
//     // className="text-text-primary border-highlight-1 hover:bg-hover-0 flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-[13px] font-medium"
//     return (
//         <DropdownMenu>
//             <DropdownMenuTrigger
//                 nativeButton={false}
//                 render={
//                     <div className="flex w-56 items-center justify-end">
//                         <Button variant="ghost">
//                             <Globe size={20} />
//                             {languages[locale]?.name}
//                         </Button>
//                     </div>
//                 }
//             ></DropdownMenuTrigger>

//             <DropdownMenuContent
//                 sideOffset={8}
//                 align="end"
//                 className="border-highlight-2 bg-panel-bg box-border max-h-96 w-50 overflow-y-auto rounded-xl border-[0.5px] p-1 shadow-lg"
//             >
//                 {locales.map((item, index) => (
//                     <DropdownMenuItem
//                         className="text-secondary hover:bg-state-hove rounded-lg px-3 py-2 text-sm"
//                         key={index}
//                         onClick={() => action(item)}
//                     >
//                         {languages[item]?.name}
//                     </DropdownMenuItem>
//                 ))}
//             </DropdownMenuContent>
//         </DropdownMenu>
//     )
// }
