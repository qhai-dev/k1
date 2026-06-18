import type { Metadata } from "next"
import { PropsWithChildren } from "react"

import "./globals.css"

export const metadata: Metadata = {
    title: "WebApp",
}

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
    return (
        <html lang="en" className="h-full w-full overflow-hidden">
            <body className="h-full w-full select-none">{children}</body>
        </html>
    )
}
