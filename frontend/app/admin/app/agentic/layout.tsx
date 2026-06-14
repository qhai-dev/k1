"use client"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarInset,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
    SidebarTrigger,
} from "@kairo/shadcn-semi"
import { LibraryBig, Search, SquarePen } from "lucide-react"
import { PropsWithChildren } from "react"

export default function Layout({ children }: PropsWithChildren) {
    return (
        <SidebarProvider className="bg-muted p-2">
            <Sidebar collapsible="icon" className="bg-muted" variant="sidebar">
                <SidebarHeader className="touch:px-1.5 flex flex-row items-center justify-between px-2">
                    <div>logo</div>
                    <SidebarTrigger></SidebarTrigger>
                </SidebarHeader>
                <SidebarContent className="w-full p-2">
                    <SidebarGroup>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton>
                                    <SquarePen />
                                    新聊天
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton>
                                    <Search />
                                    搜索聊天
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton>
                                    <LibraryBig />
                                    技能
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroup>
                </SidebarContent>
                <SidebarFooter>siderbar footer</SidebarFooter>
            </Sidebar>
            <SidebarInset className="bg-background overflow-hidden rounded-2xl">
                {children}
            </SidebarInset>
        </SidebarProvider>
    )
}
