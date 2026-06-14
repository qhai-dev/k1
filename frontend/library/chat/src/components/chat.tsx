"use client"
import { ChatComposer } from "./chat-composer"
import { ChatScrollView } from "./chat-scroll-view"

export function Chat() {
    return (
        <div className="flex h-full w-full flex-col">
            <ChatScrollView></ChatScrollView>
            <ChatComposer></ChatComposer>
        </div>
    )
}
