"use server"
import React from "react"
import CompititionTable from "@/components/admin/compitition/Table"
import { db } from "@/lib/backend/db"

export default async function page() {
    const compitition_participants = await db.query.compitition.findMany()

    return <CompititionTable participants={compitition_participants} />
}
