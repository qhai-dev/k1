import { DirectionProvider, ToastProvider, TooltipProvider } from "@kairo/design-component";
import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { PropsWithChildren } from "react";
// import { languages } from "@/i18n/language";

import NextIntlProvider from "@/contexts/next-intl-context";
import NextThemeProvider from "@/contexts/next-theme-context";
import TanstackQueryProvider from "@/contexts/tanstack-query-context";

import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations("app");
	return {
		title: {
			template: `%s-${t("title")}`,
			default: t("title"),
		},
	};
}

type Direction = "ltr" | "rtl";

export default async function Layout({ children }: PropsWithChildren) {
	const lang = await getLocale();
	// const { dir } = languages[locale];
	const dir: Direction = "ltr";

	return (
		<html lang={lang} dir={dir} suppressHydrationWarning>
			<body className="h-full select-auto overflow-hidden">
				<NextIntlProvider>
					<NextThemeProvider>
						<TanstackQueryProvider>
							<DirectionProvider dir={dir}>
								<ToastProvider>
									<TooltipProvider>{children}</TooltipProvider>
								</ToastProvider>
							</DirectionProvider>
						</TanstackQueryProvider>
					</NextThemeProvider>
				</NextIntlProvider>
			</body>
		</html>
	);
}
