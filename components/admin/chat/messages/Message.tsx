import React from "react"

interface MessageProps {
    message: string
}

export default function Message({ message }: MessageProps) {
    return (
        <div className="bg-slate-50 p-2 rounded-md text-wrap inline-block max-w-full break-words">
            <p>{message}</p>
        </div>
    )
}
