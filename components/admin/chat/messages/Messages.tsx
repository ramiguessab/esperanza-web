"use client"
import { useState, useEffect } from "react"
import Message from "./Message"
import React from "react"
import { supabase } from "@/lib/backend/client_supabase"

export default function Messages() {
    const [messages, setMessages] = useState<string[]>([])

    useEffect(() => {
        const messagesChannel = supabase
            .channel("messages")
            .on<{ data: string }>(
                "broadcast",
                { event: "message_sent" },
                ({ payload }) => {
                    const { data } = payload
                    setMessages((prev) => [...prev, data])
                }
            )
            .subscribe()

        return () => {
            messagesChannel.unsubscribe()
        }
    }, [])
    return (
        <>
            {messages.map((message, index) => (
                <Message key={message + index} message={message} />
            ))}
        </>
    )
}
