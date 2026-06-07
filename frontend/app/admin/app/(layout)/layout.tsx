"use client"
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarInset,
	SidebarProvider,
} from "@kairo/shadcn-semi"
import { Bot, SquareTerminal } from "lucide-react"
import { PropsWithChildren } from "react"

import { NavMain } from "@/components/biz/nav-main"

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
}

export default function Layout({ children }: PropsWithChildren) {
	return (
		<SidebarProvider className="bg-background">
			<Sidebar variant="inset" className="bg-background">
				<SidebarHeader>siderbar header</SidebarHeader>
				<SidebarContent>
					<NavMain items={data.navMain} />
				</SidebarContent>
				<SidebarFooter>siderbar footer</SidebarFooter>
			</Sidebar>
			<SidebarInset>
				<div className="bg-foreground min-w-0 flex-1">{children}</div>
			</SidebarInset>
		</SidebarProvider>
	)
}
