import { Metadata, ResolvingMetadata } from "next";
import { getTranslations } from "next-intl/server";

import { Sidebar } from "@/feature/role/components/sidebar";
import { SidebarInset } from "@/feature/role/components/sidebar-inset";

export async function generateMetadata(
	parent: ResolvingMetadata,
): Promise<Metadata> {
	// TODO Locale
	// const t = await getTranslations('metadata');
	return {
		title: "角色管理",
	};
}

export default function Page() {
	return (
		<div className="flex h-full w-full">
			<Sidebar />
			<SidebarInset />
		</div>
	);
}
