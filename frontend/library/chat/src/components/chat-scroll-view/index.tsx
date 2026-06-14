"use client"
import { ChatMessage } from "../chat-message"

export function ChatScrollView() {
    return (
        <div className="min-h-0 w-full flex-1">
            scroll view
            <ChatMessage />
        </div>
    )
}
