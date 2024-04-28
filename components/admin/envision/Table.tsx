"use client"
import React, { useEffect, useState } from "react"
import { ISelectEnvision } from "@/lib/backend/schema/envision"
import ToggleAcceptedButton from "./ToggleAcceptedButton"
import { supabase } from "@/lib/backend/client_supabase"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Stats from "./Stats"

interface EnvisionTableProps {
    participants: {
        [id: string]: ISelectEnvision
    }
}

export default function EnvisionTable({ participants }: EnvisionTableProps) {
    const [liveParticipants, setLiveParcipants] = useState(participants)

    useEffect(() => {
        const channels = supabase
            .channel("custom-all-channel")
            .on<ISelectEnvision>(
                "postgres_changes",
                { event: "*", schema: "public", table: "envision" },
                ({ eventType, new: changes }) => {
                    console.log("changes", changes)
                    if (eventType === "INSERT" || eventType === "UPDATE") {
                        const { id } = changes
                        setLiveParcipants((prev) => ({
                            ...prev,
                            [id.toString()]: { ...changes },
                        }))
                    }
                }
            )
            .subscribe()

        return () => {
            channels.unsubscribe()
        }
    }, [liveParticipants])

    return (
        <>
            <Stats participants={liveParticipants} />
            <Table>
                <TableHeader className="stickey top-0">
                    <TableRow>
                        <TableHead>First Name</TableHead>
                        <TableHead>Last Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Reason</TableHead>
                        <TableHead>Major</TableHead>
                        <TableHead>Year Of Study</TableHead>
                        <TableHead>What Startup Means</TableHead>
                        <TableHead>Lunch</TableHead>
                        <TableHead>Accepted</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {Object.values(liveParticipants).map((participant) => (
                        <TableRow key={participant.id}>
                            <TableCell>{participant.first_name}</TableCell>
                            <TableCell>{participant.last_name}</TableCell>
                            <TableCell>{participant.email}</TableCell>
                            <TableCell>{participant.reason}</TableCell>
                            <TableCell>{participant.major}</TableCell>
                            <TableCell>{participant.year_of_study}</TableCell>
                            <TableCell>
                                {participant.what_startup_means}
                            </TableCell>
                            <TableCell>
                                {participant.lunch ? "✅" : "❌"}
                            </TableCell>
                            <TableCell>
                                {participant.accepted ? "✅" : "❌"}
                            </TableCell>
                            <TableCell>
                                <ToggleAcceptedButton
                                    participant={participant}
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    )
}
