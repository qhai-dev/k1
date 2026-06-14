"use client"

import { Button } from "@kairo/shadcn-semi"
import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { Plus, AtSign, ArrowUp } from "lucide-react"
export function ChatComposer() {
    const editor = useEditor({
        extensions: [StarterKit],
        content: "<p>Hello World! 🌎️</p>",
        immediatelyRender: false,
        editorProps: {
            attributes: {
                class: "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none",
            },
        },
    })

    return (
        <div className="w-full max-w-[848px]">
            <div className="px-[24px] pt-[5px] pb-[24px]">
                <div className="bg-card border-input relative z-1 w-full rounded-xl border p-3 shadow-[0_4px_8px_0_rgba(0,0,0,0.03)]">
                    <EditorContent editor={editor} />
                    <div className="flex items-center justify-between py-3">
                        <div className="flex shrink-0 gap-1.5">
                            <Button variant="ghost" size="icon">
                                <Plus></Plus>
                            </Button>
                            <Button variant="ghost" size="icon">
                                <AtSign />
                            </Button>
                        </div>
                        <div>
                            <Button variant="ghost" size="icon">
                                <ArrowUp />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
