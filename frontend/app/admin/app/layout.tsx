import type { Metadata } from "next"
import { getLocale, getTranslations } from "next-intl/server"
import { PropsWithChildren } from "react"
// import { languages } from "@/i18n/language";

import AppInitializer from "@/components/app-initializer"
import NextIntlProvider from "@/contexts/next-intl-context"

import "./globals.css"

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations("app")

	return {
		title: {
			template: `%s-${t("title")}`,
			default: t("title"),
		},
	}
}

export default async function Layout({ children }: PropsWithChildren) {
	const lang = await getLocale()
	const dir = "ltr"

	return (
		<html lang={lang} dir={dir} suppressHydrationWarning>
			<body className="h-full overflow-hidden select-auto">
				<NextIntlProvider>
					<AppInitializer dir={dir}>{children}</AppInitializer>
				</NextIntlProvider>
			</body>
		</html>
	)
}
