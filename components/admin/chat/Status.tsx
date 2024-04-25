"use client"
import { useState, useEffect } from "react"
import { supabase } from "@/lib/backend/client_supabase"

export default function Status() {
    const [connected, setConnected] = useState(0)
    useEffect(() => {
        const roomOne = supabase.channel("room_01")
        const userStatus = {}
        roomOne
            .on("presence", { event: "sync" }, () => {
                const newState = roomOne.presenceState()
                setConnected(Object.keys(newState).length)
            })
            .subscribe(async (status) => {
                if (status !== "SUBSCRIBED") {
                    return
                }

                roomOne.track(userStatus)
            })

        return () => {
            roomOne.unsubscribe()
            roomOne.untrack()
        }
    }, [])
    return <div>{connected} Connected </div>
}
