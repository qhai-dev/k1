"use client";

import { Bot, SquareTerminal } from "lucide-react";

import { NavMain } from "@/components/biz/nav-main";

import { Sidebar, SidebarContent, SidebarHeader, SidebarInset, SidebarProvider } from "@kairo/design-component";
import { PropsWithChildren } from "react";
const data = {
	user: {
		name: "shadcn",
		email: "m@example.com",
		avatar: "/avatars/shadcn.jpg",
	},
	navMain: [
		{
			title: "组织架构",
			url: "#",
			icon: SquareTerminal,
			isActive: true,
			items: [
				{
					title: "成员与部门",
					url: "/contacts/departmentanduser",
				},
				{
					title: "角色管理",
					url: "/contacts/role",
				},
				{
					title: "单位管理",
					url: "/contacts/unit",
				},
				{
					title: "用户组管理",
					url: "/contacts/group",
				},
			],
		},
		{
			title: "企业设置",
			url: "#",
			icon: Bot,
			items: [
				{
					title: "企业信息",
					url: "/enterprise/info",
				},
				{
					title: "管理员权限",
					url: "/enterprise/auth",
				},
				{
					title: "组织架构数据同步",
					url: "/enterprise/sync",
				},
			],
		},
	],
};

export default function Layout({ children }: PropsWithChildren) {
	return (
		<SidebarProvider>
			<Sidebar variant="inset">
				<SidebarHeader>header</SidebarHeader>
				<SidebarContent>
					<NavMain items={data.navMain} />
				</SidebarContent>
			</Sidebar>

			<SidebarInset>
				<div className=" flex-1 min-w-0 bg-background">{children}</div>
			</SidebarInset>
		</SidebarProvider>
	);
}
