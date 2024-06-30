"use server"
import { db } from "../db"

import { envision, IInsertEnvision } from "../schema/envision"

export async function register_compititions(values: IInsertEnvision) {
    return db.insert(envision).values(values)
}
