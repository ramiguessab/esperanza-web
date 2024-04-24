"use client"
import React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { supabase } from "@/lib/backend/client_supabase"

export default function SendMessageButton() {
    return (
        <div className="flex flex-row gap-4">
            <Input />
            <Button
                onClick={() => {
                    supabase
                        .channel("messages", {
                            config: { broadcast: { self: true } },
                        })
                        .send({
                            event: "message_sent",
                            type: "broadcast",
                            payload: "Hello",
                        })
                        .then((res) => {
                            console.log(res)
                        })
                        .catch((err) => {
                            console.log("there is an error", err)
                        })
                }}
            >
                Send
            </Button>
        </div>
    )
}
