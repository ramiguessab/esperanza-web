"use server"
import { db } from "../db"

import { web, ISelectWeb } from "../schema/web"

export async function register_web(values: ISelectWeb) {
    return db.insert(web).values(values)
}
