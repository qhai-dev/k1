"use client";
import { loadComponents } from "next/dist/server/load-components";
import dynamic from "next/dynamic";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";

const Member = dynamic(() => import("@/components/biz/Member"), {
	ssr: false,
});

const Department = dynamic(() => import("@/components/biz/Department"), {
	ssr: false,
});

const ResignedEmployee = dynamic(
	() => import("@/components/biz/ResignedEmployee"),
	{
		ssr: false,
	},
);

const tabs = [
	{
		name: "成员",
		value: "member",
		component: <Member />,
	},
	{
		name: "部门",
		value: "department",
		component: <Department />,
	},
	{
		name: "已离职成员",
		value: "resignedEmployee",
		component: <ResignedEmployee />,
	},
];

export default function Page() {
	const router = useRouter();
	const params = useSearchParams();
	const pathname = usePathname();

	const handleTabChange = (e: string) => {
		router.replace(`${pathname}?activeTab=${e}`);
	};

	return (
		<Tabs
			className="flex h-full w-full flex-col"
			value={params.get("activeTab") || "member"}
			onValueChange={handleTabChange}
		>
			<TabsList className="px-5">
				{tabs.map((item, index) => {
					return (
						<TabsTrigger key={index} value={item.value}>
							{item.name}
						</TabsTrigger>
					);
				})}
			</TabsList>
			{tabs.map((item, index) => {
				return (
					<TabsContent
						key={index}
						value={item.value}
						className="px-5 py-5"
					>
						{item.component}
					</TabsContent>
				);
			})}
		</Tabs>
	);
}
