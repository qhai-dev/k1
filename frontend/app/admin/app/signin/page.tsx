import type { Metadata } from "next";

import { setLocale } from "@/i18n/server";
import { Separator, Text, Title } from "@kairo/shadcn-semi";
import { useTranslations, Locale } from "next-intl";
import { getTranslations } from "next-intl/server";

import { LocaleSwitcher } from "@/feature/login/locale-switcher";
import { NormalForm } from "@/feature/login/normal-form";
import { ThemeToggle } from "@/feature/login/theme-toggle";

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations("metadata");
	return {
		title: t("signin"),
	};
}

export default function Page() {
	const t = useTranslations("signin");

	async function onLocaleAction(locale: Locale) {
		"use server";
		await setLocale(locale);
	}

	// async function onFormSubmitAction() {
	// 	"use server";
	// }

	return (
		<div className="bg-background box-border flex min-h-screen w-full justify-center p-6">
			<div className="border-separator bg-foreground flex w-full shrink-0 flex-col rounded-2xl border p-6">
				<div className="flex w-full items-center justify-end max-sm:hidden gap-1">
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
	);
}
