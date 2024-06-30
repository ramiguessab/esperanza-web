"use server"
import { db } from "../db"

import { compitition, IInsertCompitition } from "../schema/compitition"

export async function register_compititions(values: IInsertCompitition) {
    return db.insert(compitition).values(values)
}
