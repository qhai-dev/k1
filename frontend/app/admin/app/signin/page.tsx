import { Separator, Text, Title } from "@kairo/shadcn-semi"
import type { Metadata } from "next"
import { useTranslations, Locale } from "next-intl"
import { getTranslations } from "next-intl/server"

import { LocaleSwitcher } from "@/feature/login/locale-switcher"
import { NormalForm } from "@/feature/login/normal-form"
import { ThemeToggle } from "@/feature/login/theme-toggle"
import { setLocale } from "@/i18n/server"

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations("metadata")
	return {
		title: t("signin"),
	}
}

export default function Page() {
	const t = useTranslations("signin")

	async function onLocaleAction(locale: Locale) {
		"use server"
		await setLocale(locale)
	}

	return (
		<div className="box-border flex min-h-screen w-full justify-center p-6">
			<div className="border-separator flex w-full shrink-0 flex-col rounded-2xl border p-6">
				<div className="flex w-full items-center justify-end gap-1 max-sm:hidden">
					<LocaleSwitcher action={onLocaleAction} />
					<Separator orientation="vertical" />
					<ThemeToggle />
				</div>
				<div className="flex w-full grow flex-col items-center justify-center px-6 pb-12 md:px-27">
					<div className="flex w-full flex-col sm:w-100">
						<div className="my-8 flex flex-col items-start gap-2">
							<Title heading={2}>{t("title")}</Title>
							<Text>{t("welcome")}</Text>
						</div>
						<NormalForm />
					</div>
				</div>
			</div>
		</div>
	)
}
