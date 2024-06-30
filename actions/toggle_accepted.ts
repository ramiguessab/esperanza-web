"use server"
import { sql, eq } from "drizzle-orm"
import { ISelectEnvision, envision } from "@/lib/backend/schema/envision"
import { db } from "@/lib/backend/db"

export async function toggle_accepted(participant: ISelectEnvision) {
    try {
        await db
            .update(envision)
            .set({ accepted: sql`not accepted` })
            .where(eq(envision.id, participant.id))
        return true
    } catch (err) {
        return false
    }
}
