import type { Metadata, ResolvingMetadata } from "next";

import { getTranslations } from "next-intl/server";

export async function generateMetadata(
	_parent: ResolvingMetadata,
): Promise<Metadata> {
	const t = await getTranslations("metadata");
	return {
		title: t("dashboard"),
	};
}

export default function Page() {
	return <div>dashboard</div>;
}
