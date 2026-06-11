"use client"

import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarInset,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarProvider,
	SidebarRail,
	SidebarTrigger,
} from "@kairo/shadcn-semi"
import { PropsWithChildren } from "react"

export default function Layout({ children }: PropsWithChildren) {
	return (
		<SidebarProvider className="bg-background p-2">
			<Sidebar collapsible="icon">
				<SidebarHeader className="flex flex-col-reverse items-center justify-between">
					<div>logo</div>
					<SidebarTrigger></SidebarTrigger>
				</SidebarHeader>
				<SidebarContent className="w-full p-2">
					<SidebarGroup>
						<SidebarGroupLabel className="text-white">
							新建任务
						</SidebarGroupLabel>
						{/*<SidebarGroupAction>groupAction</SidebarGroupAction>*/}
						<SidebarGroupContent>测试内容</SidebarGroupContent>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton>button1</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton>button2</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroup>
				</SidebarContent>
				<SidebarFooter>siderbar footer</SidebarFooter>
				<SidebarRail className="bg-red-500"></SidebarRail>
			</Sidebar>
			<SidebarInset className="border-separator overflow-hidden rounded-2xl border">
				{children}
			</SidebarInset>
		</SidebarProvider>
	)
}
