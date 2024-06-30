"use server"
import React from "react"
import { db } from "@/lib/backend/db"
import WebTable from "@/components/admin/web/Table"

export default async function page() {
    const web_participant = await db.query.web.findMany()

    return <WebTable participants={web_participant} />
}
