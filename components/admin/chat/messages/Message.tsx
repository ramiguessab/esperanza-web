import React from "react"

interface MessageProps {
    message: string
}

export default function Message({ message }: MessageProps) {
    return <div>{message}</div>
}
