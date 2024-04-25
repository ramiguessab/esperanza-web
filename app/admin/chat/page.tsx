import React from "react"
import Status from "@/components/admin/chat/Status"
import Messages, {
    SomeoneTyping,
} from "@/components/admin/chat/messages/Messages"
import SendMessageButton from "@/components/admin/chat/SendMessageButton"

export default function page() {
    return (
        <div className="max-w-2xl mx-auto p-8 flex flex-col gap-2">
            <h1 className="mx-auto text-center text-3xl font-extrabold">
                Messages
            </h1>
            <Status />
            <Messages />
            <SendMessageButton />
        </div>
    )
}
