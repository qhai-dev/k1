import { PropsWithChildren } from "react"

import { TanstackQueryProvider, NextIntlProvider, NextThemesProvider } from "../../provider"

import "../../styles/index.css"

export function RootLayout({ children }: PropsWithChildren) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="h-full overflow-hidden select-auto">
                <NextIntlProvider>
                    <NextThemesProvider>
                        <TanstackQueryProvider>{children}</TanstackQueryProvider>
                    </NextThemesProvider>
                </NextIntlProvider>
            </body>
        </html>
    )
}
