"use client"
import { useState, useEffect } from "react"
import Message from "./Message"
import React from "react"

export default function Messages() {
    const [messages, setMessages] = useState<string[]>([])

    useEffect(() => {}, [])
    return (
        <>
            {messages.map((message, index) => (
                <Message key={message + index} message={message} />
            ))}
        </>
    )
}
