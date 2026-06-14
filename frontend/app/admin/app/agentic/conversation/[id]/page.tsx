import { Conversation } from "@/components/client/session"

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params

    return (
        <div className="h-full w-full overflow-hidden">
            <Conversation id={id} />
        </div>
    )
}
