"use server"
import { db } from "../db"

import { web, IInsertWeb } from "../schema/web"

export async function register_web(values: IInsertWeb) {
    return db.insert(web).values(values)
}
