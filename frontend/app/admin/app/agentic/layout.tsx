"use client"

import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarInset,
	SidebarProvider,
} from "@kairo/shadcn-semi"
import { PropsWithChildren } from "react"

export default function Layout({ children }: PropsWithChildren) {
	return (
		<SidebarProvider className="bg-background p-2">
			<Sidebar>
				<SidebarHeader>siderbar header</SidebarHeader>
				<SidebarContent className="w-full p-2">
					<div>新建任务</div>
					<div>搜索</div>
					<div>技能</div>
				</SidebarContent>
				<SidebarFooter>siderbar footer</SidebarFooter>
			</Sidebar>
			<SidebarInset className="bg-foreground border-separator overflow-hidden rounded-2xl border">
				{children}
			</SidebarInset>
		</SidebarProvider>
	)
}
