"use server"
import React from "react"
import EnvisionTable from "@/components/admin/envision/Table"
import { db } from "@/lib/backend/db"

export default async function page() {
    const __envision_participants = await db.query.envision.findMany({
        orderBy: ({ id }) => id,
    })

    const envision_participants: {
        [id: string]: (typeof __envision_participants)[0]
    } = {}

    __envision_participants.forEach((participant) => {
        envision_participants[participant.id.toString()] = participant
    })

    return <EnvisionTable participants={envision_participants} />
}
