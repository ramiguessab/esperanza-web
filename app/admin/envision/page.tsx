"use server"
import React from "react"
import EnvisionTable from "@/components/admin/envision/Table"
import { db } from "@/lib/backend/db"

export default async function page() {
    const envision_participants = await db.query.envision.findMany()

    return <EnvisionTable participants={envision_participants} />
}
