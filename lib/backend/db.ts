import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"
import * as web from "./schema/web"
import * as compitition from "./schema/compitition"
import * as envision from "./schema/envision"
import * as messages from "./schema/messages"
import "dotenv/config"

const SUPABASE_CONNECTION_STRING = process.env.DATABASE_URL!

const client = postgres(SUPABASE_CONNECTION_STRING)

export const db = drizzle(client, {
    schema: { ...web, ...compitition, ...envision, ...messages },
})
