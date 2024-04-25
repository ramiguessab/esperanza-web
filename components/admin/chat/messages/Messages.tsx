"use client"
import { useState, useEffect } from "react"
import Message from "./Message"
import React from "react"
import { supabase } from "@/lib/backend/client_supabase"

export function SomeoneTyping() {
    return (
        <div className="bg-slate-50 p-2 rounded-md text-wrap max-w-full break-words flex flex-row gap-1 items-center font-bold">
            <div className="bg-slate-900 w-2 h-2 rounded-full animate-bounce" />
            <div
                className="bg-slate-900 w-2 h-2 rounded-full animate-bounce"
                style={{ animationDelay: "700ms" }}
            />
            <div
                className="bg-slate-900 w-2 h-2 rounded-full animate-bounce"
                style={{ animationDelay: "1400ms" }}
            />
        </div>
    )
}

export default function Messages() {
    const [messages, setMessages] = useState<string[]>([])
    const [isTyping, setIsTyping] = useState(false)

    useEffect(() => {
        if (isTyping) {
            const timer = setTimeout(() => {
                setIsTyping(false)
            }, 2000)

            console.log("new timeout")

            return () => {
                clearTimeout(timer)
                console.log("cleared time out")
            }
        }
    }, [isTyping])

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
            .on("broadcast", { event: "someone_typing" }, () => {
                setIsTyping(true)
            })
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
            {isTyping && <SomeoneTyping />}
        </>
    )
}
