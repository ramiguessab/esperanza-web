"use server"
import { db } from "../db"

import { compitition, ISelectCompition } from "../schema/compitition"

export async function register_compititions(values: ISelectCompition) {
    return db.insert(compitition).values(values)
}
