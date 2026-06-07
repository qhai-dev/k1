import { Locale } from "@/i18n/language"

import messages from "./locales/zh.json"

declare module "next-intl" {
	interface AppConfig {
		Locale: Locale
		Messages: typeof messages
	}
}

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			LOCALE_COOKIE_KEY: string
		}
	}
}
