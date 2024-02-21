import React from "react"

interface PProps {
    text: string
}

export default function P({ text }: PProps) {
    return <p className="text-red-400">{text}</p>
}
